let details = {
    sex: "female",
    firstName: "Segun",
    lastName: "Sandra",
    age: 40,
    getFullName:function(anotherFunction) {
        console.log(anotherFunction(this))

    }
}

details.getFullName ( /*function(obj){}*/(obj) =>  {
    let fullName = obj.firstName + " " + obj.lastName + " " + obj.age
    if(obj.sex === "male"){
        fullName = "Mr" + " " + fullName
    } else {
        fullName = "Mrs" + " " + fullName
    } return fullName
}
)