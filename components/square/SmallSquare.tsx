import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../src/app/store";

type Props = {};

const SmallSquare = (props: Props) => {
  const { areaSquareFunction } = useSelector((state: RootState) => state.func);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    if (!areaSquareFunction) {
      setIsFocused(false);
    }
  }, [areaSquareFunction]);
  const handleClickSmallSquare = () => {
    if (areaSquareFunction) {
      setIsFocused(!isFocused);
    }
  };
  return (
    <span
      onClick={handleClickSmallSquare}
      className={`${
        isFocused ? "tw-bg-red-500" : "tw-bg-[#fafafa]"
      } small-square tw-duration-300`}
    >
      <div
        className={`tw-w-full tw-h-full tw-relative tw-duration-300 ${
          isFocused ? "tw-opacity-100" : "tw-opacity-0"
        }`}
      >
        <span className="tw-absolute text-bold -tw-bottom-8 tw-left-1/2 -tw-translate-x-1/2">
          1 cm
        </span>
        <span className="tw-absolute text-bold -tw-left-10 tw-top-1/2 -tw-translate-y-1/2">
          1 cm
        </span>
      </div>
    </span>
  );
};

export default SmallSquare;
