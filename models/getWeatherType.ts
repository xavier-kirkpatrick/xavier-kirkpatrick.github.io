export interface WeatherDataShape {
  current: {
    air_quality: { co: number; no2: number };
    condition: { text: string };
    temp_c: number;
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

// Also want to get data for: Sunset, Air Quality
