import { useRef, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import "../styles/custom_cursor.css";

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const trackCursorMovements = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
        cursorRef.current.style.display = "block";
      }
    };

    const trackCursorLeave = (event: MouseEvent) => {
      if (!event.relatedTarget && cursorRef.current) {
        cursorRef.current.style.display = "none";
      }
    };

    window.addEventListener("mousemove", trackCursorMovements);
    window.addEventListener("mouseout", trackCursorLeave);

    return () => {
      window.removeEventListener("mousemove", trackCursorMovements);
      window.removeEventListener("mouseout", trackCursorLeave);
    };
  }, []);

  const darkOrLightCursor = darkMode === "Dark" ? "#000000" : "#f1f1ec";

  return (
    <div
      className="custom-cursor"
      style={{ display: "none", color: darkOrLightCursor }}
      ref={cursorRef}
    >
      +
    </div>
  );
}

export default CustomCursor;
