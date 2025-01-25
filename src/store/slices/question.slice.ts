import { createSlice } from "@reduxjs/toolkit";

interface QuestionState {
  value: number;
}

const initialState: QuestionState = {
  value: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
});

export default questionSlice.reducer;
