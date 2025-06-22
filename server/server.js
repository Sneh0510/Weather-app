import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRoutes from './routes/weather.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes);

app.listen(PORT, () => {
  console.log(`🌍 Server is running on port ${PORT}`);
});
