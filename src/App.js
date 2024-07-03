import React, { useEffect, useState } from "react";
import Question from "./Question";
import { Container, Typography, Box, Button } from "@mui/material";
import Result from "./Result";

const questions = [
  {
    pregunta: "¿Qué es una clave primaria en una tabla de base de datos?",
    alternativas: [
      {
        texto: "Un campo que puede contener valores duplicados",
        correcta: false,
      },
      {
        texto: "Un campo que identifica de manera única cada fila en la tabla",
        correcta: true,
      },
      {
        texto: "Un campo que no puede contener valores nulos",
        correcta: false,
      },
      {
        texto: "Un campo que define la estructura de la tabla",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Respecto de las claves candidatas en el modelo relacional, señalar la afirmación errónea:",
    alternativas: [
      {
        texto: "Toda relación tiene al menos una clave candidata.",
        correcta: false,
      },
      {
        texto:
          "Una clave candidata es una clave primaria que también cumple la propiedad de minimalidad.",
        correcta: true,
      },
      {
        texto: "Toda clave primaria es también clave candidata.",
        correcta: false,
      },
      {
        texto: "Toda clave alternativa es también clave candidata.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿Qué es una transacción en el contexto de bases de datos?",
    alternativas: [
      { texto: "Una consulta SQL", correcta: false },
      {
        texto: "Una operación de mantenimiento de la base de datos",
        correcta: false,
      },
      {
        texto:
          "Un conjunto de operaciones que se ejecutan como una unidad indivisible",
        correcta: true,
      },
      { texto: "Un procedimiento almacenado", correcta: false },
    ],
  },
  {
    pregunta:
      "¿Qué es la normalización de bases de datos y cuál es su objetivo principal?",
    alternativas: [
      {
        texto:
          "Proceso para descomponer grandes tablas en tablas más pequeñas y optimizar el rendimiento.",
        correcta: false,
      },
      {
        texto:
          "Proceso para asegurar que los datos estén correctos y sin errores.",
        correcta: false,
      },
      {
        texto:
          "Proceso para minimizar la redundancia y evitar anomalías de actualización.",
        correcta: true,
      },
      {
        texto:
          "Proceso para eliminar datos duplicados y mejorar la eficiencia de almacenamiento.",
        correcta: false,
      },
    ],
  },
  {
    pregunta: "¿Qué es la normalización de BCNF (Boyce-Codd Normal Form)?",
    alternativas: [
      {
        texto: "Forma normal que elimina la dependencia transitiva.",
        correcta: false,
      },
      {
        texto: "Forma normal que elimina la dependencia multivaluada.",
        correcta: false,
      },
      {
        texto:
          "Forma normal que asegura que cada determinante sea una superclave.",
        correcta: true,
      },
      {
        texto:
          "Forma normal que asegura que no haya dependencias funcionales parciales.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es un índice en una base de datos y cuál es su propósito principal?",
    alternativas: [
      {
        texto:
          "Estructura que facilita la organización física de los datos en el disco.",
        correcta: false,
      },
      {
        texto:
          "Estructura que asegura la coherencia y consistencia de los datos.",
        correcta: false,
      },
      {
        texto: "Estructura que acelera la búsqueda y recuperación de datos.",
        correcta: true,
      },
      {
        texto: "Estructura que asegura la privacidad y seguridad de los datos.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué son las vistas en una base de datos y para qué se utilizan?",
    alternativas: [
      {
        texto: "Resultado de una consulta almacenado en una tabla.",
        correcta: false,
      },
      {
        texto: "Definición de una tabla virtual basada en una consulta SQL.",
        correcta: true,
      },
      {
        texto: "Tipo de tabla que almacena los resultados de una operación.",
        correcta: false,
      },
      {
        texto:
          "Tipo de tabla que almacena datos temporales durante una transacción.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "Dadas las siguientes relaciones:\nCliente(dni, paterno, materno, nombres, direccion, telefono)\nCuenta(numero_cta, fecha_apertura, saldo, dni_cliente)\n¿Qué tipo de restricción debe agregar y en qué tabla para asegurar que siempre que se introduzca una cuenta nueva el cliente al que pertenece dicha cuenta deba existir previamente y siempre que se borre un Cliente se borren todos sus Cuentas?",
    alternativas: [
      {
        texto:
          "En la relación Cuenta definir el atributo dni_cliente como NOT NULL, como clave ajena el atributo dni_cliente y como opción de borrado especificar CASCADE.",
        correcta: true,
      },
      {
        texto:
          "En la relación Cuenta definir como clave ajena sobre el atributo dni_cliente que especifique como opción de borrado NO ACTION.",
        correcta: false,
      },
      {
        texto:
          "En la relación Cliente definir como clave ajena el atributo dni y como opción de borrado especificar CASCADE.",
        correcta: false,
      },
      {
        texto:
          "En la relación Cuentas definir una restricción CHECK indicando como modo de borrado CASCADE.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es la prueba de carga en el contexto de pruebas de software?",
    alternativas: [
      {
        texto:
          "Prueba para verificar la estabilidad del sistema ante una carga máxima.",
        correcta: true,
      },
      {
        texto:
          "Prueba para encontrar defectos en el software utilizando datos de carga.",
        correcta: false,
      },
      {
        texto:
          "Prueba para verificar la capacidad del software para manejar múltiples usuarios.",
        correcta: false,
      },
      {
        texto:
          "Prueba para verificar la capacidad de recuperación del sistema después de una carga máxima.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Cuál es el propósito principal de la prueba de regresión en el ciclo de vida del desarrollo de software?",
    alternativas: [
      {
        texto: "Verificar la corrección de los requisitos del software.",
        correcta: false,
      },
      {
        texto:
          "Asegurar que los nuevos cambios no introduzcan errores en el software existente.",
        correcta: true,
      },
      {
        texto:
          "Evaluar la capacidad de rendimiento del software bajo condiciones normales de uso.",
        correcta: false,
      },
      {
        texto:
          "Optimizar el rendimiento del software utilizando técnicas de carga.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es la automatización de pruebas en el contexto de evaluación de software?",
    alternativas: [
      {
        texto:
          "Proceso para realizar pruebas manuales sin intervención humana.",
        correcta: false,
      },
      {
        texto:
          "Proceso para utilizar herramientas y scripts para ejecutar pruebas automáticamente.",
        correcta: true,
      },
      {
        texto:
          "Proceso para simular la interacción del usuario final con el software.",
        correcta: false,
      },
      {
        texto:
          "Proceso para documentar los resultados de las pruebas de manera automatizada.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Cuál es la diferencia principal entre pruebas funcionales y pruebas no funcionales?",
    alternativas: [
      {
        texto:
          "Las pruebas funcionales evalúan la usabilidad del software, mientras que las no funcionales evalúan la funcionalidad.",
        correcta: false,
      },
      {
        texto:
          "Las pruebas funcionales verifican las características del software, mientras que las no funcionales verifican cómo funciona.",
        correcta: false,
      },
      {
        texto:
          "Las pruebas funcionales prueban los requisitos del software, mientras que las no funcionales prueban los atributos del software.",
        correcta: true,
      },
      {
        texto:
          "Las pruebas funcionales prueban la interfaz de usuario, mientras que las no funcionales prueban la lógica interna del software.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Qué es la prueba de penetración en el contexto de seguridad de software?",
    alternativas: [
      {
        texto:
          "Prueba para detectar vulnerabilidades en el código fuente del software.",
        correcta: false,
      },
      {
        texto:
          "Prueba para evaluar el rendimiento del software bajo carga máxima.",
        correcta: false,
      },
      {
        texto:
          "Prueba para simular un ataque real contra el sistema para identificar vulnerabilidades.",
        correcta: true,
      },
      {
        texto:
          "Prueba para verificar la capacidad de recuperación del sistema después de un fallo.",
        correcta: false,
      },
    ],
  },
  {
    pregunta:
      "¿Cuál es el objetivo principal de las pruebas de usabilidad en el contexto de evaluación de software?",
    alternativas: [
      {
        texto:
          "Verificar que el software cumple con los estándares de codificación.",
        correcta: false,
      },
      {
        texto:
          "Evaluar la facilidad de uso del software por parte de los usuarios finales.",
        correcta: true,
      },
      {
        texto:
          "Optimizar el rendimiento del software bajo diferentes condiciones.",
        correcta: false,
      },
      {
        texto:
          "Documentar los resultados de las pruebas de rendimiento del software.",
        correcta: false,
      },
    ],
  },
];

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
    <Container maxWidth='sm' sx={{ mt: 4 }}>
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
