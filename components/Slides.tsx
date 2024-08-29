import { useSelector } from "react-redux";
import ChooseSquareSlide from "./ChooseSquareSlide";

type Props = {};

const Slides = (props: Props) => {
  const { step } = useSelector((state: any) => state.step);
  return (
    <div>{step === 1 ? <ChooseSquareSlide /> : <ChooseSquareSlide />}</div>
  );
};

export default Slides;
