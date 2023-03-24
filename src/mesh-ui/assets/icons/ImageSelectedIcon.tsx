import * as React from 'react';
import { SVGProps } from 'react';

export const ImageSelectedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
      clipRule="evenodd"
    />
    <mask
      id="afffrnbxqa"
      width="14"
      height="14"
      x="1"
      y="1"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M1.333 8C1.333 4.32 4.32 1.333 8 1.333c3.68 0 6.667 2.987 6.667 6.667 0 3.68-2.987 6.667-6.667 6.667-3.68 0-6.667-2.987-6.667-6.667zm4.855 2.86c.26.26.68.26.94 0l5.054-5.06c.26-.26.26-.68 0-.94-.26-.26-.68-.26-.94 0L6.655 9.447l-1.92-1.92c-.26-.26-.68-.26-.94 0-.125.124-.195.293-.195.47 0 .176.07.345.195.47l2.393 2.393z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#afffrnbxqa)">
      <path fill="#F05A9B" d="M0 0H16V16H0z" />
    </g>
  </svg>
);
