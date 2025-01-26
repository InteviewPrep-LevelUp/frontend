import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { submitAnswers } from "../store/actions/feedback.action";
import Loader from "../components/Loader";

type Answer = {
  question: string;
  answer: string;
};

type AnswersData = {
  answers: Answer[];
};

const QuestionPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]); // Массив для хранения объектов с вопросом и ответом
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [storedQuestions, setStoredQuestions] = useState<string[]>([]); // Массив строк для вопросов
  const [loading, setLoading] = useState<boolean>(false); // Состояние для загрузки
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem("questions");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData.questions)) {
          setStoredQuestions(parsedData.questions); // Сохраняем вопросы
        } else {
          console.error("Невалидный формат данных в localStorage");
        }
      } catch (error) {
        console.error("Ошибка при парсинге данных из localStorage:", error);
      }
    }
  }, []);

  const handleAnswerSubmit = () => {
    if (currentAnswer.trim() === "") {
      alert("Пожалуйста, напишите ответ!");
      return;
    }

    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: storedQuestions[currentQuestionIndex],
        answer: currentAnswer.trim(),
      },
    ]);
    setCurrentAnswer("");

    if (currentQuestionIndex < storedQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      const formattedAnswers: AnswersData = {
        answers: [
          ...userAnswers,
          {
            question: storedQuestions[currentQuestionIndex],
            answer: currentAnswer.trim(),
          },
        ],
      };

      setLoading(true); // Включаем состояние загрузки перед отправкой данных
      dispatch(submitAnswers({ answers: formattedAnswers, navigate })).finally(
        () => {
          setLoading(false); // Отключаем состояние загрузки после выполнения запроса
          navigate("/check"); // Перенаправляем на страницу с рекомендациями
        }
      );
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
      {storedQuestions.length > 0 &&
        currentQuestionIndex < storedQuestions.length && (
          <div className="w-full max-w-lg sm:max-w-xl bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <p className="text-lg sm:text-xl font-semibold mb-6 text-center">
              {storedQuestions[currentQuestionIndex]}
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
              {loading
                ? (<section className="absolute top-0 right-0 left-0"><Loader /></section>)
                : currentQuestionIndex < storedQuestions.length - 1
                ? "Следующий вопрос"
                : "Завершить"}
            </button>
          </div>
        )}
    </div>
  );
};

export default QuestionPage;
