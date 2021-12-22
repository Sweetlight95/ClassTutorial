let board = " ";
let size = 8;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
            board += " ";
        }
        else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);


// Example
function greet(who) {
console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");


// function chicken() {
// return egg();
// }
// function egg() {
// return chicken();
// }
// console.log(chicken() + " came first.");


function minus(a, b) {
if (b === undefined) return -a;
else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));


function power(base, exponent = 2) {
let result = 1;
for (let count = 0; count < exponent; count++) {
result *= base;
}
return result;
}
console.log(power(4));
console.log(power(2, 6));