var fullName : string = "Julio Melanda";
let paidAccount : boolean = true;
const versionNumber : number = 1.1;

fullName = "Marcos Castro"
paidAccount = false;
// versionNumber = 1.5 #wont work as it'a a constant

// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);

function printName(f, l){
  //let greeting: string = "Hi there, ";
  var greeting: string = "Hi there, ";
  console.log(greeting + f + " " + l);

  // let greeting: string = "Hey there, "; # cannot redefine a let variable
  var greeting: string = "Hi there, ";
  console.log(greeting + f + " " + l);
}

printName("Julio", "Melanda");
