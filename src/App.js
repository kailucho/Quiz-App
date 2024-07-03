import React, { useEffect, useState } from "react";
import Question from "./Question";
import { Container, Typography, Box, Button } from "@mui/material";
import Result from "./Result";
import questions from "./questions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const selectRandomQuestions = () => {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, 10);
  };
  useEffect(() => {
    setRandomQuestions(selectRandomQuestions());
  }, []);

  const handleAnswerOptionClick = (isCorrect, selectedOption) => {
    setUserAnswers([
      ...userAnswers,
      {
        question: randomQuestions[currentQuestionIndex],
        answer: selectedOption,
        isCorrect: isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < randomQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRetry = () => {
    // Reiniciar el estado para volver a jugar
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setShowScore(false);
    setRandomQuestions(selectRandomQuestions()); // Llamar a selectRandomQuestions aquí
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      {showScore ? (
        <Result
          score={score}
          questions={randomQuestions.length}
          userAnswers={userAnswers}
          onRetry={handleRetry}
        />
      ) : (
        <Question
          question={randomQuestions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          onAnswerClick={handleAnswerOptionClick}
        />
      )}
    </Container>
  );
};

export default App;
