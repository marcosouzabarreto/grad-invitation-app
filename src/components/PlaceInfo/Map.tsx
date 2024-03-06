"use client"
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type Props = {
  className?: string;
};

const Map = ({ ...rest }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
      version: "weekly",
    });

    loader.load().then(() => {
      const latitude = -11.730722;
      const longitude = -40.562778;
      const location = { lat: latitude, lng: longitude };

      const map = new google.maps.Map(mapRef.current!, {
        zoom: 15, 
        center: location,
      });

      new google.maps.Marker({
        position: location,
        map: map,
        title: "Custom Location", 
      });
    }).catch(e => {
      console.error("Error loading the Google Maps JavaScript API", e);
    });
  }, []); 

  return <div {...rest} ref={mapRef} />;
};

export default Map;

