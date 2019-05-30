var fullName = (first, last) => {
  return `${first} ${last}`;
}

console.log(fullName("julio", "melanda"));

var gradeGenerator = (grade: number) : string => {
  if (grade < 60){
    return "F";
  }
  if (grade < 70) {
    return "D";
  }
  if (grade < 80) {
    return "C";
  }
  if (grade < 90) {
    return "B";
  }
  return "A";
}

console.log(gradeGenerator(45));
console.log(gradeGenerator(100));
console.log(gradeGenerator(89));
