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
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
//# sourceMappingURL=019_closures.js.map