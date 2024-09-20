import { Variants } from "framer-motion";

export const sparkleEffect: Variants = {
  effect: {
    opacity: [
      1, 0.5, 1, 0.4, 0.6, 1, 0.4, 1, 0.7, 0.5, 1, 0.55, 0.6, 1, 0.65, 0.7, 1,
      0.75, 0.8, 1, 0.85, 0.9, 1, 0.95, 1, 0.5, 1, 0.55, 0.6, 1, 0.65, 0.7, 1,
      0.75, 0.8, 1, 0.85, 0.9, 1, 0.95, 1, 0.5, 1, 0.55, 0.6, 1, 0.65, 0.7, 1,
      0.75, 0.8, 1, 0.85, 0.9, 1, 0.95, 1, 0.5, 1, 0.55, 0.6, 1, 0.65, 0.7, 1,
      0.75, 0.8, 1, 0.85, 0.9, 1, 0.95, 1,
    ],
    transition: { duration: 20, repeat: Infinity, repeatType: "reverse" },
  },
};
