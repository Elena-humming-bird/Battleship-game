var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var shoot = [];
var isSunk = false;

while(isSunk == false){
	guess = prompt("Ready,aim,fire! (enter a number 0-6):");
	if(guess < 0 || guess > 6){
		alert("Please enter a valid cell number 0-6!");
	}else{
		if(shoot.includes(guess)){
			alert("You have already guessed that number");
		}else{
			shoot.push(guess);
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
				alert("HIT!");
				hits = hits + 1;
				if(hits == 3){
					isSunk = true;
					alert("You sank my battleship");
			   }	
		}else{
			alert("MISS");
			}
		}
	}	
}
var stats = "You took " + "guesses to sink the battleship," + "which means your shooting accuracy was " + (3/guesses);
alert(stats);

