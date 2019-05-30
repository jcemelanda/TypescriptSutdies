// Functions access outer scope

// function nameFunction(name : string) : void {
//   var n : string = name;
//
//   function printName(){
//     console.log(n);
//   }
//   printName();
// }

// nameFunction("Jack");

// Functions access outer scope after return
//
// function nameFunction(name : string){
//   var n : string = name;
//
//   return function printName(){
//     console.log(n);
//   }
// }
//
// var x = nameFunction("Jack");
// x();

function lineup() {
  var nowBatting : number = 1;

  return {
    nextBatter() { nowBatting ++ },
    currentBatter() { return nowBatting }
  }
}

let batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
