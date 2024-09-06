import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/app/store";
import { setStoreFunc } from "../../src/features/funcSlice";
import { EFunctions } from "../../constants";
import XMark from "../../assets/svg/XMark";
import { decrementStep, incrementStep } from "../../src/features/stepSlice";

type Props = {};

const CircleSlide = (props: Props) => {
  const dispatch = useDispatch();
  const { noneFunction, areaSquareFunction, perimeterSquareFunction } =
    useSelector((state: RootState) => state.func);

  const [isOpen, setIsOpen] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0); // Độ quay hiện tại
  const [isRotating, setIsRotating] = useState(false); // Kiểm soát quá trình quay
  const menuList = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeFunc = (func: string) => {
    dispatch(setStoreFunc(func));
  };

  const handleNextStep = () => {
    dispatch(incrementStep());
    dispatch(setStoreFunc(EFunctions.NONE));
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

  useEffect(() => {
    let interval: any = null;
    if (isRotating) {
      interval = setInterval(() => {
        setRotationDegree((prev) => {
          if (prev + 1 >= 360) {
            setIsRotating(false);
            return 360;
          }
          return prev + 1;
        });
      }, 16);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRotating]);

  const startRotation = () => {
    if (!isRotating) {
      setRotationDegree(0);
      setIsRotating(true);
    }
  };

  const circleBackground = `conic-gradient(#f88125 ${rotationDegree}deg, #fff ${rotationDegree}deg 360deg)`;

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
              onClick={() => handleChangeFunc(EFunctions.PERIMETER_SQUARE)}
            >
              Tính chu vi
            </span>
            <span
              className={`tw-block tw-px-4 tw-py-2 tw-cursor-pointer hover:tw-bg-gray-100 tw-rounded-b-lg ${
                isOpen ? "tw-cursor-pointer" : ""
              }`}
              onClick={() => {
                handleChangeFunc(EFunctions.AREA_SQUARE);
                startRotation(); // Bắt đầu quay khi chọn "Tính diện tích"
              }}
            >
              Tính diện tích
            </span>
          </div>
        </div>
      </div>
      <div className=" tw-flex tw-justify-center tw-items-center tw-h-full tw-relative">
        <div
          className="tw-w-[400px] tw-h-[400px] tw-rounded-full tw-border-4 tw-z-10 tw-border-[#000053]"
          style={{ background: areaSquareFunction ? circleBackground : "" }}
        ></div>
        <div className="tw-absolute tw-top-1/2 -tw-translate-y-[3px] tw-w-2 tw-h-2 tw-bg-[#000053] tw-rounded-full tw-z-10"></div>
        <span
          className="tw-absolute tw-top-1/2 tw-top-translate-y-[-1/2] text-bold tw-text-[25px] tw-translate-x-4 tw-z-10"
          id="point-o"
        >
          O
        </span>
        {!noneFunction && (
          <span className="tw-absolute tw-top-1/2 text-bold tw-text-[25px] tw-translate-x-12 tw-translate-y-[-100px] tw-z-10">
            3 cm
          </span>
        )}

        {!noneFunction && (
          <div
            className="tw-h-[400px] tw-w-[4px] tw-absolute tw-z-10"
            style={{ transform: `rotate(${rotationDegree}deg)` }}
            id="diameter"
          >
            <div
              className="tw-h-[196px] tw-w-[4px] tw-bg-red-500 tw-opacity-100 tw-top-0 tw-absolute"
              id="upper-half"
            ></div>

            <div
              className="tw-h-[196px] tw-w-[4px] tw-bg-red-500 tw-opacity-0 tw-bottom-0 tw-absolute"
              id="lower-half"
            ></div>
          </div>
        )}

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

export default CircleSlide;
