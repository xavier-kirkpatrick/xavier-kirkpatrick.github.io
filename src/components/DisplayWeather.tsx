import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../apis/weatherApi";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {(error as ErrorType).message}</div>;
  }

  return (
    <div>
      <p>{data?.weather.current.condition.text}</p>
      <p>Temp: {data?.weather.current.temp_c}&deg;C</p>
    </div>
  );
}

export default DisplayWeather;
