const { quizSelection } = require("../quiz");

let questions = [
  { question: "1 + 1", answer: "2" },
  { question: "2 + 2", answer: "4" },
  { question: "3 + 3", answer: "6" },
  { question: "4 + 4", answer: "8" },
  { question: "5 + 5", answer: "10" },
  { question: "6 - 3", answer: "3" },
  { question: "7 - 2", answer: "5" },
  { question: "8 - 5", answer: "3" },
  { question: "9 - 4", answer: "5" },
  { question: "10 - 6", answer: "4" },
  { question: "2 x 2", answer: "4" },
  { question: "3 x 3", answer: "9" },
  { question: "4 x 4", answer: "16" },
  { question: "5 x 2", answer: "10" },
  { question: "6 x 3", answer: "18" },
  { question: "10 / 2", answer: "5" },
  { question: "8 / 4", answer: "2" },
  { question: "9 / 3", answer: "3" },
  { question: "6 / 2", answer: "3" },
  { question: "15 / 3", answer: "5" },
  { question: "11 + 11", answer: "22" },
  { question: "12 + 12", answer: "24" },
  { question: "13 + 13", answer: "26" },
  { question: "14 + 14", answer: "28" },
  { question: "15 + 15", answer: "30" },
  { question: "16 - 8", answer: "8" },
  { question: "17 - 9", answer: "8" },
  { question: "18 - 10", answer: "8" },
  { question: "19 - 11", answer: "8" },
  { question: "20 - 12", answer: "8" },
  { question: "3 x 5", answer: "15" },
  { question: "4 x 6", answer: "24" },
  { question: "5 x 7", answer: "35" },
  { question: "6 x 8", answer: "48" },
  { question: "7 x 9", answer: "63" },
  { question: "20 / 4", answer: "5" },
  { question: "21 / 3", answer: "7" },
  { question: "24 / 6", answer: "4" },
  { question: "25 / 5", answer: "5" },
  { question: "30 / 6", answer: "5" },
];

console.log(quizSelection(questions));
