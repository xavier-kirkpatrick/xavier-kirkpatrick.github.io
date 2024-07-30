import axios from "axios";
import { AstroDataShape, WeatherDataShape } from "../../models/getWeatherType";

export async function fetchWeatherData() {
  const date = new Date();
  const formattedDate = formatDate(date);
  const apiKey = getApiKey();

  if (!apiKey) {
    console.error("API key not found");
    return;
  }

  try {
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
  } catch (error) {
    console.error("Weather report not available", error);
  }
}

function formatDate(date: Date): string {
  const formattedDate = date.toLocaleDateString().replace(/\//g, "-");
  return formattedDate.split("-").reverse().join("-");
}

function getApiKey(): string {
  return import.meta.env.VITE_WEATHER_API_KEY;
}

async function fetchWeather(apiKey: string): Promise<WeatherDataShape> {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auckland&aqi=yes`,
  );
  return data;
}

async function fetchAstronomy(
  apiKey: string,
  date: string,
): Promise<AstroDataShape> {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=auckland&dt=${date}`,
  );
  return data;
}
