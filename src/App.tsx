import React, { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import axios from "axios";
import { toast, Toaster } from "sonner";
import Loader from "./components/Loader";

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        toast.success("success");
        setQuestions(data.results);
      } catch (err: any) {
        console.error("Error fetching data:", err);
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

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <>
      {/* for toast */}
      <Toaster
        invert={true}
        visibleToasts={3}
        position="bottom-right"
        expand={true}
        duration={4000}
        richColors={true}
        closeButton={true}
      />
      {currentQuestion ? (
        <Game loading={loading} currentQuestion={currentQuestion} />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <h1 className="text-white text-2xl">No Questions Found</h1>
        </div>
      )}
    </>
  );
};

export default App;
