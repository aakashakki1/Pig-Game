/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,activePlayer,roundScore,gamePlaying;
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
	var dice = Math.floor(Math.random()*6)+1;
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';
	if (dice !==1){
		roundScore += dice;
		document.querySelector('#current-'+ activePlayer).textContent = roundScore;
	}
	else{
		nextPlayer();
	}
});
document.querySelector('.btn-hold').addEventListener('click',function() {
	// update the score
	score[activePlayer] += roundScore;
	// display the current players new score
	document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
	// check if the player won
	if (score[activePlayer]>=20){
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	}
	else{
		nextPlayer();
	}
});
function nextPlayer() {
	roundScore = 0;
	activePlayer = activePlayer^1;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click',init);
function init() {
	score = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent   = '0';
    document.getElementById('score-1').textContent   = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
}