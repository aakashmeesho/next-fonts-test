import * as React from 'react';
import { SVGProps } from 'react';

export const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM7.28288 14.2925C7.67288 14.6825 8.30288 14.6825 8.69288 14.2925L16.2729 6.7025C16.6629 6.3125 16.6629 5.6825 16.2729 5.2925C15.8829 4.9025 15.2529 4.9025 14.8629 5.2925L7.98288 12.1725L5.10288 9.2925C4.71288 8.9025 4.08288 8.9025 3.69288 9.2925C3.50562 9.47933 3.40039 9.73298 3.40039 9.9975C3.40039 10.262 3.50562 10.5157 3.69288 10.7025L7.28288 14.2925Z"
      fill="#666666"
    />
  </svg>
);
