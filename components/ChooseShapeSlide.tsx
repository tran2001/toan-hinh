import { useEffect, useState } from "react";
import Rectangle1 from "../assets/svg/Rectangle1";
import Rectangle2 from "../assets/svg/Rectangle2";
import Rectangle3 from "../assets/svg/Rectangle3";
import Circle1 from "../assets/svg/Circle1";
import Circle2 from "../assets/svg/Circle2";
import Circle3 from "../assets/svg/Circle3";
import Triangle1 from "../assets/svg/Triangle1";
import Triangle2 from "../assets/svg/Triangle2";
import Triangle3 from "../assets/svg/Triangle3";
import Square1 from "../assets/svg/Square1";
import Square2 from "../assets/svg/Square2";
import Square3 from "../assets/svg/Square3";
import { IoCloseOutline } from "react-icons/io5";
import Firework from "../assets/svg/Firework";
import Wine from "../assets/svg/Wine";
import { useDispatch, useSelector } from "react-redux";
import { decrementStep, incrementStep } from "../src/features/stepSlice";
import { RootState } from "../src/app/store";

enum EShapeValue {
  SQUARE = "SQUARE",
  CIRCLE = "CIRCLE",
  TRIANGLE = "TRIANGLE",
  RECTANGLE = "RECTANGLE",
}

const shapes = [
  {
    value: EShapeValue.CIRCLE,
    icon: <Circle3 />,
  },
  {
    value: EShapeValue.RECTANGLE,
    icon: <Rectangle1 />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <Triangle1 />,
  },
  {
    value: EShapeValue.SQUARE,
    icon: <Square3 />,
  },
  {
    value: EShapeValue.RECTANGLE,
    icon: <Rectangle2 />,
  },
  {
    value: EShapeValue.RECTANGLE,
    icon: <Rectangle3 />,
  },
  {
    value: EShapeValue.SQUARE,
    icon: <Square1 />,
  },
  {
    value: EShapeValue.CIRCLE,
    icon: <Circle2 />,
  },
  {
    value: EShapeValue.SQUARE,
    icon: <Square2 />,
  },
  {
    value: EShapeValue.CIRCLE,
    icon: <Circle1 />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <Triangle2 />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <Triangle3 />,
  },
];

type Props = {
  shape: string;
};

const ChooseShapeSlide = ({ shape }: Props) => {
  const dispatch = useDispatch();

  const { step } = useSelector((state: RootState) => state.step);

  const [shapeIndexes, setShapeIndexes] = useState<number[]>([]);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [errorIndexes, setErrorIndexes] = useState<number[]>([]);
  // const squareIndexes = [3, 6, 8];

  const handleChooseShape = (index: number) => {
    if (shapeIndexes.includes(index) && !selectedIndexes.includes(index)) {
      setSelectedIndexes((prev) => [...prev, index]);
    } else {
      setErrorIndexes((prev) => [...prev, index]);
      setTimeout(() => {
        setErrorIndexes((prev) => prev.filter((i) => i !== index));
      }, 3000);
    }
  };

  useEffect(() => {
    if (shape === EShapeValue.SQUARE) {
      setShapeIndexes([3, 6, 8]);
    } else if (shape === EShapeValue.RECTANGLE) {
      setShapeIndexes([1, 3, 4, 5, 6, 8]);
    } else if (shape === EShapeValue.TRIANGLE) {
      setShapeIndexes([2, 10, 11]);
    } else if (shape === EShapeValue.CIRCLE) {
      setShapeIndexes([0, 7, 9]);
    }
  }, [shape]);

  useEffect(() => {
    const popup = document.getElementById("popup");
    if (
      selectedIndexes.length === shapeIndexes.length &&
      selectedIndexes.length > 0
    ) {
      popup?.classList.remove("tw-top-[-1000px]");
      popup?.classList.add("tw-top-1/2");
      popup?.classList.add("-tw-translate-y-1/2");
    } else {
      popup?.classList.add("tw-top-[-1000px]");
      popup?.classList.remove("tw-top-1/2");
      popup?.classList.remove("-tw-translate-y-1/2");
    }
  }, [selectedIndexes]);

  return (
    <div className="tw-pt-[50px] tw-w-full tw-flex tw-flex-col tw-items-center">
      <div
        className={`${step === 1 && "tw-hidden"} tw-absolute tw-left-[200px]`}
      >
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
      <div
        className="tw-w-[500px] tw-h-[200px] tw-absolute tw-duration-300 tw-bg-white/100 tw-top-[-1000px] tw-rounded-2xl"
        id="popup"
      >
        <div className="tw-relative tw-w-full tw-h-full tw-p-10 tw-flex tw-flex-col tw-justify-between tw-items-center">
          <div className="tw-absolute tw-top-1/2 -tw-translate-y-1/2 -tw-right-10">
            <Firework />
          </div>
          <div className="tw-absolute -tw-top-10 -tw-left-10">
            <Wine />
          </div>
          <div className="tw-absolute -tw-bottom-10 -tw-left-10">
            <Firework />
          </div>
          <div
            className="tw-w-10 tw-h-10 tw-rounded-full tw-absolute -tw-right-4 -tw-top-4 tw-flex tw-items-center tw-justify-center tw-bg-white tw-cursor-pointer tw-border"
            onClick={() => setSelectedIndexes([])}
          >
            <IoCloseOutline className=" tw-text-[30px]" />
          </div>
          <div className="tw-text-[23px] text-bold">
            Chúc mừng các bạn đã trả lời chính xác
          </div>
          <a
            className="tw-group tw-relative tw-inline-block focus:tw-outline-none focus:tw-ring tw-cursor-pointer"
            onClick={() => dispatch(incrementStep())}
          >
            <span className="button-background group-hover:tw-translate-x-0 group-hover:tw-translate-y-0"></span>

            <span className="g-button">Tiếp theo</span>
          </a>
        </div>
      </div>
      <span className="tw-text-[30px] text-bold">
        Chọn những hình có dạng{" "}
        {shape === EShapeValue.SQUARE
          ? "hình vuông"
          : shape === EShapeValue.RECTANGLE
          ? "hình chữ nhật"
          : shape === EShapeValue.TRIANGLE
          ? "hình tam giác"
          : "hình tròn"}{" "}
        trong các hình phía dưới
      </span>
      <div className="tw-grid tw-grid-cols-4 tw-gap-[50px] tw-mt-20">
        {shapes.map((shape, index) => (
          <div
            key={index}
            onClick={() => handleChooseShape(index)}
            className={`tw-w-[150px] tw-duration-300 tw-rounded-lg tw-cursor-pointer ${
              selectedIndexes.includes(index)
                ? "tw-bg-green-500/70"
                : errorIndexes.includes(index)
                ? "tw-bg-red-500/70"
                : "hover:tw-bg-white/30"
            }`}
          >
            {shape.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseShapeSlide;
