import React from "react";
import bannerStack from "../assets/banner-stack.png";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-24 bg-slate-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Build Your Ideal{" "}
              <span className="brand-gradient-text">Development Stack</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#technologies"
                className="brand-gradient-bg text-white font-medium px-6 py-3 rounded-full shadow hover:opacity-95 transition-all text-sm sm:text-base"
              >
                Explore Technologies
              </a>
              <button className="border border-gray-300 hover:border-gray-400 bg-white text-gray-700 font-medium px-6 py-3 rounded-full shadow-sm transition-all text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 brand-gradient-bg opacity-20 blur-3xl rounded-full -z-10" />

              <img
                src={bannerStack}
                alt="DevStack Infrastructure"
                className="w-full h-auto max-h-\[460px\] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
