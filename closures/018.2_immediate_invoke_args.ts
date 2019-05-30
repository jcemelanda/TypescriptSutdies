// Function Expression

var fullName : (first : string, last: string) => string;

fullName = function(first : string, last: string) {
  return first + " " + last;
}

console.log(fullName("Julio", "Melanda"));

// Immediately Invoked
(function(first : string, last : string){
  console.log(first + " " + last);
})("Julio", "Melanda");
