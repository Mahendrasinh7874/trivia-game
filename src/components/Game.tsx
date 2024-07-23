import axios from "axios";
import React, { useEffect, useState } from "react";
import { Question } from "../App";
import Loader from "./Loader";

interface TriviaGameProps {
  currentQuestion?: Question;
  loading?: boolean;
  handleNext: (isCorrect: boolean) => void;
}

const TriviaGame: React.FC<TriviaGameProps> = ({
  currentQuestion,
  loading, handleNext
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const [showAnswers, setShowAnswers] = useState<boolean>(false)

  const {
    correct_answer = "",
    incorrect_answers = [],
    question = "",
    type = "",
  } = currentQuestion || {};

  const options = [correct_answer, ...incorrect_answers].sort()

  /* 
    useEffect(() => {
      if (currentQuestion) {
        const options = [correct_answer, ...incorrect_answers].sort(
          () => Math.random() - 0.5
        );
        setShuffledOptions(options);
      }
    }, [currentQuestion]);
   */
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

    // multiple answers chosen
    // if (type === "multiple") {
    //   // Handle multiple choice
    //   const newOptions = selectedOptions.includes(option)
    //     ? selectedOptions.filter((opt) => opt !== option)
    //     : [...selectedOptions, option];
    //   setSelectedOptions(newOptions);
    // } else {
    //   // Handle single choice
    //   setSelectedOptions([option]);
    // }
  };


  const handleSubmit = () => {
    console.log("submitted")
    setShowAnswers(true);
  }

  const handleNextQuestion = () => {
    const correct = selectedOption === currentQuestion?.correct_answer
    handleNext(correct);
    setShowAnswers(false);
    setSelectedOption("")
  }



  const correct = selectedOption === currentQuestion?.correct_answer

  return (
    <div className="bg-gray-900 min-h-screen flex-col flex items-center justify-center p-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h1 className="text-2xl font-bold text-white mb-4">{question}</h1>
            <div className="space-y-4 mb-6">
              {options.map((option) => (
                <button
                  key={option}
                  className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors duration-300 
          ${selectedOption === option
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
                className="bg-green-500/90 disabled:text-gray-200 disabled:cursor-not-allowed disabled:bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors duration-300"
                disabled={!selectedOption}
                onClick={handleSubmit}
              >
                Submit
              </button>
              {
                showAnswers &&
                <button
                  className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              }
            </div>
          </div>

          {showAnswers &&
            <div className="flex items-center gap-3 flex-col justify-center py-4">
              <p className={`${correct ? "text-green-500" : "text-red-500"}`}>{correct ? "Correct✅" : "Wrong❌"}</p>
              <p className="text-white">Correct Answer is : <span className="text-green-500 font-semibold">{currentQuestion?.correct_answer}</span></p>
            </div>}
        </>

      )}
    </div>
  );
};

export default TriviaGame;
