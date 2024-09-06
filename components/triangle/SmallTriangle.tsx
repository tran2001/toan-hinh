import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../src/app/store";

type Props = {
  color: string;
  background: string;
};

const SmallTriangle = ({ color, background }: Props) => {
  const { noneFunction, areaTriangleFunction, perimeterTriangleFunction } =
    useSelector((state: RootState) => state.func);

  useEffect(() => {
    const elements = [
      {
        el: document.getElementById("point-a"),
        className: "tw-text-red-500",
      },
      {
        el: document.getElementById("point-b"),
        className: "tw-text-red-500",
      },
      {
        el: document.getElementById("point-c"),
        className: "tw-text-red-500",
      },
      {
        el: document.getElementById("point-h"),
        className: "tw-text-red-500",
      },
      {
        el: document.getElementById("edge-ab"),
        className: "!tw-bg-red-500",
      },
      {
        el: document.getElementById("edge-bc"),
        className: "!tw-bg-red-500",
      },
      {
        el: document.getElementById("edge-ac"),
        className: "!tw-bg-red-500",
      },
      {
        el: document.getElementById("edge-ah"),
        className: "!tw-bg-red-500",
      },
    ];

    elements.forEach(({ el, className }) => {
      el?.addEventListener("click", () => el.classList.toggle(className));
    });
  }, []);
  return (
    <div className="tw-relative">
      <div className={`triangle-${background}`}></div>
      <div
        className={`tw-w-[480px] tw-h-[3px] tw-bg-[${color}] tw-absolute tw-cursor-pointer`}
        id="edge-bc"
      ></div>
      <div
        className={`tw-w-[3px] tw-h-[300px] tw-bg-[${color}] tw-absolute tw-top-0.5 tw-left-[179.8px] tw-rounded-full tw-cursor-pointer`}
        id="edge-ah"
      ></div>
      <div
        className={`tw-w-3 tw-h-3 tw-border tw-border-[${color}] tw-border-l-0 tw-border-b-0 tw-absolute tw-bottom-0 tw-left-[181px] tw-cursor-pointer`}
      ></div>
      <div
        className={`tw-w-[350px] tw-h-[3px] tw-bg-[${color}] tw-absolute tw-rotate-[-59deg] tw-top-[150px] -tw-left-[85px] tw-rounded-full tw-cursor-pointer`}
        id="edge-ab"
      ></div>
      <div
        className={`tw-w-[422px] tw-h-[3px] tw-bg-[${color}] tw-absolute tw-rotate-[45deg] tw-top-[150px] -tw-right-[60px] tw-rounded-full tw-cursor-pointer`}
        id="edge-ac"
      ></div>
      <span
        className="tw-absolute tw-top-[-30px] tw-left-[176px] tw-text-[20px] text-bold tw-cursor-pointer"
        id="point-a"
      >
        A
      </span>
      <span
        className="tw-absolute tw-text-[20px] text-bold tw-left-[-20px] tw-cursor-pointer"
        id="point-b"
      >
        B
      </span>
      <span
        className="tw-absolute tw-text-[20px] text-bold tw-right-[-20px] tw-cursor-pointer"
        id="point-c"
      >
        C
      </span>
      <span
        className="tw-absolute tw-text-[20px] text-bold tw-left-[176px] tw-cursor-pointer"
        id="point-h"
      >
        H
      </span>
      {perimeterTriangleFunction && (
        <div>
          <span className="tw-absolute tw-text-[20px] text-bold tw-left-[25px] tw-top-1/2 -tw-translate-y-3 tw-cursor-pointer">
            7 cm
          </span>
          <span className="tw-absolute tw-text-[20px] text-bold tw-right-[80px] tw-top-1/2 -tw-translate-y-3 tw-cursor-pointer">
            8 cm
          </span>
          <span className="tw-absolute tw-text-[20px] text-bold tw-left-[198px] -tw-bottom-14 tw-cursor-pointer">
            10 cm
          </span>
        </div>
      )}
      {areaTriangleFunction && (
        <div>
          <span className="tw-absolute tw-text-[20px] text-bold tw-left-[198px] tw-bottom-28 tw-cursor-pointer">
            6 cm
          </span>
          <span className="tw-absolute tw-text-[20px] text-bold tw-left-[198px] -tw-bottom-14 tw-cursor-pointer">
            10 cm
          </span>
        </div>
      )}
    </div>
  );
};

export default SmallTriangle;
