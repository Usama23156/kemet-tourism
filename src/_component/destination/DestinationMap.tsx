"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MAP_MARKER_INDICES,
  destinationByIndex,
  mapMarkerPositions,
} from "./destinationMapMarkers";

const markerLinkClassName =
  "destination-map-marker absolute z-10 flex flex-col items-center justify-center gap-0.5 sm:gap-1 -translate-x-1/2 -translate-y-1/2 rounded-md p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b49e09] motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-110";

const markerImageClassName =
  "h-5 w-5 rounded-full object-cover sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12";

const markerLabelClassName =
  "text-center text-[10px] font-bold leading-tight sm:text-xs lg:text-sm";

export default function DestinationMap() {
  return (
    <div className="w-full max-w-3xl px-4 sm:px-6">
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
        role="img"
        aria-label="Interactive map of Egypt showing destination locations along the Nile"
      >
        <Image
          data-aos="fade-up"
          src="/map-destination.png"
          alt="Stylized map of Egypt highlighting the Nile River and destination regions"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
          className="object-contain object-center"
        />

        {MAP_MARKER_INDICES.map((index) => {
          const dest = destinationByIndex[index];
          const position = mapMarkerPositions[index];

          return (
            <Link
              key={dest.id}
              href={`/Destination/DestinationDetails?id=${dest.id}`}
              data-aos={position.aos}
              className={markerLinkClassName}
              style={
                {
                  "--marker-top": `${position.mobile.top}%`,
                  "--marker-left": `${position.mobile.left}%`,
                  "--marker-top-lg": `${position.desktop.top}%`,
                  "--marker-left-lg": `${position.desktop.left}%`,
                } as React.CSSProperties
              }
              aria-label={`View details for ${dest.name}`}
            >
              <Image
                src={dest.img}
                alt=""
                width={48}
                height={48}
                aria-hidden
                className={markerImageClassName}
              />
              <span className={markerLabelClassName}>{dest.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
