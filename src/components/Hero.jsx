import React from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Frame3D from "./Frame3D";

const Hero = () => {
  const { isDark } = useTheme();
  const profileImage =
    "https://miro.medium.com/v2/resize:fit:2400/1*b3kIWsMkDeWVw6YjgOzm3w.jpeg";

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              <Frame3D frontImage={profileImage} />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Samyak Kala
              <span className="text-indigo-600 block mt-2 text-xl md:text-2xl">
                Software Developer
              </span>
            </h1>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-8 mt-4`}
            >
              Transforming concepts into advanced Salesforce solutions and
              cutting-edge AI-driven experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
