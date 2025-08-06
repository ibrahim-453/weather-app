import clear from "../assets/clear.jpg"
import storm from "../assets/storm.jpg";
import mist from "../assets/mist.jpeg";
import cloudy from "../assets/cloudy.jpeg";
import snow from "../assets/snow.jpeg";
import rain from "../assets/rain.jpeg";
import heroimage from "../assets/heroimage.jpeg";

export function getbgimage(condition = "") {
  const text = condition.toLowerCase();

  if (text.includes("clear")) return clear;
  if (text.includes("storm") || text.includes("thunder")) return storm;
  if (text.includes("mist") || text.includes("fog") || text.includes("haze")) return mist;
  if (text.includes("overcast") || text.includes("cloud")) return cloudy;
  if (text.includes("snow") || text.includes("sleet") || text.includes("blizzard")) return snow;
  if (text.includes("rain") || text.includes("drizzle")) return rain;
  if (text.includes("sunny") || text.includes("drizzle")) return clear;

  return heroimage;
}
