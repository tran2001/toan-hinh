import React, { useEffect } from "react";

type Props = {};

const BoxSlide = (props: Props) => {
  return (
    <div className="tw-flex tw-w-full tw-h-full tw-pt-[50px] tw-justify-center tw-items-center">
      <div className="container">
        <div className="wrapper">
          <div className="face front">1</div>
          <div className="face back">2</div>
          <div className="face left">3</div>
          <div className="face right">4</div>
          <div className="face top">5</div>
          <div className="face bottom">6</div>
        </div>
      </div>
    </div>
  );
};

export default BoxSlide;
