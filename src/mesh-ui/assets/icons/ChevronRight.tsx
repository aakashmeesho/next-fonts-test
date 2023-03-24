import * as React from 'react';
import { SVGProps } from 'react';

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.31093 4.3157C6.89636 4.73482 6.89636 5.41186 7.31093 5.83097L11.4355 10.0007L7.31093 14.1704C6.89636 14.5895 6.89636 15.2665 7.31093 15.6857C7.72551 16.1048 8.39522 16.1048 8.8098 15.6857L13.6891 10.7529C14.1036 10.3338 14.1036 9.65679 13.6891 9.23767L8.8098 4.30495C8.40585 3.89658 7.72551 3.89658 7.31093 4.3157Z"
      fill="#666666"
    />
  </svg>
);
