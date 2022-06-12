import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from './utils/logger';
import Route from './routes/roman';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors({ origin: 'http://localhost:3001/' }));
app.use('/romannumeral', Route);

app.all('*', (_, res) => {
  res.status(404).json({ error: 'Page not found!' });
});

app.listen(PORT, () => logger.info(`Listening on PORT: ${PORT}`));
