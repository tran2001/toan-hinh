import React from "react";

type Props = {
  color: string;
  background: string;
};

const Merge2Triangle = ({ color, background }: Props) => {
  return (
    <div>
      <div className="tw-relative tw-bg-[#f88125]">
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
          className="tw-absolute tw-text-[20px] text-bold tw-left-[-20px] tw-top-[-20px] tw-cursor-pointer"
          id="point-b"
        >
          F
        </span>
        <span
          className="tw-absolute tw-text-[20px] text-bold tw-right-[-20px] tw-top-[-20px] tw-cursor-pointer"
          id="point-c"
        >
          E
        </span>

        <span
          className="tw-absolute tw-text-[20px] text-bold tw-left-[176px] tw-cursor-pointer"
          id="point-h"
        >
          H
        </span>
        <div
          className={`tw-w-[3px] tw-h-[300px] tw-bg-[${color}] tw-absolute tw-top-0.5 tw-left-0 tw-rounded-full tw-cursor-pointer`}
          id="edge-ah"
        ></div>
        <div
          className={`tw-w-[3px] tw-h-[300px] tw-bg-[${color}] tw-absolute tw-top-0.5 tw-right-0 tw-rounded-full tw-cursor-pointer`}
          id="edge-ah"
        ></div>
        <div
          className={`tw-w-[480px] tw-h-[3px] tw-bg-[${color}] tw-absolute tw-top-0 tw-cursor-pointer`}
          id="edge-bc"
        ></div>
        <div>
          {/* <span className="tw-absolute tw-text-[20px] text-bold tw-left-[-50px] tw-bottom-28 tw-cursor-pointer">
            6 cm
          </span> */}
          <span className="tw-absolute tw-text-[20px] text-bold tw-left-[198px] -tw-bottom-14 tw-cursor-pointer">
            10 cm
          </span>
          <span className="tw-absolute tw-text-[20px] text-bold tw-left-[198px] tw-bottom-28 tw-cursor-pointer">
            6 cm
          </span>
        </div>
        {/* {areaTriangleFunction && (
          <div>
            <span className="tw-absolute tw-text-[20px] text-bold tw-left-[198px] tw-bottom-28 tw-cursor-pointer">
              6 cm
            </span>
            <span className="tw-absolute tw-text-[20px] text-bold tw-left-[198px] -tw-bottom-14 tw-cursor-pointer">
              10 cm
            </span>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Merge2Triangle;
