import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementStep, incrementStep } from "../../src/features/stepSlice";
import XMark from "../../assets/svg/XMark";
import { RootState } from "../../src/app/store";
import { setStoreFunc } from "../../src/features/funcSlice";
import { EFunctions } from "../../constants";
import SmallTriangle from "./SmallTriangle";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Merge2Triangle from "./Merge2Triangle";

type Props = {};

const TriangleSlide = (props: Props) => {
  const dispatch = useDispatch();

  const menuList = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [areaStep, setAreaStep] = useState(1);

  const { noneFunction, areaTriangleFunction, perimeterTriangleFunction } =
    useSelector((state: RootState) => state.func);

  const handleChangeFunc = (name: string) => {
    dispatch(setStoreFunc(name));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNextStep = () => {
    dispatch(incrementStep());
    dispatch(setStoreFunc(EFunctions.NONE));
  };

  const handlePrevAreaStep = () => {
    if (areaStep > 1) {
      setAreaStep(areaStep - 1);
    }
  };

  const handleNextAreaStep = () => {
    if (areaStep < 3) {
      setAreaStep(areaStep + 1);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuList.current &&
        !menuList.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="tw-w-full tw-h-full tw-pt-[50px]">
      <div className="tw-absolute tw-left-[200px]">
        <a
          className="tw-group tw-relative tw-inline-block focus:tw-outline-none focus:tw-ring tw-cursor-pointer"
          onClick={() => dispatch(decrementStep())}
        >
          <span className="button-background group-hover:tw-translate-x-0 group-hover:tw-translate-y-0"></span>
          <span className="g-button tw-flex tw-items-center">
            <span className="">Trở lại</span>
          </span>
        </a>
      </div>
      <div className="tw-absolute tw-right-[200px] tw-flex tw-items-center tw-gap-x-5 tw-z-10">
        <span className="tw-w-14 tw-h-14">
          <span
            className={`${noneFunction ? "tw-hidden" : ""} tw-cursor-pointer`}
            onClick={() => handleChangeFunc(EFunctions.NONE)}
          >
            <XMark />
          </span>
        </span>
        <div className=" tw-flex tw-items-center tw-flex-row-reverse tw-gap-x-10">
          <a
            className="tw-group tw-relative tw-inline-block focus:tw-outline-none focus:tw-ring tw-cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="button-background group-hover:tw-translate-x-0 group-hover:tw-translate-y-0"></span>

            <span className="g-button">Chọn một chức năng</span>
          </a>
          <div
            className={`tw-absolute tw-bg-white tw-border tw-w-60 tw-mt-2 tw-shadow-lg tw-top-14 tw-rounded-lg ${
              isOpen ? "tw-opacity-100" : "tw-opacity-0"
            }`}
            ref={menuList}
          >
            <span
              className={`tw-block tw-px-4 tw-py-2 hover:tw-bg-gray-100 tw-rounded-t-lg ${
                isOpen ? "tw-cursor-pointer" : ""
              }`}
              onClick={() => handleChangeFunc(EFunctions.PERIMETER_TRIANGLE)}
            >
              Tính chu vi
            </span>
            <span
              className={`tw-block tw-px-4 tw-py-2 tw-cursor-pointer hover:tw-bg-gray-100 tw-rounded-b-lg ${
                isOpen ? "tw-cursor-pointer" : ""
              }`}
              onClick={() => handleChangeFunc(EFunctions.AREA_TRIANGLE)}
            >
              Tính diện tích
            </span>
          </div>
        </div>
      </div>
      {areaTriangleFunction && (
        <div className="tw-absolute tw-right-1/2 tw-flex tw-items-center tw-gap-x-5 tw-z-10 tw-top-28">
          <div onClick={handlePrevAreaStep} className="tw-cursor-pointer">
            <FaArrowAltCircleLeft
              size={40}
              color={areaStep === 1 ? "gray" : "#000053"}
            />
          </div>
          <div onClick={handleNextAreaStep} className="tw-cursor-pointer">
            <FaArrowAltCircleRight
              size={40}
              color={areaStep === 3 ? "gray" : "#000053"}
            />
          </div>
        </div>
      )}
      <div className="tw-flex tw-justify-center tw-items-center tw-h-full tw-relative">
        <div>
          {!areaTriangleFunction && (
            <SmallTriangle color="#000053" background="69bff8" />
          )}
          {areaTriangleFunction && areaStep === 1 && (
            <SmallTriangle color="#000053" background="69bff8" />
          )}
          {areaTriangleFunction && areaStep === 2 && (
            <div className="tw-flex tw-gap-x-32">
              <SmallTriangle color="#000053" background="69bff8" />
              <SmallTriangle color="#000053" background="f88125" />
            </div>
          )}
          {areaTriangleFunction && areaStep === 3 && (
            <Merge2Triangle color="#000053" background="69bff8" />
          )}
        </div>
        <div className="tw-absolute tw-bottom-[100px]">
          <a
            className="tw-group tw-relative tw-inline-block focus:tw-outline-none focus:tw-ring tw-cursor-pointer"
            onClick={handleNextStep}
          >
            <span className="button-background group-hover:tw-translate-x-0 group-hover:tw-translate-y-0"></span>

            <span className="g-button">Tiếp theo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TriangleSlide;
