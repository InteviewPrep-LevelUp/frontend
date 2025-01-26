import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { getQuestions } from "../store/actions/question.action";
import Loader from "../components/Loader";

const GoPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleNavigate = async () => {
    const preparationData = localStorage.getItem("interviewPreparation");

    if (preparationData) {
      const { specialty, level, language } = JSON.parse(preparationData);

      try {
        setLoading(true);
        await dispatch(getQuestions({ specialty, level, language, navigate }));
        setLoading(false);
      } catch (error) {
        console.error("Ошибка при отправке данных:", error);
        setLoading(false); 
      }
    }
  };

  return (
    <div className="bg-custom-blue flex flex-col">
      <section
        id="main"
        className="flex flex-col text-white items-center pt-16 md:pt-24 min-h-screen p-6 sm:p-10"
        style={{
          backgroundImage: "url('img/gradient.png')",
          backgroundSize: "100% 400px",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-center leading-tight max-w-4xl mt-20">
          Начать подготовку
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-center max-w-md">
          Подготовьтесь к заданиям с умным AI-помощником. Успех в карьере
          начинается с правильной подготовки!
        </p>

        <button
          className="cursor-pointer mt-6 sm:mt-8 px-6 py-3 md:py-5 rounded-lg bg-white text-custom-blue font-bold text-sm sm:text-base tracking-wide transition-all transform hover:scale-105 hover:shadow-lg hover:opacity-90"
          onClick={handleNavigate}
          disabled={loading}
        >
          Перейти к заданиям 👉
        </button>
      </section>
      {loading && <section className="absolute top-0 right-0 left-0"><Loader /></section>}
    </div>
  );
};

export default GoPage;
