import React from "react";


enum EShapeValue {
  SQUARE = "SQUARE",
  CIRCLE = "CIRCLE",
  TRIANGLE = "TRIANGLE",
  RECTANGLE = "RECTANGLE",
}

const shapes = [
  {
    value: EShapeValue.RECTANGLE,
    icon: <CiCalculator1 size={150} color="white" />,
  },
  {
    value: EShapeValue.RECTANGLE,
    icon: <CiKeyboard size={150} color="white" />,
  },
  {
    value: EShapeValue.RECTANGLE,
    icon: <CiMobile2 size={150} color="white" />,
  },
  {
    value: EShapeValue.CIRCLE,
    icon: <CiDollar size={150} color="white" />,
  },
  {
    value: EShapeValue.CIRCLE,
    icon: <CiBasketball size={150} color="white" />,
  },
  {
    value: EShapeValue.CIRCLE,
    icon: <CiClock2 size={150} color="white" />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <CiWarning size={150} color="white" />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <CiPizza size={150} color="white" />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <CiPlay1 size={150} color="white" />,
  },
  {
    value: EShapeValue.SQUARE,
    icon: <CiInstagram size={150} color="white" />,
  },
  {
    value: EShapeValue.SQUARE,
    icon: <CiImageOn size={150} color="white" />,
  },
  {
    value: EShapeValue.SQUARE,
    icon: <CiViewTable size={150} color="white" />,
  },
];

type Props = {};

const ChooseSquareSlide = (props: Props) => {
  return (
    <div>
      <div className="tw-grid tw-grid-cols-4 tw-gap-[50px]">
        {shapes.map((shape) => (
          <div key={shape.value}>{shape.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default ChooseSquareSlide;
