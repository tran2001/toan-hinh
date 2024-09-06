import { CiClock2 } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Circle3 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiClock2 size={size} color={color} />
    </div>
  );
};

export default Circle3;
