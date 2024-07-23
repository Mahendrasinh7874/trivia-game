import React, { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import axios from "axios";

export interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://opentdb.com/api.php?amount=10");
      console.log(data.results);
      setQuestions(data.results);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  return <Game loading={loading} currentQuestion={currentQuestion} />;
};

export default App;
