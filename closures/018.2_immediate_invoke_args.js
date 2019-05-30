// Function Expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("Julio", "Melanda"));
// Immediately Invoked
(function (first, last) {
    console.log(first + " " + last);
})("Julio", "Melanda");
//# sourceMappingURL=018.2_immediate_invoke_args.js.map