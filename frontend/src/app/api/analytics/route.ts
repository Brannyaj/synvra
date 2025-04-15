import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Redis } from '@upstash/redis';

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || ''
});

export async function POST(request: Request) {
  try {
    const headersList = headers();
    const date = new Date();
    const dayKey = `visits:${date.toISOString().split('T')[0]}`;
    const pathKey = `path:${headersList.get('referer') || 'unknown'}`;

    // Increment daily visits
    await redis.incr(dayKey);
    // Increment path visits
    await redis.incr(pathKey);
    // Set expiry for data (keep for 1 year)
    await redis.expire(dayKey, 60 * 60 * 24 * 365);
    await redis.expire(pathKey, 60 * 60 * 24 * 365);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ success: false });
  }
} 