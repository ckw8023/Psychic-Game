var charlist = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
				'o','p','q','r','s','t','u','v','w','x','y','z'];
function guess(){
	var index = Math.floor(Math.random()*26);
	return charlist[index];
}
var numofChance = 9;
var wintime = 0;
var losstime = 0;
var computerGuess = guess();
document.onkeyup = function(event){
	console.log('computerGuess is ' + computerGuess);
	var userinput = event.key;
	console.log('userinput is ' + userinput);
	var win = document.getElementById("wins");
	var loss = document.getElementById("loss");
	var chance = document.getElementById("chance");
	var guessed = document.getElementById("user");
	
	if(userinput != computerGuess){
		numofChance--;
		if(numofChance === 0){
			losstime++;
			numofChance = 9;
			wintime = 0;
			win.innerHTML = "Wins: " + wintime;
			loss.innerHTML = "Losses: " + losstime;
			chance.innerHTML = "Guesses Left: 9";
			guessed.innerHTML = "Your Guesses so far: ";
			computerGuess = guess();
			return;
		}
		chance.innerHTML = "Guesses Left: " + numofChance;
		guessed.innerHTML += userinput + ", ";
	}
	else if(userinput === computerGuess){
		wintime++;
		win.innerHTML = "Wins: " + wintime;
		computerGuess = guess();
		guessed.innerHTML = "Your Guesses so far: ";
	}
}