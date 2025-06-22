import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

router.get('/', async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ message: 'City name is required' });
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: error.response?.data?.message || 'Error fetching weather',
    });
  }
});

export default router;
