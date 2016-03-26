function do_game(array){
	array.sort();
	return Math.floor(Math.random() * arr.length - 1);
};
function check_guess(){
	var bool =(arr.some(function(item, i, arr){
		return choise == item;
	}));
	if(bool){		
		choise > arr[number]
		 ? alert('Sorry, your guess is not correct!\n You choise is alphabetically higher then mine\nTry again'):
		alert('Sorry, your guess is not correct!\nHint: You choise is alphabetically lower then mine\nTry again');
		return false;
	}
		alert("Sorry I don't recognize your color");
		return false;
}
var	arr = ['blue', 'green', 'violet', 'black', 'red', 'yellow', 'lime'],	
	val = false,
	counter = 0;
	

var number = do_game(arr);


alert('The right answer is ' + arr[number]);

alert("I'm thinking of  this" + arr.length + " colors\n\n\n " + arr);
do{
	var choise = (prompt('Input color'));
	switch(choise){
		case arr[number]:
		++counter;
		alert("Congratulations! You've guessed the right color in " + counter + " attempts");
		var myBody = document.getElementsByTagName("body")[0];
		myBody.style.background = choise;
		val = true;
		break;

		case "":
		alert('You do have to input something');
		++counter;		
		break;

		default:
			++counter;
			check_guess();
			
	}
}while(!val);

