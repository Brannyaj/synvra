import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { headers } from 'next/headers';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || ''
});

export async function GET(request: Request) {
  try {
    // Basic auth check
    const headersList = headers();
    const authHeader = headersList.get('authorization');
    const expectedAuth = `Bearer ${process.env.ANALYTICS_API_KEY}`;
    
    if (authHeader !== expectedAuth) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Get all keys
    const keys = await redis.keys('visits:*');
    const pathKeys = await redis.keys('path:*');
    
    // Get visits data
    const visits = await Promise.all(
      keys.map(async (key) => {
        const count = await redis.get(key);
        return {
          date: key.replace('visits:', ''),
          count
        };
      })
    );

    // Get path data
    const paths = await Promise.all(
      pathKeys.map(async (key) => {
        const count = await redis.get(key);
        return {
          path: key.replace('path:', ''),
          count
        };
      })
    );

    return NextResponse.json({
      visits: visits.sort((a, b) => b.date.localeCompare(a.date)),
      paths: paths.sort((a, b) => Number(b.count) - Number(a.count))
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 