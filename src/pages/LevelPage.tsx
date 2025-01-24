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
      className="min-h-screen flex flex-col items-center justify-center bg-custom-blue px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 550px",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white bg-clip-text text-transparent mt-[-100px] sm:mt-[-150px] lg:mt-[-200px] mb-10 text-center">
        Выберите уровень для {direction}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        {levels.map((level, index) => (
          <div
            key={index}
            onClick={() => handleSelectLevel(level)}
            className="bg-white rounded-lg shadow-lg p-6 pt-8 hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
          >
            <h2 className="text-xl text-center sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              {level}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelPage;
