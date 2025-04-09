import request from 'supertest';
import { app } from '../../app';
import { prisma } from '../../services/db';

describe('Quote Routes', () => {
  describe('POST /api/quotes', () => {
    it('should submit a new quote', async () => {
      const quoteData = {
        name: 'Test Client',
        email: 'client@test.com',
        phone: '123-456-7890',
        company: 'Test Company',
        description: 'Need a new website with modern design and functionality',
        budget: 5000,
        deadline: '2025-12-31',
      };

      const response = await request(app)
        .post('/api/quotes')
        .send(quoteData)
        .expect(201);

      expect(response.body.quote).toMatchObject({
        name: quoteData.name,
        email: quoteData.email,
        status: 'pending',
      });

      // Verify quote was saved in database
      const savedQuote = await prisma.quote.findUnique({
        where: { id: response.body.quote.id },
      });
      expect(savedQuote).toBeTruthy();
    });

    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/quotes')
        .send({})
        .expect(400);

      expect(response.body.errors).toBeDefined();
    });
  });

  describe('GET /api/quotes', () => {
    it('should list all quotes', async () => {
      // Create a test quote first
      const quote = await prisma.quote.create({
        data: {
          name: 'Test Client',
          email: 'test@example.com',
          description: 'Test project description',
          status: 'pending',
        },
      });

      const response = await request(app)
        .get('/api/quotes')
        .expect(200);

      expect(Array.isArray(response.body.quotes)).toBe(true);
      expect(response.body.quotes.length).toBeGreaterThan(0);
      expect(response.body.quotes[0]).toHaveProperty('id');
    });
  });
});
