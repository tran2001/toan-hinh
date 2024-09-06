import { CiPlay1 } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Triangle2 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiPlay1 size={size} color={color} />
    </div>
  );
};

export default Triangle2;
