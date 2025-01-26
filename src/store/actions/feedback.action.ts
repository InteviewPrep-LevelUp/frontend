import { createAsyncThunk } from "@reduxjs/toolkit";

type Answer = {
  question: string;
  answer: string;
};

type AnswersData = {
  answers: Answer[];
  navigate: (path: string) => void;
};

export const submitAnswers = createAsyncThunk(
  "answers/submit",
  async ({ answers, navigate }: AnswersData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://ai-interview-assistant-backend-production.up.railway.app/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers }),
        }
      );

      const data = await response.json();
      localStorage.setItem("feedback", JSON.stringify(data));
      console.log(data);
      navigate("/recommendations");
      return data;
    } catch (error: any) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);
