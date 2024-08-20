export interface WeatherDataShape {
  current: {
    air_quality: { co: number; no2: number };
    condition: { text: string };
    humidity: number;
    temp_c: number;
    pressure_mb: number;
    uv: number;
    wind_dir: string;
    wind_kph: number;
  };
  location: { country: string; name: string };
}

export interface AstroDataShape {
  astronomy: {
    astro: {
      sunset: string;
    };
  };
}
