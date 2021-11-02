// for (var i = 0; i < 10; i++) {
//     let j = i;
//     console.log(i * j)
// }
// console.log(i)
// console.log(j)

// var native = {
//     name: "",
//     age: "",
//     gender: "",
//     id: "",
//     height: "",
//     hobby: ""
// }
// console.log(native)

// var native = new Object()
// console.log(native)

// let  othernative = new Object()

function createObject(name, age, gender, height, hobby) {
        this.name = name
        this.age = age
        this.gender = gender
        this.height = height
        this.hobby = hobby
}
let newNative = new createObject("Timi", 100, "male", "6.7ft", "hardworking");
console.log(newNative)

 // INTERVAl
// we have rwo methods of retrieving data from an object 
// 1) dot notation 
// let age = newNative.age

// let ageb = newNative["age"]
// console.log(age, ageb)

// update data in object 
// newNative.age = 13;
// let newAge = newNative["age"]
// console.log(newAge)

// deleting data in object 

// delete newNative.age;
// console.log(newNative)

// for(let n in newNative) {
//     console.log(n)
// }
// console.log(Object.keys(newNative));
// console.log(Object.values(newNative));
console.log(Object.entries(newNative));
