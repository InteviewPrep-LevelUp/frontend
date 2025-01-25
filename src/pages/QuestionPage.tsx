import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Answer = {
  question: string;
  answer: string;
};

const QuestionPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [storedQuestions, setStoredQuestions] = useState<string[]>([]); // Изменено на массив строк
  const navigate = useNavigate();

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

  // Если данные еще не загружены, показываем сообщение
  if (storedQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-custom-blue flex flex-col items-center justify-center p-10">
        <p className="text-white">Загружаются вопросы...</p>
      </div>
    );
  }

  const handleAnswerSubmit = () => {
    if (currentAnswer.trim() === "") {
      alert("Пожалуйста, напишите ответ!");
      return;
    }

    // Добавляем ответ в список
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      {
        question: storedQuestions[currentQuestionIndex],
        answer: currentAnswer.trim(),
      },
    ]);
    setCurrentAnswer(""); // Очищаем поле ввода

    if (currentQuestionIndex < storedQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate("/check", {
        state: {
          answers: [
            ...userAnswers,
            {
              question: storedQuestions[currentQuestionIndex],
              answer: currentAnswer.trim(),
            },
          ],
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
              {currentQuestionIndex < storedQuestions.length - 1
                ? "Следующий вопрос"
                : "Завершить"}
            </button>
          </div>
        )}
    </div>
  );
};

export default QuestionPage;
