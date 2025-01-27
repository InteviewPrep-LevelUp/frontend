import { createAsyncThunk } from "@reduxjs/toolkit";

type Answer = {
  question: string;
  answer: string;
};

type AnswersData = {
  answers: Answer[];
};

export const submitAnswers = createAsyncThunk(
  "answers/submit",
  async ({
    answers,
    navigate,
  }: {
    answers: AnswersData;
    navigate: (path: string) => void;
  }) => {
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
      console.log(data);

      if (data.feedback) {
        localStorage.setItem(
          "strength",
          JSON.stringify(data.feedback.strength)
        );
        localStorage.setItem(
          "areas_for_improvement",
          JSON.stringify(data.feedback.areas_for_improvement)
        );
        localStorage.setItem(
          "incorrect_answers",
          JSON.stringify(data.feedback.incorrect_answers)
        );
      }

      navigate("/check");
      return data;
    } catch (error: any) {
      console.error(error);
      throw new Error("Ошибка при отправке данных");
    }
  }
);
