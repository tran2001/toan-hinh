import React from "react";
import {
  CiCalculator1,
  CiAlarmOn,
  CiKeyboard,
  CiMobile2,
  CiBasketball,
  CiClock2,
  CiWarning,
  CiPizza,
  CiPlay1,
  CiInstagram,
  CiImageOn,
} from "react-icons/ci";

enum EShapeValue {
  SQUARE = "SQUARE",
  CIRCLE = "CIRCLE",
  TRIANGLE = "TRIANGLE",
  RECTANGLE = "RECTANGLE",
}

const shapes = [
  {
    value: EShapeValue.RECTANGLE,
    icon: <CiCalculator1 />,
  },
  {
    value: EShapeValue.RECTANGLE,
    icon: <CiKeyboard />,
  },
  {
    value: EShapeValue.RECTANGLE,
    icon: <CiMobile2 />,
  },
  {
    value: EShapeValue.CIRCLE,
    icon: <CiAlarmOn />,
  },
  {
    value: EShapeValue.CIRCLE,
    icon: <CiBasketball />,
  },
  {
    value: EShapeValue.CIRCLE,
    icon: <CiClock2 />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <CiWarning />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <CiPizza />,
  },
  {
    value: EShapeValue.TRIANGLE,
    icon: <CiPlay1 />,
  },
];

type Props = {};

const ChooseSquareSlide = (props: Props) => {
  return <div></div>;
};

export default ChooseSquareSlide;
