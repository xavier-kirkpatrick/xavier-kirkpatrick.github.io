import axios from "axios";
import { AstroDataShape, WeatherDataShape } from "../../models/getWeatherType";

export async function fetchWeatherData() {
  const date = new Date();
  const formattedDate = formatDate(date);
  const apiKey = getApiKey();

  const [weatherData, astronomyData] = await Promise.all([
    fetchWeather(apiKey),
    fetchAstronomy(apiKey, formattedDate),
  ]);
  const weatherApiData = {
    weather: weatherData,
    astronomy: astronomyData,
  };
  console.log(weatherApiData);

  return weatherApiData;
}

function formatDate(date: Date): string {
  const formattedDate = date.toLocaleDateString().replace(/\//g, "-");
  return formattedDate.split("-").reverse().join("-");
}

function getApiKey(): string {
  const getApiKey = import.meta.env.VITE_WEATHER_API_KEY;
  return !getApiKey
    ? (console.error("API key not found"), "API key not found")
    : getApiKey;
}

async function fetchWeather(apiKey: string): Promise<WeatherDataShape> {
  try {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auckland&aqi=yes`,
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Weather data not available");
  }
}

async function fetchAstronomy(
  apiKey: string,
  date: string,
): Promise<AstroDataShape> {
  try {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=auckland&dt=${date}`,
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Astronomy data not available");
  }
}
