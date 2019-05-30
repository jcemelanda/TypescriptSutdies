function printAddress(street, street2, state) {
    if (state === void 0) { state = "Yahoo"; }
    console.log(street);
    if (street2) {
        console.log(street2);
    }
    console.log(state);
}
printAddress("teste", "chato");
printAddress("teste", "chato", "DK");
printAddress("teste2");
function lineupCards(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log("Team: " + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var p = players_1[_a];
        console.log(p);
    }
}
lineupCards("Lyngby", "Hans", "Rasmus", "Christian");
//# sourceMappingURL=016_function_args.js.map