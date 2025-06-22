const WeatherCard = ({ weather }) => {
  const { name, sys, weather: weatherInfo, main, wind } = weather;
  const icon = weatherInfo[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="p-6 mt-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg text-white text-left transform transition duration-500 hover:scale-105 hover:bg-white/20">
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <img src={iconUrl} alt="weather icon" className="w-20 h-20 drop-shadow" />
        <div>
          <h2 className="text-2xl font-semibold">{name}, {sys.country}</h2>
          <p className="capitalize text-sm text-white/80">{weatherInfo[0].description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium">🌡️ Temperature</p>
          <p>{main.temp}°C</p>
        </div>
        <div>
          <p className="font-medium">💧 Humidity</p>
          <p>{main.humidity}%</p>
        </div>
        <div>
          <p className="font-medium">🌬️ Wind Speed</p>
          <p>{wind.speed} m/s</p>
        </div>
        <div>
          <p className="font-medium">🥵 Feels Like</p>
          <p>{main.feels_like}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
