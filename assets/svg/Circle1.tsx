import React from "react";
import { CiDollar } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Circle1 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiDollar size={size} color={color} />
    </div>
  );
};

export default Circle1;
