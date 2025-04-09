import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import quotesRouter from './routes/quotes';

const app = express();

// Configure CORS
app.use(cors({
  origin: ['http://localhost:3003'], // Allow frontend origin
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/quotes', quotesRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

export { app };
