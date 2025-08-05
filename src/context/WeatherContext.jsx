import { createContext, useContext, useEffect, useState } from "react";

export const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Karachi");
  const [weather, setWeather] = useState(null);

  const searchCity = async (selectedCity) => {
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_APP_ID}&q=${selectedCity}&aqi=no`;
      let res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.error) {
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (error) {
      console.log("Failed To Fetch data", error);
      setWeather(null);
    }
  };

  useEffect(() => {
    searchCity(city);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weather,searchCity}}>
      {children}
    </WeatherContext.Provider>
  );
};
