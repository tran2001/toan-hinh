import { CiMobile2 } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Rectangle3 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiMobile2 size={size} color={color} />
    </div>
  );
};

export default Rectangle3;
