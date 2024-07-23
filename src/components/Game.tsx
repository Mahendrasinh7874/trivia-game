import axios from "axios";
import React, { useEffect, useState } from "react";
import { Question } from "../App";
import Loader from "./Loader";

interface TriviaGameProps {
  currentQuestion?: Question;
  loading?: boolean;
}

const TriviaGame: React.FC<TriviaGameProps> = ({
  currentQuestion,
  loading,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const {
    correct_answer = "",
    incorrect_answers = [],
    question = "",
    type = "",
  } = currentQuestion || {};

  const options = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  const handleOptionClick = (option: string) => {
    if (type === "multiple") {
      // Handle multiple choice
      const newOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((opt) => opt !== option)
        : [...selectedOptions, option];
      setSelectedOptions(newOptions);
    } else {
      // Handle single choice
      setSelectedOptions([option]);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-bold text-white mb-4">{question}</h1>
          <div className="space-y-4 mb-6">
            {options.map((option) => (
              <button
                key={option}
                className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors duration-300 
          ${
            selectedOptions.includes(option)
              ? "bg-blue-500"
              : "bg-gray-600 hover:bg-gray-500"
          } `}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between">
            <button
              className="bg-green-500/90 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors duration-300"
              //onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors duration-300"
              //  onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TriviaGame;
