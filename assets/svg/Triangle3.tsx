import { CiWarning } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Triangle3 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiWarning size={size} color={color} />
    </div>
  );
};

export default Triangle3;
