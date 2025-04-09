import dotenv from 'dotenv';
import { prisma } from '../services/db';
import { cache } from '../services/cache';

dotenv.config({ path: '.env.test' });

beforeAll(async () => {
  try {
    // Clear database
    await prisma.$transaction([
      prisma.quote.deleteMany(),
      prisma.systemSettings.deleteMany(),
    ]);
  } catch (error) {
    console.error('Database cleanup error:', error);
  }

  // Clear Redis cache
  await cache.flush();
});

afterAll(async () => {
  await Promise.all([
    prisma.$disconnect(),
    cache.disconnect(),
  ]);
});

afterEach(async () => {
  try {
    // Clean up after each test
    await prisma.$transaction([
      prisma.quote.deleteMany(),
    ]);
  } catch (error) {
    console.error('Test cleanup error:', error);
  }
});
