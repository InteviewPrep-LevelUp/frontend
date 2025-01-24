import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Question = {
  question: string;
  correctAnswer: string;
};

const QuestionPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions([
      {
        question: "Что такое замыкание в JavaScript?",
        correctAnswer: "Замыкание — это функция вместе с окружением.",
      },
      {
        question: "Что такое HTTP-запрос?",
        correctAnswer: "HTTP-запрос — это запрос от клиента к серверу.",
      },
      {
        question: "Для чего используется useState в React?",
        correctAnswer: "Для управления состоянием компонентов.",
      },
    ]);
  }, []);

  const handleAnswerSubmit = () => {
    if (currentAnswer.trim() === "") {
      alert("Напишите ответ, пожалуйста!");
      return;
    }

    setUserAnswers((prevAnswers) => [...prevAnswers, currentAnswer.trim()]);
    setCurrentAnswer("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/check", {
        state: {
          questions,
          userAnswers: userAnswers.concat(currentAnswer.trim()),
        },
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-custom-blue flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 p-10"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 550px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center">
        Тестирование
      </h1>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <div className="w-full max-w-lg sm:max-w-xl bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <p className="text-lg sm:text-xl font-semibold mb-6 text-center">
            {questions[currentQuestionIndex].question}
          </p>
          <input
            type="text"
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder="Введите ваш ответ..."
            className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAnswerSubmit}
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            {currentQuestionIndex < questions.length - 1
              ? "Следующий вопрос"
              : "Завершить"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
