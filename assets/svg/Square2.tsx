import { CiInstagram } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Square2 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiInstagram size={size} color={color} />
    </div>
  );
};

export default Square2;
