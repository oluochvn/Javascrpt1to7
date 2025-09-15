/*console.log(false && false)
console.log(true && true)
console.log(true && false)*/

  /*console.log(true || false)
  console.log(false || true)*/
	const choice = ["rock", "paper","scissors"];
	let computerChoice;
	let userChoice;

	 let score = {
	 		win:0,
	 		loss:0,
	 		draw:0
	 }
	

	function play(userChoice){
		computerChoice = choice[Math.floor(Math.random()*choice.length)]
		let result = "";

		if(computerChoice === userChoice){
			console.log("draw")
			result = "draw"

		}else if(
			(computerChoice === "rock" && userChoice === "scissors")||
			(computerChoice === "scissors" && userChoice === "paper")||
			(computerChoice === "paper" && userChoice === "rock")

			){
			result = "loss"
				console.log(`computer choose ${computerChoice} user choose ${userChoice} computerwins`)

		}else{
			console.log(`user choose ${userChoice} computerChoice was ${computerChoice} USER WINS`)
			result= "win"
		}
		if(result === "win"){
      
      score.win += 1;
      
	}else if(result === "loss"){
			score.loss+= 1;
	}else{
		score.draw+= 1;
	}

}
	play("rock")

		
  console.log(score)
