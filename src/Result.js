import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const Result = ({ score, questions, userAnswers, onRetry }) => {
  return (
    <Box textAlign='center'>
      <Typography variant='h4' gutterBottom>
        You scored {score} out of {questions}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={onRetry}
        sx={{ mt: 3 }}
      >
        Retry Quiz
      </Button>
      {userAnswers.map((userAnswer, index) => (
        <Card key={index} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant='h6'>
              {index + 1}. {userAnswer.question.pregunta}
            </Typography>
            {userAnswer.question.alternativas.map((option, idx) => (
              <Typography
                key={idx}
                sx={{
                  mt: 1,
                  color:
                    userAnswer.answer === option.texto
                      ? userAnswer.isCorrect
                        ? "green"
                        : "red"
                      : "black",
                  fontWeight:
                    userAnswer.answer === option.texto ? "bold" : "normal",
                }}
              >
                {String.fromCharCode(97 + idx)}. {option.texto}
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Result;
