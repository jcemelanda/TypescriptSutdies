var x : number = 0;

while (x < 10) {
  console.log(x);
  x++;
}

let players : number[] = [15, 42,33, 24,15, 6]

for (let p in players) {
  console.log(p);
}

for (let p of players) {
  console.log(p);
}
