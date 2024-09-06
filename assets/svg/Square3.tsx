import { CiViewTable } from "react-icons/ci";

type Props = {
  size?: number;
  color?: string;
};

const Square3 = ({ size = 150, color = "#000053" }: Props) => {
  return (
    <div>
      <CiViewTable size={size} color={color} />
    </div>
  );
};

export default Square3;
