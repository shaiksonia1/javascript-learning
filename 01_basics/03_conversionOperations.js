let score = 33

console.log(typeof score);
console.log(typeof(score));
//output: 
//number
//number

let score1 ="33"

let valueIntNumber = Number(score1)
console.log(typeof valueIntNumber);
console.log( valueIntNumber);
//output:
//number
//33

let score2= "33abc"

let valueIntNumber1 = Number(score2)
console.log(typeof valueIntNumber1);
console.log(valueIntNumber1)
//ouput:
//number
//NaN


let score3= null
console.log(typeof score3)
let valueIntNumber2 = Number(score3)
console.log(typeof valueIntNumber2);
console.log(valueIntNumber2)
//output:
//object
//number
//0


let score4 = true 
console.log(typeof score4)
let valueIntNumber3=Number(score4)
console.log(typeof valueIntNumber3);
console.log(valueIntNumber3)
//output:
//boolean
//number
//1


let score5 = undefined 
console.log(typeof score5)
let valueIntNumber4=Number(score5)
console.log(typeof valueIntNumber4);
console.log(valueIntNumber4)
//output:
//undefined
//number
//NaN


// /* 
// "33" => 33
// "33abc" => NaN
// true =>1; false =>0
// */

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedInn = ""
let booleanIsLoggedInn = Boolean(isLoggedInn)
console.log(booleanIsLoggedInn);
// /* 
// 1 => true ; 0=>false
// "" =>false
// "sonia" =>true
// */