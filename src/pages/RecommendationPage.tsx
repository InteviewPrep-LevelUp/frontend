import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Recommendation = {
  strength: string;
  weakness: string;
  improvement: string;
};

const RecommendationPage: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation | null>(
    null
  );
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("interviewPreparation") || "{}"
    );
    const { specialty, level, language } = data;

    setRecommendations({
      strength: "Хорошие знания в основном направлении.",
      weakness: "Не хватает опыта с проектами в реальной жизни.",
      improvement:
        "Попробуйте поработать над практическими проектами и улучшить навыки в " +
        specialty,
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
      {recommendations && (
        <div className="w-full max-w-2xl sm:max-w-3xl bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-10">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#ffcc00] via-[#ff00c3] to-[#0099ff] bg-clip-text text-transparent">
              Сильные стороны:
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              {recommendations.strength}
            </p>
          </div>
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#ffcc00] via-[#ff00c3] to-[#0099ff] bg-clip-text text-transparent">
              Слабые стороны:
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              {recommendations.weakness}
            </p>
          </div>
          <div className="mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#ffcc00] via-[#ff00c3] to-[#0099ff] bg-clip-text text-transparent">
              Рекомендации по улучшению:
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              {recommendations.improvement}
            </p>
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
      )}
    </div>
  );
};

export default RecommendationPage;
