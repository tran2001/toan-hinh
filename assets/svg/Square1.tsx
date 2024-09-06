import { CiImageOn } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Square1 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiImageOn size={size} color={color} />
    </div>
  );
};

export default Square1;
