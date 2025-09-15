/*console.log(false && false)
console.log(true && true)
console.log(true && false)*/

  /*console.log(true || false)
  console.log(false || true)*/
	const choice = ["rock", "paper","scissors"];
	let computerChoice;
	let userChoice;
	let result;

	function play(userChoice){
		computerChoice = choice[Math.floor(Math.random()*choice.length)]
		if(computerChoice === userChoice){
			console.log("draw")

		}else if(
			(computerChoice === "rock" && userChoice === "scissors")||
			(computerChoice === "scissors" && userChoice === "paper")||
			(computerChoice === "paper" && userChoice === "rock")

			){
				console.log(`computer choose ${computerChoice} user choose ${userChoice} computerwins`)

		}else{
			console.log(`user choose ${userChoice} computerChoice was ${computerChoice} USER WINS`)
		}

	}
	play("paper");