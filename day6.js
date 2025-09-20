	for (let i = 1; i <= 10; i++){
			console.log(i)
		}
		let fruits = ['apple', 'banana', 'mango'];

		 for(let i = 0;  i < fruits.length; i++){
		 	console.log(`i like ${fruits[i]}`)
		 }

		 let result = ['win','lose','draw']

		 	for(i = 0;i< result.length; i++){
		 		console.log(result[i])
		 	}



		 		let cart = [120, 60, 30, 90]; // item prices
				let total = 0;

				for(let i = 0; i < cart.length; i++){
					total += cart[i];

				}
				console.log(`your total is ${total}`)



				let marks = [20,33,44,55,61]
				let tMarks = 0;
				let average;

				for(let i = 0;i < marks.length; i++){
					tMarks += marks[i]
					average = tMarks / marks.length
				}
				console.log(`your  total marks is ${tMarks} and your average is ${average}`)


				let ages = [12, 18, 25, 40, 15, 30,4,11,74,9,7,66];
				let adults = [];
				let children = [];
				//There are 4 adults in the group

				for(let i = 0; i< ages.length ; i++){
					(ages[i] >= 18) ? 
					adults.push(ages[i]): children.push(ages[i]);
				}
				console.log(adults)
				console.log(children)





    let x = 1;

    while(x < 10){
    	console.log(x)
    	x++ //number 1 to ten
    }
   //even number from 1 to 10

    let x = 2;

    while(x<=20){
    	(x % 2 === 0)? 
    	console.log(x)
    	
    	:null;
    	x++;

    }
 
    let y = 50;
    while(y > 1){
    	(y % 5 === 0) ?
    	console.log(y)
    	:null;
    	y--
    }
  

	let a = 100;
	while(a>1){
		(a % 2 === 0) ?
		null
		: console.log(a);
		a--
	}
	// we reduce until a is not greater that one
	

let students = ["Alice", "Bob", "Charlie"];
let subjects = ["Math", "Science", "History"];


   for(let i = 0; i <students.length; i++){
   	for(let j = 0; j <subjects.length; j++){
   		console.log(`${students[i]} is taking ${subjects[j]} `)
   	}
   }


			for(let i = 1; i <= 4; i++){
				let row = '';
					for(let j = 1; j <= i; j++){
						row += '*'
					}
					console.log(row)
			}



			let number = 10;

			while(number >= 1){
				(number % 2 === 0) ?
				console.log(number)
					
					: null;
						number--
			}


			let x = 20;

			while(x >= 1){
				(x % 2 === 0) ? 
				console.log(`${x} even`)
				: console.log(`${x} odd`)
				x--
			}

			
					let cupsOfSugarNeeded = 2
let cupsAdded = 0;
do{
  cupsAdded++
  console.log(cupsAdded + ' cup was added') 
}while(cupsAdded > cupsOfSugarNeeded){
  console.log(cupsAdded)

}
