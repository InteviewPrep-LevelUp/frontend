import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LevelPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { direction } = location.state || {};

  if (!direction) {
    navigate("/");
    return null;
  }

  const levels = ["Junior", "Middle", "Senior"];

  const handleSelectLevel = (level: string) => {
    navigate("/languages", { state: { direction, level } });
  };

  return (
    <div
      className="min-h-screen bg-custom-blue flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 550px",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-6xl font-bold text-white bg-clip-text text-transparent mt-[-200px] mb-[50px]">
        Выберите уровень для {direction}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
        {levels.map((level, index) => (
          <div
            key={index}
            onClick={() => handleSelectLevel(level)}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-gradient bg-clip-text text-transparent mb-4">
              {level}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelPage;
