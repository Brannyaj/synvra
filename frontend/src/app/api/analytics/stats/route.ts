import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

// Initialize Redis client only if configuration is available
const redis = process.env.UPSTASH_REDIS_REST_URL?.startsWith('https://') && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN
    })
  : null;

export async function GET(request: Request) {
  try {
    if (!redis) {
      console.warn('Redis not configured or invalid URL - skipping analytics stats');
      return NextResponse.json({ 
        success: true, 
        message: 'Analytics disabled',
        stats: {
          totalVisits: 0,
          pathStats: []
        }
      });
    }

    // Basic auth check
    const headersList = headers();
    const authHeader = headersList.get('authorization');
    const expectedAuth = `Bearer ${process.env.ANALYTICS_API_KEY}`;
    
    if (authHeader !== expectedAuth) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Get all keys
    const keys = await redis.keys('*');
    const visitKeys = keys.filter(key => key.startsWith('visits:'));
    const pathKeys = keys.filter(key => key.startsWith('path:'));

    // Get visit counts
    const visitCounts = await Promise.all(
      visitKeys.map(async key => ({
        date: key.split(':')[1],
        count: parseInt(await redis.get(key) || '0')
      }))
    );

    // Get path stats
    const pathStats = await Promise.all(
      pathKeys.map(async key => ({
        path: key.split(':')[1],
        visits: parseInt(await redis.get(key) || '0')
      }))
    );

    const totalVisits = visitCounts.reduce((sum, day) => sum + day.count, 0);

    return NextResponse.json({
      success: true,
      stats: {
        totalVisits,
        dailyVisits: visitCounts,
        pathStats
      }
    });
  } catch (error: any) {
    console.error('Analytics stats error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error?.message || 'Unknown error',
      stats: {
        totalVisits: 0,
        pathStats: []
      }
    });
  }
} 