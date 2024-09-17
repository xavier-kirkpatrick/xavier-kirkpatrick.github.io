import { useRef, useEffect } from "react";
import "../styles/custom_cursor.css";

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trackCursorMovements = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };
    window.addEventListener("mousemove", trackCursorMovements);

    return () => {
      window.removeEventListener("mousemove", trackCursorMovements);
    };
  }, []);
  return (
    <div className="custom-cursor" ref={cursorRef}>
      +
    </div>
  );
}

export default CustomCursor;
