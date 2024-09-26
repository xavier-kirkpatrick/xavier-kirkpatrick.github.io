import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../apis/weatherApi";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { delayMarquee } from "../motion_variants/delayMarquee";

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

  // lets TypeScript know of what type the error is from useQuery.
  type ErrorType = {
    message: string;
  };

  // Display weather + astro data on front end and handle loading + error states.
  if (isLoading) {
    return <div></div>;
  }
  if (error) {
    return <div>Error: {(error as ErrorType).message}</div>;
  }

  return (
    <motion.div variants={delayMarquee} initial="hidden" animate="visible">
      <Marquee
        autoFill={true}
        speed={35}
        pauseOnHover={true}
        delay={0}
        gradient={false}
        gradientWidth={5}
        gradientColor="#f1f1ec"
      >
        <motion.div className="text-[15px] tracking-wide text-blueLink">
          <p className="mr-4 inline-block opacity-65">
            Current Weather: {data?.weather.current.condition.text}
          </p>
          <p className="mr-4 inline-block">
            Temp: {data?.weather.current.temp_c}&deg;C
          </p>
          <p className="mr-4 inline-block">
            Humidity: {data?.weather.current.humidity}%
          </p>
          <p className="mr-4 inline-block">
            Pressure: {data?.weather.current.pressure_mb} mb
          </p>
          <p className="mr-4 inline-block">
            Wind Speed: {data?.weather.current.wind_kph} kph
          </p>
          <p className="mr-4 inline-block">
            Wind Direction: {data?.weather.current.wind_dir}
          </p>
          <p className="mr-4 inline-block">
            UV Index: {data?.weather.current.uv}{" "}
          </p>
          <p className="mr-4 inline-block">
            Sunset: {data?.astronomy.astronomy.astro.sunset}
          </p>
          <p></p>
        </motion.div>
      </Marquee>
    </motion.div>
  );
}

export default DisplayWeather;
