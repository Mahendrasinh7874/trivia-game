import React, { useState } from "react";
import "./App.css";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

function App() {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // Handle submit logic
    alert(`Selected option: ${selectedOption}`);
  };

  const handleNext = () => {
    // Handle next logic
    alert("Next button clicked");
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-4">
          What is your favorite option?
        </h1>
        <div className="space-y-4 mb-6">
          {options.map((option) => (
            <button
              key={option}
              className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors duration-300 
              ${
                selectedOption === option
                  ? "bg-blue-600"
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
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors duration-300"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
