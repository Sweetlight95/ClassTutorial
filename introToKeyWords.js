
// INTRODUCTION TO THIS KEYWORDS 
let cohort8Native = {
    fullName: "Adesuwa Omotoyinbo",
    gender: "female",
    height: "Tall",
    hobby: "Fashion",
    getFullName: function() {
        console.log(this)
        return this.fullName
    }
}
// console.log(cohort8Native.getFullName())

// INTRODUCTION TO BIND KEYWORD   
let returnFullName = cohort8Native.getFullName//.bind(cohort8Native)
console.log(returnFullName())

// string

