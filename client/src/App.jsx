import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import { fetchWeather } from './services/WeatherService';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    const result = await fetchWeather(city);
    if (result.success) {
      setWeather(result.data);
      setError('');
    } else {
      setError(result.message);
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 text-center border border-white/20 transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wide animate-bounce">
          🌤️ Weather Wizard
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2 w-full sm:w-2/3 rounded-xl bg-white/20 text-white placeholder-white/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
          />
          <button
            onClick={handleSearch}
            className="w-full sm:w-auto bg-white text-indigo-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-indigo-100 hover:text-indigo-900 transition-all duration-300"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-200 text-sm mt-2 animate-pulse">{error}</p>}

        {weather && (
          <div className="mt-4 transition-opacity duration-700 opacity-100 w-full">
            <WeatherCard weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
