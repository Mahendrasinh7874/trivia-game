import React from 'react'


interface props {
    correctAnswers: number;
    totalQuestions: number;
}
const Output: React.FC<props> = ({ correctAnswers, totalQuestions }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <h1 className="text-white text-3xl">Quiz Completed!</h1>
            <p className="text-white text-2xl">
                You answered {correctAnswers} out of {totalQuestions} questions correctly.
            </p>
        </div>
    )
}

export default Output