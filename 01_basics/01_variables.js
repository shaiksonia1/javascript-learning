const accountId = 12345. 

let accountEmail = "sonia@gmail,com"


var accountPassword = "123456"
accountCity ="jaipur"

//accountId = 23 //not allowed

accountEmail="soniaa123@gmail.com"
accountPassword="5656565"
accountCity="hyderabad"

console.log(accountId);


console.table([accountId,accountCity,accountPassword,accountEmail])


/*
The const declaration creates block-scoped constants, much like variables declared using the let keyword. 
The value of a constant can't be changed through reassignment 
(i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration)

prefer not to use VAR
because of issue in block scope and functional scope


The let declaration declares a block-scoped local variable, 
optionally initializing it to a value.

*/