import { CiKeyboard } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Rectangle2 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiKeyboard size={size} color={color} />
    </div>
  );
};

export default Rectangle2;
