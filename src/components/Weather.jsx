import { Eye, Wind } from "lucide-react";
import humidity from "../assets/humidity.png";
import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { weather } = useWeather();

  if (!weather || !weather.current || !weather.location) {
    return <div className="text-white text-center mt-20">Loading weather...</div>;
  }

  return (
    <div className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl max-w-[300px] md:max-w-4xl mx-auto h-fit flex flex-col justify-between p-6 gap-4">
      <div className="flex justify-center">
        <img
          src={weather.current.condition.icon}
          alt={weather.current.condition.text}
          className="w-20 h-20 md:w-32 md:h-32 object-contain"
        />
      </div>
      <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-black">
          {weather.current.temp_c}°C
        </h3>
        <p className="text-black text-sm md:text-base mt-1">
          Feels like {weather.current.feelslike_c}°C
        </p>
        <h4 className="text-lg md:text-xl text-black mt-2 font-medium">
          {weather.location.name}, {weather.location.region}, {weather.location.country}
        </h4>
      </div>

      <hr className="my-2 border border-black/30" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="flex items-center gap-3">
          <img src={humidity} alt="Humidity" className="w-[40px] h-[40px] md:w-[60px] md:h-[50px]" />
          <div>
            <span className="text-lg font-semibold text-black">{weather.current.humidity}%</span>
            <p className="text-sm text-black">Humidity</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Wind size={40} className="text-black" />
          <div>
            <span className="text-lg font-semibold text-black">{weather.current.wind_kph} km/h</span>
            <p className="text-sm text-black">Wind</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Eye size={40} className="text-black" />
          <div>
            <span className="text-lg font-semibold text-black">{weather.current.vis_km} km</span>
            <p className="text-sm text-black">Visibility</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
