import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../apis/weatherApi";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

function DisplayWeather() {
  // Delays the render of the weather marquee by 2 seconds.
  const delayWeather = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2, delay: 2 } },
  };
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
    return <div></div>;
  }
  if (error) {
    return <div>Error: {(error as ErrorType).message}</div>;
  }

  return (
    <Marquee
      autoFill={true}
      speed={35}
      pauseOnHover={true}
      delay={4}
      gradient={true}
      gradientWidth={5}
      gradientColor="#f1f1ec"
    >
      <motion.div
        variants={delayWeather}
        initial="hidden"
        animate="visible"
        className="text-[15px] tracking-wide text-blueLink"
      >
        <p className="mr-4 inline-block opacity-65">
          Current Weather: {data?.weather.current.condition.text}
        </p>
        <p className="mr-4 inline-block">
          Temp: {data?.weather.current.temp_c}&deg;C
        </p>
        <p className="mr-4 inline-block">
          Pressure: {data?.weather.current.pressure_mb} mb
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
  );
}

export default DisplayWeather;
