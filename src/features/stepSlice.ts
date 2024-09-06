import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StepState {
  step: number;
}

const initialState: StepState = {
  step: 1,
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setStoreStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },

    incrementStep: (state) => {
      state.step += 1;
    },

    decrementStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { setStoreStep, incrementStep, decrementStep } = stepSlice.actions;

export default stepSlice.reducer;
