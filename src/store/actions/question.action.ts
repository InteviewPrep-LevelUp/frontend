import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "../../helpers/axios";

interface QuestionsResponse {
  specialty: string;
  level: string;
  language: string;
  navigate: (path: string) => void;
}

export const getQuestions = createAsyncThunk(
  "questions/postQuestions",
  async ({ specialty, level, language, navigate }: QuestionsResponse) => {
    try {
      const response = await $axios.post(
        "https://ai-interview-assistant-backend-production.up.railway.app/interview/",
        {
          level,
          language,
          specialty,
        }
      );
      navigate("/questions");
      console.log(response.data);
      localStorage.setItem("questions", JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);
