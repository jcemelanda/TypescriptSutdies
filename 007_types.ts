// boolean
let paidAccount : boolean = true;

//number
let age: number = 33;
var rate: number = 2.5;

// string
var fullname : string = "Julio Melanda"

// array

var ages : number[] = [1, 2, 3];

// tuple
let player : [number, string, number];
player = [3, "Marcos", 42];

// Enum

enum Approval {Approved, Pending, Rejected};
let job : Approval = Approval.Pending;

// Any
var apiData : any[] = ["", 123, false];

// Void

function printOut(msg: string) : void{
  console.log(msg);
}
printOut("test");
