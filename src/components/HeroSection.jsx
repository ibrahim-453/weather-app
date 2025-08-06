import { useWeather } from "../context/WeatherContext";
import Weather from "./Weather";
import { getbgimage } from "../BgImage/getbgimage"

function HeroSection() {
  const { weather } = useWeather();
  const bgImage = getbgimage(weather?.current?.condition?.text);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative w-full min-h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center p-4"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-20 sm:pt-24">
        <Weather />
      </div>
    </div>
  );
}

export default HeroSection;
