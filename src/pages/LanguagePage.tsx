import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const languages = {
  Backend: ["Python", "C++", "Java", "C#", "Go", "PHP"],
  Frontend: [
    "HTML5/CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Next.js",
    "Redux/Redux Toolkit",
  ],
  "Data Science": [
    "Python",
    "R",
    "SQL",
    "TensorFlow",
    "PyTorch",
    "Apache Spark",
  ],
  "UI/UX": ["Figma", "Sketch", "Adobe XD", "InVision", "Framer", "AxureRP"],
  "Mobile Development": [
    "Swift",
    "Kotlin",
    "Flutter",
    "React Native",
    "Xamarin",
    "Apache Cordova (PhoneGap)",
  ],
  DevOps: [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Jenkins",
    "GitLab CL/CD",
  ],
};

const LanguagePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { specialty, level }: { specialty?: string; level?: string } =
    location.state || {};

  if (!specialty || !level) {
    navigate("/");
    return null;
  }

  const handleCompleteSelection = (language: string) => {
    const selectionData = {
      specialty,
      level,
      language,
    };

    localStorage.setItem("interviewPreparation", JSON.stringify(selectionData));
    navigate("/go");
  };

  return (
    <div
      className="min-h-screen bg-custom-blue flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 p-10"
      style={{
        backgroundImage: "url('img/gradient.png')",
        backgroundSize: "100% 550px",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white bg-clip-text text-transparent mb-10 text-center">
        Выберите язык для {specialty} ({level})
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
        {(languages[specialty as keyof typeof languages] || []).map(
          (language, index) => (
            <div
              key={index}
              onClick={() => handleCompleteSelection(language)}
              className="bg-white rounded-lg shadow-lg p-6 pt-8 hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer"
            >
              <h2 className="text-xl text-center sm:text-2xl font-bold text-gradient bg-clip-text text-transparent mb-4">
                {language}
              </h2>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default LanguagePage;
