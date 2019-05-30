var names : string[] = ["Julio", "Cris", "Miguel", "Carlos"];
var counter : number = 0;

(function () {
  for (let name in names){
    counter ++;
  }
})();

console.log(counter);
