import ReactGA from "react-ga4";
import { useCallback } from "react";

const useTrackEvent = () => {
  return useCallback((category: string, action: string, label: string) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  }, []);
};

export default useTrackEvent;
