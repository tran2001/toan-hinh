import { CiPizza } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Triangle1 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiPizza size={size} color={color} />
    </div>
  );
};

export default Triangle1;
