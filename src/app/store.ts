import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "../features/stepSlice";
import funcReducer from "../features/funcSlice";

export const store = configureStore({
  reducer: {
    step: stepReducer,
    func: funcReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
