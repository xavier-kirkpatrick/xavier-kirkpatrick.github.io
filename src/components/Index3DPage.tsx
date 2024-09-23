import { motion } from "framer-motion";
import { fadeInText } from "../motion_variants/fadeInText";
import { useState, MouseEvent } from "react";
import ThankYou from "../components/ThankYou";

export default function Index3D() {
  const [position3DText, setPosition3DText] = useState({
    x: 0,
    y: 0,
    scale: 0.6,
    z: -1000,
  });

  const trackMouseMove = (e: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const xDistance = (e.clientX - windowHeight / 2) / windowWidth;
    const yDistance = (e.clientY - windowWidth / 2) / windowHeight;

    const zoomLevel = Math.max(
      1.2 - Math.abs(xDistance) - Math.abs(yDistance),
      0.6,
    );
    const translateZ = -1000 + 1000 * (1 - Math.abs(xDistance + yDistance));

    setPosition3DText({
      x: xDistance * 50,
      y: yDistance * 50,
      scale: zoomLevel,
      z: translateZ,
    });
  };
  return (
    // Container div

    <motion.div
      className="flex min-h-full items-center justify-center"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {/* flex row #1 */}
      <motion.div
        className="w-80 text-contentFontSize"
        onMouseMove={trackMouseMove}
        style={{
          transform: `
            translateX(${position3DText.x}px) 
            translateY(${position3DText.y}px) 
            scale(${position3DText.scale}) 
            translateZ(${position3DText.z}px)
          `,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        Welcome, I’m a Software Developer from Tāmaki Makaurau, Auckland, New
        Zealand. It is an exciting time for me as I pivot into the tech
        industry, and in 2024, I am looking to progress my career in
        Development. Here you can find work completed during my studies as well
        as other external projects. You’ll also find other non-development
        related interests where I spend my time, personal information and points
        of contact.
      </motion.div>
    </motion.div>
  );
}
