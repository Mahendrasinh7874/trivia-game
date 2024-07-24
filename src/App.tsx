import React, { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import axios from "axios";
import { toast, Toaster } from "sonner";
import Loader from "./components/Loader";
import Output from "./components/Output";

export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const url = "https://opentdb.com/api.php?amount=10";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        setQuestions(data.results);
      } catch (err: any) {
        toast.error(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="flex bg-gray-900 items-center justify-center min-h-screen">
        <Loader />
      </div>
    );


  const handleNext = (ans: boolean) => {
    if (ans) setCorrectAnswers(prev => prev + 1);
    setCurrentQuestionIndex(prev => prev + 1);
  }


  if (currentQuestionIndex >= questions.length) {
    toast.success("Quiz completed successfully")
    return (
      <Output correctAnswers={correctAnswers} totalQuestions={questions.length} />
    );
  }

  return (
    <>
      {currentQuestion ? (
        <Game loading={loading} handleNext={handleNext} currentQuestion={currentQuestion} />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <h1 className="text-white text-2xl">No Questions Found</h1>
        </div>
      )}
    </>
  );
};

export default App;
