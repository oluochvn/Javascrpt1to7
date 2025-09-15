// javascript object

 function play(userChoice){
 	const choices = ["rock", "paper", "scissors"]
 	let computerPick = choices[Math.floor(Math.random()*choices.length)]

 	let result;

 	if (computerPick === userChoice){
 		console.log("draw")
 	}else if(
 		(userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")


 		)
 	
 }