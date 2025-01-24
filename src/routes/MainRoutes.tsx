import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CheckPage from "../pages/CheckPage";
import DirectionPage from "../pages/DirectionPage";
import LevelPage from "../pages/LevelPage";
import LanguagePage from "../pages/LanguagePage";
import QuestionPage from "../pages/QuestionPage";
import RecommendationPage from "../pages/RecommendationPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/chooseDirection" element={<DirectionPage />} />
      <Route path="/level" element={<LevelPage />} />
      <Route path="/languages" element={<LanguagePage />} />
      <Route path="/questions" element={<QuestionPage />} />
      <Route path="/check" element={<CheckPage />} />
      <Route path="/recommendations" element={<RecommendationPage />} />
    </Routes>
  );
};

export default MainRoutes;
