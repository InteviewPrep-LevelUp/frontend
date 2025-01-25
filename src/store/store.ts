import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import questionSlice from "./slices/question.slice";
import feedbackSlice from "./slices/feedback.slice";

export const store = configureStore({
  reducer: {
    question: questionSlice,
    feedback: feedbackSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
