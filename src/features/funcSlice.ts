import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EFunctions } from "../../constants";

export interface FuncState {
  noneFunction: boolean;
  areaSquareFunction: boolean;
  perimeterSquareFunction: boolean;
  areaRectangleFunction: boolean;
  perimeterRectangleFunction: boolean;
  areaTriangleFunction: boolean;
  perimeterTriangleFunction: boolean;
}

const initialState: FuncState = {
  noneFunction: true,
  areaSquareFunction: false,
  perimeterSquareFunction: false,
  areaRectangleFunction: false,
  perimeterRectangleFunction: false,
  areaTriangleFunction: false,
  perimeterTriangleFunction: false,
};

export const funcSlice = createSlice({
  name: "func",
  initialState,
  reducers: {
    setStoreFunc: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case EFunctions.AREA_SQUARE:
          return {
            ...initialState,
            noneFunction: false,
            areaSquareFunction: true,
          };
        case EFunctions.PERIMETER_SQUARE:
          return {
            ...initialState,
            noneFunction: false,
            perimeterSquareFunction: true,
          };
        case EFunctions.AREA_RECTANGLE:
          return {
            ...initialState,
            noneFunction: false,
            areaRectangleFunction: true,
          };
        case EFunctions.PERIMETER_RECTANGLE:
          return {
            ...initialState,
            noneFunction: false,
            perimeterRectangleFunction: true,
          };
        case EFunctions.AREA_TRIANGLE:
          return {
            ...initialState,
            noneFunction: false,
            areaTriangleFunction: true,
          };
        case EFunctions.PERIMETER_TRIANGLE:
          return {
            ...initialState,
            noneFunction: false,
            perimeterTriangleFunction: true,
          };
        case EFunctions.NONE:
          return {
            ...initialState,
            noneFunction: true,
          };
        default:
          return state;
      }
    },
  },
});

export const { setStoreFunc } = funcSlice.actions;

export default funcSlice.reducer;
