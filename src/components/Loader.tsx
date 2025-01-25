import React from "react";

const Loader = () => {
  const colors = [
    "#fffc9e", // Yellow
    "#ff4dc4", // Pink
    "#b0f", // Purple
    "#40f", // Blue
  ];

  return (
    <section className="flex justify-center items-center min-h-screen bg-custom-blue animate-bg w-full h-full">
      <div className="relative w-[4rem] h-[4rem]">
        {[...Array(20)].map((_, index) => {
          // Cycle through the colors
          const colorIndex = index % colors.length;
          return (
            <span
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              style={{ transform: `rotate(calc(20deg * ${index + 1}))` }}
            >
              <span
                className="absolute left-0 top-0 w-[8px] h-[8px] rounded-full animate-pulse"
                style={{
                  backgroundColor: colors[colorIndex],
                  animationDelay: `${0.1 * (index + 1)}s`,
                }}
              ></span>
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Loader;
