import { useEffect, useState } from "react";

function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex space-x-5 font-primary text-[18px] leading-[23px] tracking-wide">
      <p>
        {dateTime
          .toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
          .replace(/:/g, ":")}
      </p>
      <p>{dateTime.toLocaleDateString().replace(/\//g, ".")}</p>
    </div>
  );
}

export default DateTime;
