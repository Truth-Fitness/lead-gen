import * as React from "react";
import { SVGProps } from "react";

export const Blob = (props: SVGProps<SVGSVGElement>) => (
  <div className="svg-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMin slice"
      style={{ overflow: "visible" }}
      {...props}
    >
      <defs>
        <linearGradient
          id="gradient-a"
          x1={0}
          y1={0}
          x2={800}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#163029" />
          <stop offset={0.243} stopColor="#294635" />
          <stop offset={0.586} stopColor="#4C6548" />
          <stop offset={1} />
        </linearGradient>
      </defs>
      <path
        d="M477.2 201.2c27.2 43.5 6.4 118.1-31.1 177.8-37.6 59.7-91.8 104.3-152.3 107.9-60.5 3.6-127.2-33.9-153.9-87.3-26.7-53.4-13.4-122.8 19.9-169.8 33.4-47.1 86.8-72 151-78.2 64.3-6.3 139.3 6.1 166.4 49.6Z"
        fill="url(#gradient-a)"
      />
    </svg>
  </div>
);
