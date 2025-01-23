import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-custom-blue flex flex-col">
      <header className="flex justify-between items-center max-w-7xl w-full mx-auto py-3 px-10 text-white">
        <div className="flex items-center gap-[70px] capitalize">
          <img src="img/logo.png" className="h-16 pt-1" alt="Logo" />
          <span onClick={() => handleScroll("main")} className="cursor-pointer">
            главная
          </span>
          <span
            onClick={() => handleScroll("about")}
            className="cursor-pointer"
          >
            о проекте
          </span>
        </div>
        <div className="flex items-center">
          <button
            className="cursor-pointer capitalize border-[2px] rounded-lg bg-white px-4 py-2 text-custom-blue font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:opacity-90"
            onClick={() => navigate("/chooseDirection")}
          >
            Начать подготовку
          </button>
        </div>
      </header>

      <section
        id="main"
        className="flex flex-col text-white items-center pt-[100px] z-10 h-[90vh]"
        style={{
          backgroundImage: "url('img/gradient.png')",
          backgroundSize: "100% 500px",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-[60px] font-bold text-center leading-[65px] max-w-6xl">
          Готовьтесь к собеседованиям с умным AI-помощником
        </h1>
        <p className="mt-5">
          Улучшите технические и софт скиллы, проходите мок-интервью и
          достигайте успеха!
        </p>
        <button
          className="cursor-pointer mt-10 pt-5 pb-5 pl-8 pr-8 rounded-lg bg-white text-custom-blue font-bold spacing tracking-[1px] transition-all transform hover:scale-105 hover:shadow-lg hover:opacity-90"
          onClick={() => navigate("/chooseDirection")}
        >
          Попробовать сейчас
        </button>
      </section>

      <section
        id="about"
        className="flex flex-col items-center py-20 text-white"
        style={{
          backgroundImage: "url('img/bg-2.webp')",
          backgroundColor: "#000",
          backgroundSize: "1050px",
          backgroundPosition: "100px center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-[50px] font-bold mb-20 text-neon-blue">
          О проекте
        </h2>

        <div className="flex items-center gap-[200px] justify-center">
          <div className="relative group">
            <img
              src="img/about.avif"
              alt="About Project"
              className="w-[500px] h-auto rounded-lg transition-all transform group-hover:scale-105 shadow-custom-white"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-blue opacity-0 group-hover:opacity-40 rounded-lg transition-opacity"></div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-center lg:text-left max-w-4xl leading-7 text-lg mb-10 w-[500px]">
              Этот проект создан для подготовки к техническим собеседованиям с
              использованием искусственного интеллекта. Вы можете выбрать
              направление (Frontend, Backend, Data Science и т.д.) и тренировать
              как технические, так и софт навыки через мок-интервью и
              интерактивные задачи. Мы поможем вам достичь успеха в карьере!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
