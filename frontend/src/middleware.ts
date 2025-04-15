import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of allowed Google bot user agents
const googleBots = [
  'Googlebot',
  'Googlebot-Image',
  'Googlebot-News',
  'Googlebot-Video',
  'Googlebot-Mobile',
  'AdsBot-Google',
  'AdsBot-Google-Mobile',
  'APIs-Google',
];

export function middleware(request: NextRequest) {
  // Get the user agent
  const userAgent = request.headers.get('user-agent') || '';
  
  // Check if it's a Google bot
  const isGoogleBot = googleBots.some(bot => 
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );

  // If it's a Google bot, allow access
  if (isGoogleBot) {
    return NextResponse.next();
  }

  // List of blocked user agents (common scraping tools)
  const blockedUserAgents = [
    'HTTrack',
    'WebCopier',
    'wget',
    'curl',
    'python',
    'ruby',
    'Wget',
    'axios',
    'node-fetch',
    'Postman',
    'request',
    'scrapy',
    'selenium',
    'phantomjs',
    'headless',
  ];

  // Check if the user agent is in the blocked list
  if (blockedUserAgents.some(agent => userAgent.toLowerCase().includes(agent.toLowerCase()))) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  // Rate limiting (basic implementation - for production, use a proper rate limiting service)
  const ip = request.ip || '';
  const timestamp = Date.now();
  
  // Add custom headers to make scraping harder
  const response = NextResponse.next();
  
  // Only add anti-scraping headers for non-Google bots
  if (!isGoogleBot) {
    // Add random request ID to make caching harder
    response.headers.set('X-Request-Id', Math.random().toString(36).substring(7));
    
    // Disable browser features that could be used for scraping
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    
    // Add honeypot data
    response.headers.set('X-Powered-By', 'PHP/7.4.3'); // Misleading server info
  }
  
  return response;
}

export const config = {
  matcher: '/:path*',
} 