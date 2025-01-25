import { createSlice } from "@reduxjs/toolkit";

interface FeedbackState {
  value: number;
}

const initialState: FeedbackState = {
  value: 0,
};

const feedbackSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
});

export default feedbackSlice.reducer;
