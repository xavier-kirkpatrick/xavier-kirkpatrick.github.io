import { useState } from "react";
import Marquee from "react-fast-marquee";

function MoveMe() {
  const [currentMarquee, setCurrentMarquee] = useState("left");
  return (
    <>
      <div>
        {currentMarquee === "left" && (
          <Marquee
            autoFill={false}
            loop={1}
            speed={35}
            direction="right"
            delay={0}
            gradient={true}
            gradientWidth={5}
            gradientColor="#f1f1ec"
            onFinish={() => setCurrentMarquee("right")}
            className="mb-1 mr-4 mt-1 inline-block text-xs italic text-blueLink"
          >
            Move me
          </Marquee>
        )}
      </div>
      <div>
        {currentMarquee === "right" && (
          <Marquee
            autoFill={false}
            loop={1}
            speed={35}
            direction="left"
            delay={0}
            gradient={true}
            gradientWidth={5}
            gradientColor="#f1f1ec"
            onFinish={() => setCurrentMarquee("left")}
            className="mb-1 mt-1 inline-block text-xs italic text-blueLink"
          >
            Move me
          </Marquee>
        )}
      </div>
    </>
  );
}

export default MoveMe;
