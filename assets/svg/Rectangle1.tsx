import { CiCalculator1 } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Rectangle1 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiCalculator1 size={size} color={color} />
    </div>
  );
};

export default Rectangle1;
