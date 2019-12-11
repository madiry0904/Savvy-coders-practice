//TODO: write practice functions for the app
function curveScores(originalScore, curveAmount) {
  return originalScore + curveAmount;
}

function curveScoresForAllStudents(students, curveAmt) {
  return students.map(({score} => (score += curveAmt ))
}
