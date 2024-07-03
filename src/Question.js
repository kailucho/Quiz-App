import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const Question = ({ question, questionNumber, onAnswerClick }) => {
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    // Función para mezclar las alternativas al azar
    const shuffleOptions = () => {
      const shuffled = question?.alternativas.sort(() => Math.random() - 0.5);
      return shuffled;
    };

    setShuffledOptions(shuffleOptions());
  }, [question]);

  const options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {questionNumber}. {question?.pregunta}
        </Typography>
        <Box display="flex" flexDirection="column">
          {shuffledOptions?.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => onAnswerClick(option.correcta, option.texto)}
              sx={{ mt: 2 }}
            >
              {options[index]}. {option.texto}
            </Button>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Question;
