import { CiBasketball } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Circle2 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiBasketball size={size} color={color} />
    </div>
  );
};

export default Circle2;
