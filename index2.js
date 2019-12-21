const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomTestScores = Array.from({ length: 50 }, () =>
  getRandomIntInclusive(50, 100)
);
console.log(randomTestScores);
