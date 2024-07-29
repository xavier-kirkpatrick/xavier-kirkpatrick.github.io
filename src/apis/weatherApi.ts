import axios from "axios";

export async function getWeather(): Promise<void> {
  const apikey = import.meta.env.VITE_WEATHER_API_KEY;

  if (!apikey) {
    console.log("API key not found");
    return;
  }

  try {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=auckland&aqi=no`;
    const { data } = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.log("Weather report not available", error);
  }
}
