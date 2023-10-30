// Quiz Selection Algorithm
// Take an array of question objects, then split them into 10 question "chunks"
// Randomize all the questions inside of each chunk
// Returns an array of arrays of question objects

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function quizSelection(questions) {
  if (questions.length <= 10) {
    return [shuffleArray(questions)];
  }

  const chunks = [];
  for (let i = 0; i < questions.length; i += 10) {
    chunks.push(shuffleArray(questions.slice(i, i + 10)));
  }
  return chunks;
}

module.exports = { quizSelection };
