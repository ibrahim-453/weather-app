import { Eye, Wind, Droplets, Thermometer, Sun, Cloud } from "lucide-react";
import { useWeather } from "../context/WeatherContext";

function Weather() {
    const { weather } = useWeather();

    if (!weather || !weather.current || !weather.location) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/20">
                    <div className="animate-spin w-12 h-12 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading weather data...</p>
                </div>
            </div>
        );
    }

    const currentTemp = Math.round(weather.current.temp_c);
    const feelsLike = Math.round(weather.current.feelslike_c);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 bg-white/15 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20 p-6 sm:p-8">
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                        <img
                            src={weather.current.condition.icon}
                            alt={weather.current.condition.text}
                            className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light text-white mb-2 tracking-tight">
                            {currentTemp}°
                        </h2>
                        <p className="text-white/80 text-lg sm:text-xl mb-2">
                            Feels like {feelsLike}°C
                        </p>
                        <p className="text-white/90 text-xl sm:text-2xl font-medium capitalize">
                            {weather.current.condition.text}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                        <MapPin size={20} />
                        <span className="text-lg sm:text-xl font-medium">
                            {weather.location.name}, {weather.location.country}
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-white/15 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20 p-6 sm:p-8">
                <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                    <Sun size={24} />
                    Weather Details
                </h3>
                
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                <Droplets size={24} className="text-blue-300" />
                            </div>
                            <div>
                                <p className="text-white/70 text-sm">Humidity</p>
                                <p className="text-white text-xl font-semibold">{weather.current.humidity}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                <Wind size={24} className="text-green-300" />
                            </div>
                            <div>
                                <p className="text-white/70 text-sm">Wind Speed</p>
                                <p className="text-white text-xl font-semibold">{weather.current.wind_kph} km/h</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <Eye size={24} className="text-purple-300" />
                            </div>
                            <div>
                                <p className="text-white/70 text-sm">Visibility</p>
                                <p className="text-white text-xl font-semibold">{weather.current.vis_km} km</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                                <Sun size={24} className="text-orange-300" />
                            </div>
                            <div>
                                <p className="text-white/70 text-sm">UV Index</p>
                                <p className="text-white text-xl font-semibold">{weather.current.uv || 'N/A'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
