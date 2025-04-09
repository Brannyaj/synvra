import { Router } from 'express';
import { prisma } from '../services/db';
import { z } from 'zod';

const router = Router();

// Validation schema for quote submission
const quoteSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  budget: z.number().optional(),
  deadline: z.string().optional().transform(val => val ? new Date(val) : undefined),
});

// Submit a new quote
router.post('/', async (req, res) => {
  try {
    const data = quoteSchema.parse(req.body);
    
    const quote = await prisma.quote.create({
      data: {
        ...data,
        status: 'pending'
      }
    });

    res.status(201).json({ quote });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error('Quote submission error:', error);
      res.status(500).json({ error: 'Failed to submit quote' });
    }
  }
});

// Get all quotes (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    res.json({ quotes });
  } catch (error) {
    console.error('Error fetching quotes:', error);
    res.status(500).json({ error: 'Failed to fetch quotes' });
  }
});

export default router;
