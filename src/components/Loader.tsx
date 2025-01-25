import React from 'react';

const Loader = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-[#112240] animate-bg">
      <div className="relative w-[7.5rem] h-[7.5rem]">
        {[...Array(20)].map((_, index) => (
          <span
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: `rotate(calc(20deg * ${index + 1}))` }}
          >
            <span
              className="absolute left-0 top-0 w-[15px] h-[15px] rounded-full bg-[#00cffd] animate-pulse"
              style={{
                animationDelay: `${0.1 * (index + 1)}s`,
              }}
            ></span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Loader;
