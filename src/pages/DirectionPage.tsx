import React from "react";
import { useNavigate } from "react-router-dom";

const DirectionPage = () => {
  const navigate = useNavigate();

  const directions = [
    { name: "Backend", description: "Исследуй серверную часть разработки" },
    { name: "Frontend", description: "Погрузись в создание интерфейса" },
    {
      name: "Data Science",
      description: "Анализируй и обрабатывай большие данные",
    },
    { name: "UI/UX", description: "Создай приятный и удобный дизайн" },
    {
      name: "Mobile Development",
      description: "Создавай приложения для IOS и Android",
    },
    { name: "DevOps", description: "Автоматизируй процессы разработки" },
  ];

  const handleSelectDirection = (direction: string) => {
    navigate("/level", { state: { direction } });
  };

  return (
    <div
      className="min-h-screen bg-custom-blue flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 550px",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-6xl font-bold text-white bg-clip-text text-transparent mb-20">
        Выберите направление
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {directions.map((direction, index) => (
          <div
            key={index}
            onClick={() => handleSelectDirection(direction.name)}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
          >
            <h2 className="text-2xl font-bold text-gradient bg-clip-text text-transparent mb-4">
              {direction.name}
            </h2>
            <p className="text-gradient bg-clip-text text-transparent">
              {direction.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectionPage;
