import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../apis/weatherApi";
import Marquee from "react-fast-marquee";

function DisplayWeather() {
  // Fetch weather + asto data, calls new data at 8 minute intervals.
  const { data, isLoading, error } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeatherData,
    staleTime: 480000,
    cacheTime: 480000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    refetchInterval: 480000,
  });

  // lets TypeScript know what of type the error is from useQuery.
  type ErrorType = {
    message: string;
  };

  // Display weather + asto data on front end and handel loading + error states.
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {(error as ErrorType).message}</div>;
  }

  return (
    <Marquee autoFill={true} pauseOnHover={true} delay={4}>
      <div className="flex flex-row space-x-6 text-[15px] tracking-wide">
        <p>Weather: {data?.weather.current.condition.text}</p>
        <p>Temp: {data?.weather.current.temp_c}&deg;C</p>
        <p>Sunset: {data?.astronomy.astronomy.astro.sunset}</p>
        <p></p>
      </div>
    </Marquee>
  );
}

export default DisplayWeather;
