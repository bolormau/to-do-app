"use client";
import { useState } from "react";
// useState function makes an array.

const UncheckedBox = () => {
  return (
    <div className="w-5 h-5 flex content-center items-center border-[1px] border-[rgba(118,118,118,1)] bg-[#fff] rounded-[2px] cursor-pointer"></div>
  );
};

const CheckedBox = () => {
  return (
    <div className="w-5 h-5 flex content-center items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <g filter="url(#filter0_d_29_655)">
          <rect x="3" y="3" width="20" height="20" rx="2" fill="#0275FF" />
          <rect
            x="2.5"
            y="2.5"
            width="21"
            height="21"
            rx="2.5"
            stroke="white"
          />
          <path d="M8 12.5L12 16.5L19.5 7" stroke="white" stroke-width="3" />
        </g>
        <defs>
          <filter
            id="filter0_d_29_655"
            x="0"
            y="0"
            width="26"
            height="26"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="2"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_29_655"
            />
            <feOffset />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.00392157 0 0 0 0 0.372549 0 0 0 0 0.8 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_29_655"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_29_655"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="gap-3">
      <div
        className="w-5 h-5 flex content-center items-center cursor-pointer"
        onClick={() => {
          setChecked(!checked);
        }}
      >
        {checked ? "🤍" : "❤️"}

        {/* <input type="checkbox"/>/ */}
      </div>
    </div>
  ); //
};
