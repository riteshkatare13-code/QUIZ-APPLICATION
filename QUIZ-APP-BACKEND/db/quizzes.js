const { v4: uuid } = require("uuid");

const quizzes = [
  {
    id: uuid(),
    category: "Marvel",
    image: "https://wallpapercave.com/wp/wp6566659.jpg",
    type: "Marvel STACK",
    description: "Marvel quiz competition",
    quiz: [
      {
        id: uuid(),
        question: "What is the name of assistant of Tony Stark ? ",
        options: [
          { id: uuid(), option: "Natasha Romanoff", isCorrect: false },
          { id: uuid(), option: "Charlie Vegan", isCorrect: false },
          { id: uuid(), option: "Pepper", isCorrect: true },
          { id: uuid(), option: "Steve Rogers", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Which Marvel Character Died in Avengers Endgame ?",
        options: [
          { id: uuid(), option: "Captain America", isCorrect: false },
          { id: uuid(), option: "Hulk", isCorrect: false },
          { id: uuid(), option: "Black Panther", isCorrect: false },
          { id: uuid(), option: "Iron Man", isCorrect: true },
        ],
      },
      {
        id: uuid(),
        question: "Which Marvel Character knowingly named as Black Widow ?",
        options: [
          { id: uuid(), option: "Steve Rogers", isCorrect: false },
          { id: uuid(), option: "Natasha Romanoff", isCorrect: true },
          { id: uuid(), option: "Dr. Banner", isCorrect: false },
          { id: uuid(), option: "Peter Parker", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Black Panther is set in which fictional country ?",
        options: [
          { id: uuid(), option: "Wakanda", isCorrect: true },
          { id: uuid(), option: "Jakanda", isCorrect: false },
          { id: uuid(), option: "Takanda", isCorrect: false },
          { id: uuid(), option: "Kikanda", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: uuid(),
    category: "Geography",
    image: "https://images.pexels.com/photos/33415524/pexels-photo-33415524.jpeg",
    type: "Geography STACK",
    description: "Geography quiz competition",
    quiz: [
      {
        id: uuid(),
        question: "India is located in which continent ? ",
        options: [
          { id: uuid(), option: "Asia", isCorrect: true },
          { id: uuid(), option: "Europe", isCorrect: false },
          { id: uuid(), option: "Africa", isCorrect: false },
          { id: uuid(), option: "South America", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Which is longest river in the world?",
        options: [
          { id: uuid(), option: "Amazon River", isCorrect: false },
          { id: uuid(), option: "Black Sea", isCorrect: false },
          { id: uuid(), option: "Nile River", isCorrect: true },
          { id: uuid(), option: "Red Sea", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Which of following country is land locked?",
        options: [
          { id: uuid(), option: "India", isCorrect: false },
          { id: uuid(), option: "Switzerland", isCorrect: true },
          { id: uuid(), option: "Sri lanka", isCorrect: false },
          { id: uuid(), option: "Brazil", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Which country capital is Tehran ?",
        options: [
          { id: uuid(), option: "Saudi Arab", isCorrect: false },
          { id: uuid(), option: "Iran", isCorrect: true },
          { id: uuid(), option: "Kuwait", isCorrect: false },
          { id: uuid(), option: "Qatar", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: uuid(),
    category: "History",
    image: "https://www.ivyscholars.com/wp-content/uploads/2025/09/Where-to-Publish-History-Research-1024x683.jpg",
    type: "History STACK",
    description: "Travel through time.",
    quiz: [
      {
        id: uuid(),
        question: "Who was the first emperor of the Roman Empire?",
        options: [
          { id: uuid(), option: "Julius Caesar", isCorrect: false },
          { id: uuid(), option: "Nero", isCorrect: false },
          { id: uuid(), option: "Augustus", isCorrect: true },
          { id: uuid(), option: "Marcus Aurelius", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "In which year did World War II officially end?",
        options: [
          { id: uuid(), option: "1918", isCorrect: false },
          { id: uuid(), option: "1945", isCorrect: true },
          { id: uuid(), option: "1939", isCorrect: false },
          { id: uuid(), option: "1963", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Which ancient civilization built the Great Pyramid of Giza?",
        options: [
          { id: uuid(), option: "The Romans", isCorrect: false },
          { id: uuid(), option: "The Greeks", isCorrect: false },
          { id: uuid(), option: "The Egyptians", isCorrect: true },
          { id: uuid(), option: "The Mayans", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Who was the legendary queen of ancient Egypt famous for her relationship with Mark Antony?",
        options: [
          { id: uuid(), option: "Nefertiti", isCorrect: false },
          { id: uuid(), option: "Cleopatra", isCorrect: true },
          { id: uuid(), option: "Hatshepsut", isCorrect: false },
          { id: uuid(), option: "Isis", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: uuid(),
    category: "Space",
    image: "https://plus.unsplash.com/premium_vector-1721580275786-984c59271435?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    type: "Space STACK",
    description: "Journey across the cosmos .",
    quiz: [
      {
        id: uuid(),
        question: "Which planet in our solar system is famously nicknamed the Red Planet?",
        options: [
          { id: uuid(), option: "Venus", isCorrect: false },
          { id: uuid(), option: "Jupiter", isCorrect: false },
          { id: uuid(), option: "Mars", isCorrect: true },
          { id: uuid(), option: "Saturn", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "What is the largest planet in our solar system?",
        options: [
          { id: uuid(), option: "Earth", isCorrect: false },
          { id: uuid(), option: "Saturn", isCorrect: false },
          { id: uuid(), option: "Jupiter", isCorrect: true },
          { id: uuid(), option: "Neptune", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "What type of celestial object possesses a gravitational pull so strong that light cannot escape?",
        options: [
          { id: uuid(), option: "Supernova", isCorrect: false },
          { id: uuid(), option: "Black Hole", isCorrect: true },
          { id: uuid(), option: "White Dwarf", isCorrect: false },
          { id: uuid(), option: "Asteroid", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "What is the name of our home spiral galaxy?",
        options: [
          { id: uuid(), option: "Andromeda", isCorrect: false },
          { id: uuid(), option: "The Milky Way", isCorrect: true },
          { id: uuid(), option: "Sombrero Galaxy", isCorrect: false },
          { id: uuid(), option: "Triangulum", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: uuid(),
    category: "Sports",
    image: "https://images.unsplash.com/vector-1780710771731-c275b7c5b8be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    type: "Sports STACK",
    description: "Test your Sports memory .",
    quiz: [
      {
        id: uuid(),
        question: "How many standard players from one team are on the pitch during a soccer match?",
        options: [
          { id: uuid(), option: "9", isCorrect: false },
          { id: uuid(), option: "10", isCorrect: false },
          { id: uuid(), option: "11", isCorrect: true },
          { id: uuid(), option: "12", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "How often are the Olympic Games celebrated globally?",
        options: [
          { id: uuid(), option: "Every 2 years", isCorrect: false },
          { id: uuid(), option: "Every 4 years", isCorrect: true },
          { id: uuid(), option: "Every 5 years", isCorrect: false },
          { id: uuid(), option: "Annually", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Which country won the historic 2022 FIFA Men's World Cup trophy?",
        options: [
          { id: uuid(), option: "France", isCorrect: false },
          { id: uuid(), option: "Brazil", isCorrect: false },
          { id: uuid(), option: "Argentina", isCorrect: true },
          { id: uuid(), option: "Croatia", isCorrect: false },
        ],
      },
      {
        id: uuid(),
        question: "Which sport uses the terms 'birdie', 'eagle', and 'bogey'?",
        options: [
          { id: uuid(), option: "Tennis", isCorrect: false },
          { id: uuid(), option: "Golf", isCorrect: true },
          { id: uuid(), option: "Cricket", isCorrect: false },
          { id: uuid(), option: "Baseball", isCorrect: false },
        ],
      },
    ],
  },
];

module.exports = quizzes;
