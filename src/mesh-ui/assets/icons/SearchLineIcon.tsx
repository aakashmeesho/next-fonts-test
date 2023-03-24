import * as React from 'react';
import { SVGProps } from 'react';

export const SearchLineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z"
        fill="#666666"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0 0.000244141)"
        />
      </clipPath>
    </defs>
  </svg>
);
