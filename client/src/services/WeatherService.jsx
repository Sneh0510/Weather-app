import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/weather`;

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        city,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'City not found',
    };
  }
};
