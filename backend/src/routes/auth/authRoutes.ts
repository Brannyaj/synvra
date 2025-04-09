 import { Router } from 'express';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const router = Router();

// Validation schemas
const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['client', 'admin']).default('client'),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Register new user
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = registerSchema.parse(req.body);

    // TODO: Check if user already exists
    // const existingUser = await prisma.user.findUnique({ where: { email } });
    // if (existingUser) {
    //   return res.status(400).json({ error: 'User already exists' });
    // }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // TODO: Create user in database
    // const user = await prisma.user.create({
    //   data: {
    //     name,
    //     email,
    //     password: hashedPassword,
    //     role,
    //   },
    // });

    // Generate JWT token
    const token = jwt.sign(
      { id: 'user.id', role },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    res.status(201).json({
      token,
      user: {
        id: 'user.id',
        name,
        email,
        role,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login user
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body);

    // TODO: Find user in database
    // const user = await prisma.user.findUnique({ where: { email } });
    // if (!user) {
    //   return res.status(400).json({ error: 'Invalid credentials' });
    // }

    // TODO: Verify password
    // const validPassword = await bcrypt.compare(password, user.password);
    // if (!validPassword) {
    //   return res.status(400).json({ error: 'Invalid credentials' });
    // }

    // Generate JWT token
    const token = jwt.sign(
      { id: 'user.id', role: 'user.role' },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: 'user.id',
        name: 'user.name',
        email,
        role: 'user.role',
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Logout user (optional, since JWT is stateless)
router.post('/logout', (_req: Request, res: Response) => {
  res.json({ message: 'Logged out successfully' });
});

// Get current user
router.get('/me', async (req: Request, res: Response) => {
  try {
    // TODO: Get user from JWT token
    // const user = await prisma.user.findUnique({
    //   where: { id: req.user.id },
    //   select: {
    //     id: true,
    //     name: true,
    //     email: true,
    //     role: true,
    //   },
    // });

    res.json({
      user: {
        id: 'user.id',
        name: 'user.name',
        email: 'user.email',
        role: 'user.role',
      },
    });
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
