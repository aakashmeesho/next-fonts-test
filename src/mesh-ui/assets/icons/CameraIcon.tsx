import * as React from 'react';
import { SVGProps } from 'react';

export const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.39 4.01006H17.9C19.06 4.01006 20 4.95006 20 6.12006V16.3401C20 17.5001 19.06 18.4401 17.9 18.4401H2.1C0.94 18.4401 0 17.5001 0 16.3401V6.12006C0 4.95006 0.94 4.01006 2.1 4.01006H5.62C5.64 4.01006 5.66 4.00006 5.67 3.98006C6.46 2.55006 8.1 1.56006 10 1.56006C11.91 1.56006 13.54 2.55006 14.34 3.98006C14.35 4.00006 14.37 4.01006 14.39 4.01006ZM17.9 16.8701C18.2 16.8701 18.44 16.6301 18.44 16.3301H18.43V6.12006C18.43 5.82006 18.19 5.58006 17.89 5.58006H14.38C13.8 5.58006 13.26 5.26006 12.97 4.75006C12.41 3.75006 11.28 3.13006 10 3.13006C8.72 3.13006 7.59 3.75006 7.03 4.75006C6.74 5.26006 6.2 5.58006 5.61 5.58006H2.1C1.8 5.58006 1.56 5.82006 1.56 6.12006V16.3301C1.56 16.6301 1.8 16.8701 2.1 16.8701H17.9ZM6.20996 10.81C6.20996 8.72002 7.90996 7.02002 9.99996 7.02002C12.09 7.02002 13.79 8.72002 13.79 10.81C13.79 12.9 12.09 14.6 9.99996 14.6C7.90996 14.6 6.20996 12.9 6.20996 10.81ZM7.76996 10.82C7.76996 12.05 8.76996 13.05 9.99996 13.05C11.23 13.05 12.23 12.05 12.23 10.82C12.23 9.59002 11.23 8.59002 9.99996 8.59002C8.76996 8.59002 7.76996 9.59002 7.76996 10.82Z"
        fill="#666666"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="20"
          height="16.88"
          fill="white"
          transform="translate(0 1.56006)"
        />
      </clipPath>
    </defs>
  </svg>
);
