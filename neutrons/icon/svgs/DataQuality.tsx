import React from "react";
import { IndividualIconProps } from "../Icon.types";

const DataQuality: React.FC<IndividualIconProps> = ({
  "data-testid": dataTestId,
  color = "black",
  size,
}) => (
  <svg
    data-testid={dataTestId}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
  >
    <g clipPath="url(#clip0_1416_38000)">
      <path
        d="M9.66667 13.3333C11.6917 13.3333 13.3333 11.6917 13.3333 9.66667C13.3333 7.64162 11.6917 6 9.66667 6C7.64162 6 6 7.64162 6 9.66667C6 11.6917 7.64162 13.3333 9.66667 13.3333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 14.6667L12.6667 12.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 3.33334H11.34"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33331 3.33334H9.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33331 3.33334H7.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33331 3.33334H5.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 3.33334H3.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 5.33334H3.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33331 5.33334H5.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 7.33334H3.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 9.33334H3.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33331 11.3333H3.33998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.33331 13.3333L2.66665 13.3333C2.31302 13.3333 1.97389 13.1929 1.72384 12.9428C1.47379 12.6928 1.33331 12.3536 1.33331 12L1.33331 2.66668C1.33331 2.31305 1.47379 1.97392 1.72384 1.72387C1.97389 1.47382 2.31302 1.33334 2.66665 1.33334L12 1.33334C12.3536 1.33334 12.6927 1.47382 12.9428 1.72387C13.1928 1.97392 13.3333 2.31305 13.3333 2.66668L13.3333 4.33334"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1416_38000">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DataQuality;
