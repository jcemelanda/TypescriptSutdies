// Function Declaration
function fullName(n1 : string, n2 : string) : string {
  return `${n1} ${n2}`;
}

// FUncition Expression
var fullName2 : (n1 : string, n2 : string) => string;

fullName2 = function(n1 : string, n2 : string) {
  return `${n1} ${n2}`;
}

var fullName3 : (n1 : string, n2 : string) => string = function(n1 : string, n2 : string) {
  return `${n1} ${n2}`;
}

console.log(fullName("Julio", "Melanda"));
console.log(fullName2("Julio", "Melanda"));
console.log(fullName3("Julio", "Melanda"));
