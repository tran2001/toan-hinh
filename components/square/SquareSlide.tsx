import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../src/app/store";
import { setStoreFunc } from "../../src/features/funcSlice";
import { EFunctions } from "../../constants";
import SmallSquare from "./SmallSquare";
import XMark from "../../assets/svg/XMark";
import { decrementStep, incrementStep } from "../../src/features/stepSlice";

type Props = {};

const SquareSlide = (props: Props) => {
  const dispatch = useDispatch();

  const { noneFunction, areaSquareFunction, perimeterSquareFunction } =
    useSelector((state: RootState) => state.func);

  const [isOpen, setIsOpen] = useState(false);
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
    const elements = [
      { el: document.getElementById("point-a"), className: "tw-text-red-500" },
      { el: document.getElementById("point-b"), className: "tw-text-red-500" },
      { el: document.getElementById("point-c"), className: "tw-text-red-500" },
      { el: document.getElementById("point-d"), className: "tw-text-red-500" },
      { el: document.getElementById("edge-ab"), className: "!tw-bg-red-500" },
      { el: document.getElementById("edge-bc"), className: "!tw-bg-red-500" },
      { el: document.getElementById("edge-cd"), className: "!tw-bg-red-500" },
      { el: document.getElementById("edge-da"), className: "!tw-bg-red-500" },
    ];

    const ab_length = document.getElementById("ab-length");
    const ad_length = document.getElementById("ad-length");
    const square = document.getElementById("square");

    if (perimeterSquareFunction) {
      elements.forEach(({ el, className }) => {
        el?.classList.remove(className);
      });
      square?.classList.remove("tw-bg-[#000053]");
      ab_length?.classList.remove("tw-opacity-0");
      ad_length?.classList.remove("tw-opacity-0");
      document.getElementById("edge-ab")?.classList.add("!tw-bg-red-500");
      document.getElementById("edge-da")?.classList.add("!tw-bg-red-500");
    }

    if (areaSquareFunction) {
      elements.forEach(({ el, className }) => {
        el?.classList.remove(className);
      });
      if (!ab_length?.classList.contains("tw-opacity-0")) {
        ab_length?.classList.add("tw-opacity-0");
        ad_length?.classList.add("tw-opacity-0");
      }
      square?.classList.toggle("tw-bg-[#000053]");
    }

    if (noneFunction) {
      elements.forEach(({ el, className }) => {
        el?.classList.remove(className);
      });
      square?.classList.remove("tw-bg-[#000053]");
      ab_length?.classList.add("tw-opacity-0");
      ad_length?.classList.add("tw-opacity-0");
    }

    elements.forEach(({ el, className }) => {
      el?.addEventListener("click", () => el.classList.toggle(className));
    });
  }, [noneFunction, areaSquareFunction, perimeterSquareFunction]);

  return (
    <div className="tw-w-full tw-h-full tw-pt-[50px]">
      <div className=" tw-absolute tw-left-[200px]">
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
              onClick={() => handleChangeFunc(EFunctions.AREA_SQUARE)}
            >
              Tính diện tích
            </span>
          </div>
        </div>
      </div>
      <div className=" tw-flex tw-justify-center tw-items-center tw-h-full tw-relative">
        <div
          className="tw-w-[400px] tw-h-[400px] tw-relative tw-duration-300"
          id="square"
        >
          <div className="tw-w-[392px] tw-h-[396px] tw-grid tw-grid-cols-3 tw-gap-1 tw-absolute tw-top-1 tw-left-1 tw-z-50">
            {[...Array(9)].map((_, index) => (
              <SmallSquare />
            ))}
          </div>
          <div
            className="tw-h-[400px] tw-w-1 tw-bg-[#000053] tw-cursor-pointer"
            id="edge-da"
          ></div>
          <div
            className="tw-w-[400px] tw-h-1 tw-bg-[#000053] tw-cursor-pointer"
            id="edge-cd"
          ></div>
          <div
            className="tw-w-[400px] tw-h-1 tw-bg-[#000053] tw-cursor-pointer tw-absolute tw-top-0 tw-duration-300"
            id="edge-ab"
          ></div>
          <div
            className="tw-h-[400px] tw-w-1 tw-bg-[#000053] tw-cursor-pointer tw-absolute tw-right-0 tw-top-0"
            id="edge-bc"
          ></div>
          <span
            className="tw-absolute -tw-top-5 -tw-left-5 tw-cursor-pointer tw-text-[20px] text-bold"
            id="point-a"
          >
            A
          </span>
          <span
            className="tw-absolute -tw-top-5 -tw-right-5 tw-cursor-pointer tw-text-[20px] text-bold"
            id="point-b"
          >
            B
          </span>
          <span
            className="tw-absolute -tw-bottom-5 -tw-right-5 tw-cursor-pointer tw-text-[20px] text-bold"
            id="point-c"
          >
            C
          </span>
          <span
            className="tw-absolute -tw-bottom-5 -tw-left-5 tw-cursor-pointer tw-text-[20px] text-bold"
            id="point-d"
          >
            D
          </span>

          <span
            className="tw-absolute -tw-top-8 tw-left-1/2 -tw-translate-x-1/2 tw-text-[20px] text-bold tw-opacity-0 tw-duration-300"
            id="ab-length"
          >
            3 cm
          </span>
          <span
            className="tw-absolute -tw-left-16 tw-top-1/2 -tw-translate-y-1/2 tw-text-[20px] text-bold tw-opacity-0 tw-duration-300"
            id="ad-length"
          >
            3 cm
          </span>
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

export default SquareSlide;
