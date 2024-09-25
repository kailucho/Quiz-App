const questions = [
  {
    pregunta:
      "What is the correct form of the verb in the sentence: 'She _____ to school every day'?",
    alternativas: [
      { texto: "go", correcta: false },
      { texto: "goes", correcta: true },
      { texto: "going", correcta: false },
      { texto: "went", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is correct?",
    alternativas: [
      { texto: "He have a dog.", correcta: false },
      { texto: "He has a dog.", correcta: true },
      { texto: "He haves a dog.", correcta: false },
      { texto: "He had a dog.", correcta: false },
    ],
  },
  {
    pregunta: "Choose the correct preposition: 'I am going _____ the party.'",
    alternativas: [
      { texto: "on", correcta: false },
      { texto: "to", correcta: true },
      { texto: "in", correcta: false },
      { texto: "at", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'They _____ playing soccer.'",
    alternativas: [
      { texto: "is", correcta: false },
      { texto: "are", correcta: true },
      { texto: "am", correcta: false },
      { texto: "were", correcta: false },
    ],
  },
  {
    pregunta: "Which word is a noun?",
    alternativas: [
      { texto: "run", correcta: false },
      { texto: "quickly", correcta: false },
      { texto: "happiness", correcta: true },
      { texto: "sing", correcta: false },
    ],
  },
  {
    pregunta: "Choose the correct word: 'I _____ a movie last night.'",
    alternativas: [
      { texto: "watch", correcta: false },
      { texto: "watched", correcta: true },
      { texto: "watches", correcta: false },
      { texto: "watching", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is in the past tense?",
    alternativas: [
      { texto: "I am eating lunch.", correcta: false },
      { texto: "I ate lunch.", correcta: true },
      { texto: "I will eat lunch.", correcta: false },
      { texto: "I am going to eat lunch.", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'She is _____ than her sister.'",
    alternativas: [
      { texto: "tall", correcta: false },
      { texto: "taller", correcta: true },
      { texto: "tallest", correcta: false },
      { texto: "more tall", correcta: false },
    ],
  },
  {
    pregunta: "Which word is an adjective?",
    alternativas: [
      { texto: "quickly", correcta: false },
      { texto: "run", correcta: false },
      { texto: "beautiful", correcta: true },
      { texto: "sing", correcta: false },
    ],
  },
  {
    pregunta:
      "Choose the correct article: '_____ apple a day keeps the doctor away.'",
    alternativas: [
      { texto: "A", correcta: false },
      { texto: "An", correcta: true },
      { texto: "The", correcta: false },
      { texto: "No article", correcta: false },
    ],
  },
  {
    pregunta: "What is the plural form of 'child'?",
    alternativas: [
      { texto: "childs", correcta: false },
      { texto: "children", correcta: true },
      { texto: "childes", correcta: false },
      { texto: "childrens", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: '_____ you like coffee?'",
    alternativas: [
      { texto: "Do", correcta: true },
      { texto: "Does", correcta: false },
      { texto: "Is", correcta: false },
      { texto: "Are", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is in the future tense?",
    alternativas: [
      { texto: "I will go to the store.", correcta: true },
      { texto: "I am going to the store.", correcta: false },
      { texto: "I went to the store.", correcta: false },
      { texto: "I go to the store.", correcta: false },
    ],
  },
  {
    pregunta: "Choose the correct form: 'They _____ lunch right now.'",
    alternativas: [
      { texto: "eats", correcta: false },
      { texto: "eating", correcta: false },
      { texto: "are eating", correcta: true },
      { texto: "ate", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is correct?",
    alternativas: [
      { texto: "She don't like pizza.", correcta: false },
      { texto: "She doesn't like pizza.", correcta: true },
      { texto: "She isn't like pizza.", correcta: false },
      { texto: "She don't likes pizza.", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'I have two _____.'",
    alternativas: [
      { texto: "mouses", correcta: false },
      { texto: "mice", correcta: true },
      { texto: "mouse", correcta: false },
      { texto: "mices", correcta: false },
    ],
  },
  {
    pregunta: "Which word is a verb?",
    alternativas: [
      { texto: "beautiful", correcta: false },
      { texto: "run", correcta: true },
      { texto: "quick", correcta: false },
      { texto: "happiness", correcta: false },
    ],
  },
  {
    pregunta: "Choose the correct preposition: 'I live _____ the city.'",
    alternativas: [
      { texto: "in", correcta: true },
      { texto: "on", correcta: false },
      { texto: "at", correcta: false },
      { texto: "by", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is in the present continuous tense?",
    alternativas: [
      { texto: "I eat lunch.", correcta: false },
      { texto: "I am eating lunch.", correcta: true },
      { texto: "I ate lunch.", correcta: false },
      { texto: "I will eat lunch.", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'They _____ their homework.'",
    alternativas: [
      { texto: "are doing", correcta: true },
      { texto: "is doing", correcta: false },
      { texto: "does", correcta: false },
      { texto: "do", correcta: false },
    ],
  },
  {
    pregunta: "Which word is a conjunction?",
    alternativas: [
      { texto: "run", correcta: false },
      { texto: "but", correcta: true },
      { texto: "quick", correcta: false },
      { texto: "happiness", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'She _____ a new car last year.'",
    alternativas: [
      { texto: "buys", correcta: false },
      { texto: "bought", correcta: true },
      { texto: "buying", correcta: false },
      { texto: "buyed", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is correct?",
    alternativas: [
      { texto: "I has a dog.", correcta: false },
      { texto: "I have a dog.", correcta: true },
      { texto: "I haves a dog.", correcta: false },
      { texto: "I having a dog.", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: '_____ you speak English?'",
    alternativas: [
      { texto: "Can", correcta: true },
      { texto: "Is", correcta: false },
      { texto: "Do", correcta: false },
      { texto: "Are", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is in the negative form?",
    alternativas: [
      { texto: "I like pizza.", correcta: false },
      { texto: "I don't like pizza.", correcta: true },
      { texto: "I am liking pizza.", correcta: false },
      { texto: "I liked pizza.", correcta: false },
    ],
  },
  {
    pregunta:
      "Choose the correct form: 'She always _____ to the gym on Mondays.'",
    alternativas: [
      { texto: "go", correcta: false },
      { texto: "goes", correcta: true },
      { texto: "going", correcta: false },
      { texto: "gone", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'They _____ watching TV right now.'",
    alternativas: [
      { texto: "is", correcta: false },
      { texto: "are", correcta: true },
      { texto: "was", correcta: false },
      { texto: "were", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is in the present perfect tense?",
    alternativas: [
      { texto: "I have seen that movie.", correcta: true },
      { texto: "I am seeing that movie.", correcta: false },
      { texto: "I saw that movie.", correcta: false },
      { texto: "I will see that movie.", correcta: false },
    ],
  },
  {
    pregunta: "Choose the correct preposition: 'She lives _____ London.'",
    alternativas: [
      { texto: "at", correcta: false },
      { texto: "in", correcta: true },
      { texto: "on", correcta: false },
      { texto: "by", correcta: false },
    ],
  },
  {
    pregunta: "Which word is an adverb?",
    alternativas: [
      { texto: "slowly", correcta: true },
      { texto: "slow", correcta: false },
      { texto: "slower", correcta: false },
      { texto: "slowness", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'They _____ been to Paris twice.'",
    alternativas: [
      { texto: "have", correcta: true },
      { texto: "has", correcta: false },
      { texto: "was", correcta: false },
      { texto: "were", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is in the passive voice?",
    alternativas: [
      { texto: "The cake was baked by Mary.", correcta: true },
      { texto: "Mary baked the cake.", correcta: false },
      { texto: "Mary is baking the cake.", correcta: false },
      { texto: "The cake bakes.", correcta: false },
    ],
  },
  {
    pregunta:
      "Fill in the blank: 'I _____ my keys. I can't find them anywhere.'",
    alternativas: [
      { texto: "lost", correcta: false },
      { texto: "have lost", correcta: true },
      { texto: "lose", correcta: false },
      { texto: "losing", correcta: false },
    ],
  },
  {
    pregunta:
      "Choose the correct form: 'He _____ playing football when it started raining.'",
    alternativas: [
      { texto: "was", correcta: true },
      { texto: "is", correcta: false },
      { texto: "were", correcta: false },
      { texto: "are", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence uses the correct comparative form?",
    alternativas: [
      { texto: "She is more tall than her sister.", correcta: false },
      { texto: "She is taller than her sister.", correcta: true },
      { texto: "She is the taller than her sister.", correcta: false },
      { texto: "She is tall than her sister.", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'I haven't seen you _____ a long time.'",
    alternativas: [
      { texto: "for", correcta: true },
      { texto: "since", correcta: false },
      { texto: "by", correcta: false },
      { texto: "during", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is correct?",
    alternativas: [
      { texto: "I am going to the cinema yesterday.", correcta: false },
      { texto: "I went to the cinema yesterday.", correcta: true },
      { texto: "I go to the cinema yesterday.", correcta: false },
      { texto: "I will go to the cinema yesterday.", correcta: false },
    ],
  },
  {
    pregunta:
      "Choose the correct option: '_____ you like to have some coffee?'",
    alternativas: [
      { texto: "Do", correcta: false },
      { texto: "Would", correcta: true },
      { texto: "Are", correcta: false },
      { texto: "Does", correcta: false },
    ],
  },
  {
    pregunta:
      "Fill in the blank: 'The movie _____ already started when we arrived.'",
    alternativas: [
      { texto: "had", correcta: true },
      { texto: "have", correcta: false },
      { texto: "was", correcta: false },
      { texto: "is", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence uses the present continuous tense?",
    alternativas: [
      { texto: "They play football every Saturday.", correcta: false },
      { texto: "They are playing football now.", correcta: true },
      { texto: "They will play football tomorrow.", correcta: false },
      { texto: "They played football last week.", correcta: false },
    ],
  },
  {
    pregunta:
      "Fill in the blank: 'We haven't seen each other _____ last year.'",
    alternativas: [
      { texto: "since", correcta: true },
      { texto: "for", correcta: false },
      { texto: "during", correcta: false },
      { texto: "by", correcta: false },
    ],
  },
  {
    pregunta: "Which word is an uncountable noun?",
    alternativas: [
      { texto: "information", correcta: true },
      { texto: "book", correcta: false },
      { texto: "apple", correcta: false },
      { texto: "person", correcta: false },
    ],
  },
  {
    pregunta:
      "Choose the correct option: 'She _____ a lot of homework to do tonight.'",
    alternativas: [
      { texto: "has", correcta: true },
      { texto: "have", correcta: false },
      { texto: "having", correcta: false },
      { texto: "had", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'I would like _____ help you with that.'",
    alternativas: [
      { texto: "to", correcta: true },
      { texto: "for", correcta: false },
      { texto: "with", correcta: false },
      { texto: "at", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence is correct?",
    alternativas: [
      { texto: "There is too much apples in the basket.", correcta: false },
      { texto: "There are too many apples in the basket.", correcta: true },
      { texto: "There are too much apples in the basket.", correcta: false },
      { texto: "There is too many apples in the basket.", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: '_____ you ever been to Italy?'",
    alternativas: [
      { texto: "Have", correcta: true },
      { texto: "Has", correcta: false },
      { texto: "Did", correcta: false },
      { texto: "Do", correcta: false },
    ],
  },
  {
    pregunta: "Which sentence uses the superlative form?",
    alternativas: [
      { texto: "She is the tallest girl in the class.", correcta: true },
      {
        texto: "She is taller than all the girls in the class.",
        correcta: false,
      },
      {
        texto: "She is as tall as the other girls in the class.",
        correcta: false,
      },
      { texto: "She is more tall than the other girls.", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'We _____ going to the beach tomorrow.'",
    alternativas: [
      { texto: "are", correcta: true },
      { texto: "is", correcta: false },
      { texto: "was", correcta: false },
      { texto: "were", correcta: false },
    ],
  },
  {
    pregunta: "Which word is a synonym of 'happy'?",
    alternativas: [
      { texto: "sad", correcta: false },
      { texto: "joyful", correcta: true },
      { texto: "angry", correcta: false },
      { texto: "tired", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'He _____ finished his homework yet.'",
    alternativas: [
      { texto: "hasn't", correcta: true },
      { texto: "has", correcta: false },
      { texto: "hadn't", correcta: false },
      { texto: "haven't", correcta: false },
    ],
  },
  {
    pregunta: "Choose the correct form: 'They _____ play tennis on Saturdays.'",
    alternativas: [
      { texto: "usually", correcta: true },
      { texto: "is", correcta: false },
      { texto: "are", correcta: false },
      { texto: "was", correcta: false },
    ],
  },
  {
    pregunta: "Fill in the blank: 'It _____ raining when we left.'",
    alternativas: [
      { texto: "was", correcta: true },
      { texto: "is", correcta: false },
      { texto: "were", correcta: false },
      { texto: "are", correcta: false },
    ],
  },
  // Continúa con más preguntas similares hasta completar 100.
];

export default questions;
