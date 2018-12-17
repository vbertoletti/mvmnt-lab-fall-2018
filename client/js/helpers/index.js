export const getAverageOfUserScores = arr => {
  const sum = arr.reduce(function(a, b) {
    return a + b;
  });
  const avg = sum / arr.length;
  return Math.round(avg * 10) / 10;
};
