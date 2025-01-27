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
    {
      name: "Mobile Development",
      description: "Создавай приложения для IOS и Android",
    },
    { name: "DevOps", description: "Автоматизируй процессы разработки" },
    {
      name: "Полное интервью 🔒",
      description: "Пройди полное интервью и узнай все свои слабые стороны",
      isPremium: true,
    },
    {
      name: "Soft skills 🔒",
      description: "Насколько у вас хорошие софты?",
      isPremium: true,
    },
    {
      name: "Голос 🔒",
      description: "Узнай, насколько уверенно ты говоришь",
      isPremium: true,
    },
  ];

  const handleSelectDirection = (
    specialty: string,
    isPremium: boolean = false
  ) => {
    if (isPremium) {
      navigate("/premium");
    } else {
      navigate("/level", { state: { specialty } });
    }
  };

  return (
    <div
      className="min-h-screen bg-custom-blue flex flex-col items-center justify-center pt-10 pb-10"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 550px",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl text-center font-bold text-white bg-clip-text text-transparent mb-16">
        Выберите направление
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {directions.map((direction, index) => (
          <div
            key={index}
            onClick={() =>
              handleSelectDirection(
                direction.name,
                direction.isPremium || false
              )
            }
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer"
            style={{
              maxWidth: "300px",
              minWidth: "250px",
              width: "100%",
              height: "180px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 className="text-2xl font-bold text-gradient bg-clip-text text-transparent mb-2">
              {direction.name}
            </h2>
            <p className="text-base text-gradient bg-clip-text text-transparent text-center">
              {direction.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectionPage;
