import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Recommendation = {
  improvement: string[] | null;
};

const RecommendationPage: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation>({
    improvement: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Извлечение данных из localStorage
    const improvement = localStorage.getItem("areas_for_improvement");

    // Обновление состояния с извлеченными данными
    setRecommendations({
      improvement: improvement ? JSON.parse(improvement) : null,
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-custom-blue p-10"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 600px",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white bg-clip-text text-transparent mb-12 sm:mb-16 md:mb-20">
        Рекомендации
      </h1>
      <div className="w-full max-w-2xl sm:max-w-3xl bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-10">
        <div className="mb-6 sm:mb-8 md:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r text-[#0099ff] bg-clip-text text-transparent mb-5">
            Рекомендации по улучшению:
          </h2>
          {recommendations.improvement &&
            recommendations.improvement.length > 0 && (
              <ul className="text-gray-700 text-sm sm:text-base md:text-lg">
                {recommendations.improvement.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10">
          <button
            onClick={() => navigate("/questions")}
            className="w-full sm:w-3/4 md:w-1/2 bg-gradient-to-r text-gradient text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:opacity-90"
          >
            Повторить тест
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
