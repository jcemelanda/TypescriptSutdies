// boolean
var paidAccount = true;
//number
var age = 33;
var rate = 2.5;
// string
var fullname = "Julio Melanda";
// array
var ages = [1, 2, 3];
// tuple
var player;
player = [3, "Marcos", 42];
// Enum
var Approval;
(function (Approval) {
    Approval[Approval["Approved"] = 0] = "Approved";
    Approval[Approval["Pending"] = 1] = "Pending";
    Approval[Approval["Rejected"] = 2] = "Rejected";
})(Approval || (Approval = {}));
;
var job = Approval.Pending;
// Any
var apiData = ["", 123, false];
// Void
function printOut(msg) {
    console.log(msg);
}
printOut("test");
//# sourceMappingURL=007_types.js.map