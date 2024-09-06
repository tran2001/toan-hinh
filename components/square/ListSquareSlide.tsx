import { FaSquareFull } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decrementStep, incrementStep } from "../../src/features/stepSlice";
import Return from "../../assets/svg/Return";

type Props = {};

const ListSquare = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="tw-w-full tw-flex tw-flex-col tw-justify-between tw-h-full tw-pt-[50px] tw-items-center">
      <div className=" tw-absolute tw-left-[200px]">
        <a
          className="tw-group tw-relative tw-inline-block focus:tw-outline-none focus:tw-ring tw-cursor-pointer"
          onClick={() => dispatch(decrementStep())}
        >
          <span className="button-background group-hover:tw-translate-x-0 group-hover:tw-translate-y-0"></span>
          <span className="g-button tw-flex tw-items-center">
            <span className="">Trở lại</span>
          </span>
        </a>
      </div>

      <span className="tw-text-[30px] text-bold">Hình vuông</span>
      <div className="tw-w-full tw-flex tw-items-end tw-h-1/2 tw-justify-between">
        <FaSquareFull
          size={200}
          color="orange"
          className="tw-border-2 tw-border-[#000053]"
        />
        <FaSquareFull
          size={300}
          color="red"
          className="tw-border-2 tw-border-[#000053]"
        />
        <FaSquareFull
          size={400}
          color="brown"
          className="tw-border-2 tw-border-[#000053]"
        />
      </div>
      <a
        className="tw-group tw-relative tw-inline-block focus:tw-outline-none focus:tw-ring tw-cursor-pointer"
        onClick={() => dispatch(incrementStep())}
      >
        <span className="button-background group-hover:tw-translate-x-0 group-hover:tw-translate-y-0"></span>

        <span className="g-button">Tiếp theo</span>
      </a>
    </div>
  );
};

export default ListSquare;
