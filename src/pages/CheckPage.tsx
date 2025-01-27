import React from "react";
import { useNavigate } from "react-router-dom";

const CheckPage: React.FC = () => {
  const navigate = useNavigate();
  const incorrectAnswers = JSON.parse(
    localStorage.getItem("incorrect_answers") || "[]"
  ).filter(
    (item: any) =>
      item && typeof item.question === "string" && typeof item.note === "string"
  );

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-custom-blue px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 550px",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white bg-clip-text text-transparent mt-10 mb-10 text-center">
        Разбор ответов
      </h1>

      <div className="flex flex-col gap-6 w-full max-w-7xl">
        {incorrectAnswers.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transform hover:scale-[1.02] transition-all">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              Неправильные ответы
            </h2>
            <ul className="list-disc pl-6">
              {incorrectAnswers.map(
                (item: { question: string; note: string }, index: number) => (
                  <li key={index} className="mb-4">
                    <p className="text-sm sm:text-base font-medium text-gray-800">
                      {item.question}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {item.note}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        ) : (
          <p className="text-sm sm:text-base text-gray-800">
            Нет неправильных ответов.
          </p>
        )}
      </div>

      <button
        onClick={() => navigate("/recommendations")}
        className="mt-12 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity mb-10"
      >
        Перейти на страницу рекомендаций
      </button>
    </div>
  );
};

export default CheckPage;
