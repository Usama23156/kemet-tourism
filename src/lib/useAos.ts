import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAos() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      AOS.init({
        duration: prefersReducedMotion ? 0 : 800,
        easing: "ease-out-cubic",
        once: true,
        anchorPlacement: "top-bottom",
        disable: prefersReducedMotion,
      });
    };

    initAOS();
  }, []);
}
