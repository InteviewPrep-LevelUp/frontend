import React from "react";

const PremiumPage = () => {
  return (
    <div className="bg-custom-blue flex flex-col items-center justify-center min-h-screen">
      <header className="flex flex-wrap justify-between items-center max-w-7xl w-full mx-auto py-4 px-6 md:px-10 text-white">
        <div className="flex items-center gap-6 md:gap-10">
          <img src="img/logo.png" className="h-12 md:h-16" alt="Logo" />
        </div>
      </header>

      <section
        className="flex flex-col text-white items-center pt-16 md:pt-24 h-[90vh] p-10"
        style={{
          backgroundImage: "url('img/gradient.png')",
          backgroundSize: "100% 400px",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-[60px] font-bold text-center leading-tight max-w-4xl">
          Функция Premium будет доступна скоро!
        </h1>
        <p className="mt-5 text-sm md:text-base max-w-md text-center">
          Мы активно работаем над запуском премиум-функций для улучшенной
          подготовки к собеседованиям. Следите за обновлениями!
        </p>
      </section>
    </div>
  );
};

export default PremiumPage;
