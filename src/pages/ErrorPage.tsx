import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-custom-blue flex flex-col items-center justify-center pt-10 pb-10 pr-10 pl-10"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 550px",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl text-center font-bold text-white bg-clip-text text-transparent mb-16">
        Ошибка
      </h1>
      <div
        className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center"
        style={{
          maxWidth: "600px", 
          minWidth: "350px",
          width: "100%", 
          height: "auto", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Что-то пошло не так...
        </h2>
        <p className="text-base text-blue-600 text-center mb-6">
          Страница не найдена или произошла ошибка. Попробуйте вернуться на
          главную.
        </p>
        <button
          onClick={handleGoHome}
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-gradient-to-r from-[#ffcc00] via-[#ff00c3] to-[#0099ff] text-white font-bold py-4 px-8 rounded-full shadow-md transition-all hover:opacity-90"
        >
          На главную
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
