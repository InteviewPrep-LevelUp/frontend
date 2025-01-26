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
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center max-w-7xl w-full mx-auto py-4 px-6 md:px-10 text-white">
        <div className="flex items-center gap-6 md:gap-10">
          <img src="img/logo.png" className="h-12 md:h-16" alt="Logo" />
          <span
            onClick={() => handleScroll("main")}
            className="cursor-pointer text-sm md:text-base"
          >
            главная
          </span>
          <span
            onClick={() => handleScroll("about")}
            className="cursor-pointer text-sm md:text-base"
          >
            о проекте
          </span>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            className="cursor-pointer capitalize border-2 rounded-lg bg-white px-4 py-2 text-custom-blue font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:opacity-90"
            onClick={() => navigate("/chooseDirection")}
          >
            Начать подготовку
          </button>
        </div>
      </header>

      {/* Main Section */}
      <section
        id="main"
        className="flex flex-col text-white items-center pt-16 md:pt-24 h-[90vh] p-10"
        style={{
          backgroundImage: "url('img/gradient.png')",
          backgroundSize: "100% 400px",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold text-center leading-tight max-w-4xl">
          Готовьтесь к собеседованиям с умным AI-помощником
        </h1>
        <p className="mt-5 text-sm md:text-base max-w-md text-center">
          Улучшите технические и софт скиллы, проходите мок-интервью и
          достигайте успеха!
        </p>
        <button
          className="cursor-pointer mt-6 md:mt-10 px-6 py-3 md:py-5 rounded-lg bg-white text-custom-blue font-bold text-sm md:text-base tracking-wide transition-all transform hover:scale-105 hover:shadow-lg hover:opacity-90"
          onClick={() => navigate("/chooseDirection")}
        >
          Попробовать сейчас
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col items-center py-16 md:py-20 px-4 text-white bg-custom-blue"
      >
        <h2 className="text-3xl md:text-4xl lg:text-[50px] font-bold mb-12 md:mb-16 text-neon-blue text-center">
          О проекте
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 justify-center">
          {/* Image Section */}
          <div className="relative group w-full max-w-[90%] md:max-w-lg">
            <img
              src="img/about.avif"
              alt="About Project"
              className="w-full h-auto rounded-lg transition-all transform group-hover:scale-105 shadow-custom-white"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-custom-blue opacity-0 group-hover:opacity-40 rounded-lg transition-opacity"></div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="max-w-full lg:max-w-md leading-6 md:leading-7 text-sm md:text-base mb-8">
              Этот проект создан для подготовки к техническим собеседованиям с
              использованием искусственного интеллекта. Вы можете выбрать
              направление (Frontend, Backend, Data Science и т.д.) и тренировать
              технические навыки. Мы поможем вам достичь успеха в карьере!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
