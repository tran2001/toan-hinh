import { useSelector } from "react-redux";
import ChooseShapeSlide from "./ChooseShapeSlide";
import ListSquareSlide from "./square/ListSquareSlide";
import SquareSlide from "./square/SquareSlide";
import ListRectangleSlide from "./rectangle/ListRectangleSlide";
import RectangleSlide from "./rectangle/RectangleSlide";
import ListTriangleSlide from "./triangle/ListTriangleSlide";
import TriangleSlide from "./triangle/TriangleSlide";
import ListCircleSlide from "./circle/ListCircleSlide";
import CircleSlide from "./circle/CircleSlide";
import BoxSlide from "./box/BoxSlide";

enum EShapes {
  SQUARE = "SQUARE",
  TRIANGLE = "TRIANGLE",
  RECTANGLE = "RECTANGLE",
  CIRCLE = "CIRCLE",
}

type Props = {};

const Slides = (props: Props) => {
  const { step } = useSelector((state: any) => state.step);
  return (
    <div className="tw-w-full tw-h-full">
      {step === 1 ? (
        <ChooseShapeSlide shape={EShapes.SQUARE} />
      ) : step === 2 ? (
        <ListSquareSlide />
      ) : step === 3 ? (
        <SquareSlide />
      ) : step === 4 ? (
        <ChooseShapeSlide shape={EShapes.RECTANGLE} />
      ) : step === 5 ? (
        <ListRectangleSlide />
      ) : step === 6 ? (
        <RectangleSlide />
      ) : step === 7 ? (
        <ChooseShapeSlide shape={EShapes.TRIANGLE} />
      ) : step === 8 ? (
        <ListTriangleSlide />
      ) : step === 9 ? (
        <TriangleSlide />
      ) : step === 10 ? (
        <ChooseShapeSlide shape={EShapes.CIRCLE}></ChooseShapeSlide>
      ) : step === 11 ? (
        <ListCircleSlide />
      ) : step === 12 ? (
        <CircleSlide />
      ) : step === 13 ? (
        <BoxSlide />
      ) : null}
    </div>
  );
};

export default Slides;
