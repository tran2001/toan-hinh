import React from "react";
import {
  CiCalculator1,
  CiDollar,
  CiKeyboard,
  CiMobile2,
  CiBasketball,
  CiClock2,
  CiWarning,
  CiPizza,
  CiPlay1,
  CiInstagram,
  CiImageOn,
  CiViewTable,
} from "react-icons/ci";

type Props = {
  size: number;
  color: string;
};

const Square1 = ({ size = 150, color = "white" }: Props) => {
  return (
    <div>
      <CiImageOn size={size} color={color} />
    </div>
  );
};

export default Square1;
