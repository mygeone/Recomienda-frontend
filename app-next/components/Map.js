import React, { useEffect, useRef, ReactElement } from "react";

function Map({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

export default Map;
