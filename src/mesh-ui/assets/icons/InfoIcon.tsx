import * as React from 'react';
import { SVGProps } from 'react';

export const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 5.82504C9 5.27241 9.4477 4.82471 9.99989 4.82471C10.5521 4.82471 10.9998 5.27241 10.9998 5.82504C10.9998 6.37722 10.5521 6.82493 9.99989 6.82493C9.4477 6.82493 9 6.37722 9 5.82504ZM9 8.84217C9 8.28999 9.4477 7.84229 9.99989 7.84229C10.5521 7.84229 10.9998 8.28999 10.9998 8.84217V14.1755C10.9998 14.7277 10.5521 15.1754 9.99989 15.1754C9.4477 15.1754 9 14.7277 9 14.1755V8.84217Z"
        fill="#666666"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
