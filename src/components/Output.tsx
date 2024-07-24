import React from 'react'


interface props {
    correctAnswers: number;
    totalQuestions: number;
}
const Output: React.FC<props> = ({ correctAnswers, totalQuestions }) => {
    const wrongAnswers = totalQuestions - correctAnswers;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <h1 className="text-white text-3xl mb-4">Quiz Completed!</h1>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-lg">
                <p className="text-white text-xl mb-2">
                    Total Questions Served: <span className="text-orange-500 ml-2">{totalQuestions}</span>
                </p>
                <p className="text-white text-xl mb-2">
                    Total Correct Questions: <span className="text-green-500 ml-2">{correctAnswers}</span>
                </p>
                <p className="text-white text-xl">
                    Total Incorrect Questions: <span className="text-red-500 ml-2">{wrongAnswers}</span>
                </p>
            </div>
        </div>
    )
}

export default Output