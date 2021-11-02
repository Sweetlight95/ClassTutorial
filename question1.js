let objArray = [
    {
        gender: 'male',
        firstName: "john",
        lastName: "switch",
    },
    {
        gender: "male",
        firstName: "demola",
        lastName: "femi",
    },
    {
        gender: "female",
        firstName: "tife",
        lastName: "harry",
    }
];
// let question1 = "using array method forEach, print out the firstName"
// let question2 = "using array method map, print out a  new key fullname"
//                 "per object and the value be the combination of"
//                 "the firstname and the lastName"
//                 "checkout array.prototype.map on MDN Docs"
// let question3 = "using array method filter, return an array containing, object with gender male"
// let question4 = "Do question3 above for object with gender female"
// question1
function xy(lets){
    console.log(lets.firstName)
}
objArray.forEach(xy);
 
// question2
function newMap (obj) {
    let seter = {fullName: obj.firstName + " " + obj.lastName};
    return seter;
}
console.log(objArray.map(newMap));
// or
let newFigure = objArray.map(person => ({fullName: person.firstName + " " + person.lastName}));
console.log(newFigure);

// question3
function newFig(fem) {
    let x = fem.gender === "male";
    return x;
    // or
    return fem.gender === "male";
}
console.log(objArray.filter(newFig));

// question4
function newFem(mem){
    return mem.gender === "female";
}
console.log(objArray.filter(newFem));