import { OurDestination } from "@/data/data";

/** Destination indices rendered on the interactive map (order preserved). */
export const MAP_MARKER_INDICES = [0, 1, 2, 3, 4, 5, 6, 10, 9, 8, 7] as const;

export type MapMarkerIndex = (typeof MAP_MARKER_INDICES)[number];

type Point = {
  top: number;
  left: number;
};

type MarkerPosition = {
  mobile: Point;
  desktop: Point;
  aos: "fade-left" | "fade-right";
};

/**
 * Percentage-based positions relative to the square map image.
 * Mobile values derived from the original bottom/right offsets (~375px).
 * Desktop values derived from the original lg breakpoint layout (~768px).
 */
export const mapMarkerPositions: Record<MapMarkerIndex, MarkerPosition> = {
  0: {
    mobile: { top: 60, left: 71 },
    desktop: { top: 60, left: 50 },
    aos: "fade-left",
  },
  1: {
    mobile: { top: 67, left: 57 },
    desktop: { top: 67, left: 39 },
    aos: "fade-right",
  },
  2: {
    mobile: { top: 79, left: 63 },
    desktop: { top: 76, left: 41 },
    aos: "fade-right",
  },
  3: {
    mobile: { top: 76, left: 83 },
    desktop: { top: 74, left: 57 },
    aos: "fade-left",
  },
  4: {
    mobile: { top: 87, left: 55 },
    desktop: { top: 86, left: 40 },
    aos: "fade-right",
  },
  5: {
    mobile: { top: 92, left: 80 },
    desktop: { top: 92, left: 31 },
    aos: "fade-right",
  },
  6: {
    mobile: { top: 63, left: 89 },
    desktop: { top: 60, left: 69 },
    aos: "fade-right",
  },
  7: {
    mobile: { top: 25, left: 28 },
    desktop: { top: 18, left: 6 },
    aos: "fade-right",
  },
  8: {
    mobile: { top: 47, left: 23 },
    desktop: { top: 38, left: 18 },
    aos: "fade-right",
  },
  9: {
    mobile: { top: 28, left: 47 },
    desktop: { top: 24.5, left: 24.5 },
    aos: "fade-right",
  },
  10: {
    mobile: { top: 49, left: 92 },
    desktop: { top: 41, left: 73 },
    aos: "fade-right",
  },
};

export const destinationByIndex = OurDestination;
