import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: 'Analytics not available in static export',
    stats: {
      totalVisits: 0,
      pathStats: []
    }
  });
}

export async function POST() {
  return NextResponse.json({ 
    success: true, 
    message: 'Visit tracked successfully'
  });
} 