import { cache } from './services/cache';

async function testRedis() {
  try {
    // Test connection
    const isHealthy = await cache.healthCheck();
    console.log('Redis connection health:', isHealthy);

    // Test set and get
    await cache.set('test-key', { message: 'Hello Redis!' });
    const value = await cache.get('test-key');
    console.log('Retrieved value:', value);

    // Test TTL
    await cache.set('ttl-key', { message: 'This will expire' }, 5);
    console.log('Set TTL key, will expire in 5 seconds');

    // Wait 6 seconds and try to get the TTL key
    setTimeout(async () => {
      const ttlValue = await cache.get('ttl-key');
      console.log('TTL key after expiry:', ttlValue);
      process.exit(0);
    }, 6000);

  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
}

testRedis();
