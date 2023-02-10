import React from "react";

export default function Logo({ src, alt, height, width }) {
  return (
    <div>
      <img src={src} alt={alt} height={height} width={width} />
    </div>
  );
}
