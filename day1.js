//console.log("hello")

let x = 232.3;

/*x =Math.round(x) rounds to the nearest integer
console.log(x)
x = Math.ceil(x)  always rounds to the next integer
console.log(x)

x = Math.floor(x) //alwats round below. removes the decimal.
console.log(x) 
x = Math.trunc(x)
console.log(x)*/
//console.log(Math.floor(Math.random()*100)+1)

/*
x = Math.floor(Math.random()*70)+1;
console.log(x)

if (x>=50){
	console.log("X is greater than or equals to 50")
}else{
	console.log("below 50")
}*/

/*  let y = "hello";

if(typeof y== "number"){
	console.log("y is an number")
}else if(typeof y == "string"){
	console.log("y is an string")
}

console.log("$" +(2099 +170)/100)
console.log("$"+ (2017+ 799)/100)
console.log("i'm learning  Javascript")

 function greet(name){
 	console.log("hello" + " " + name);
 }
greet("vincent");

function addnum(a,b){
	return a + b;
}
console.log(addnum(2,3));


function multiply(a,b){
	return a * b;
}
console.log(multiply(247843,363));

function devide(a,b){
	return a / b;
}
console.log(devide(30,3));
*/

	function calculateTax(amount,taxPercent){
		return amount * taxPercent;
	}
	console.log(calculateTax(20000,0.2))
