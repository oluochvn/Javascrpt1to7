function toggleTheme(){
	(document.body.style.background === 'white' || document.body.style.background === '')? (document.body.style.background = 'blue',
		document.body.style.color = 'yellow'

		) : (document.body.style.background = 'white', document.body.style.color = 'black' ) 
}

let person = 29;
let id = false
   function checkVoter(){
 (person >= 18) ?
 		(id ? console.log("YOU CAN VOTE") :
 			console.log("aquire id first")

 			): console.log("below age limit")

 }
 checkVoter()




	let marks = 67;
	let fees = false;

	function checkStudent(){
		(marks >50 ) ?
		(fees ? console.log(`scored ${marks} passed`) :
			console.log(`scored ${marks} fees still pending`)

			):
		
		console.log('FAILED')
	}
	checkStudent()
 

  function checkStudent(marks,feesAmount){
  	(feesAmount > 0 || isNaN(feesAmount))? console.log("Marks witheld clear fees first")  :
  	(marks>= 80) ? console.log("Grade A")
  		:(marks >= 70) ? console.log("Grade B") 
  			: (marks >= 50) ? console.log("GRADE C") 
  				: (marks >= 40) ? console.log("GRADE D") 
  					:console.log("failed")

  }

  checkStudent(83,0)
 


   function checkShopping(member, cart){
   	(cart === 0) ? console.log("add items") :
   	(member) ? console.log(`Total $  ${cart * 0.9}`) :
   	console.log(`Total $ ${cart} `)

   }
   checkShopping(false,1241500)
    checkShopping(true,1341500)


  