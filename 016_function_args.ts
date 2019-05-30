function printAddress(street: string, street2?: string, state = "Yahoo") {
  console.log(street);
  if (street2) {
    console.log(street2);
  }
  console.log(state);
}

printAddress("teste", "chato");
printAddress("teste", "chato", "DK");
printAddress("teste2");

function lineupCards(team: string, ...players: string[]) {
  console.log(`Team: ${team}`);
  for (let p of players) {
    console.log(p);
  }
}

lineupCards("Lyngby", "Hans", "Rasmus", "Christian");
