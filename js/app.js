$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
// Declaring player1 and player 2
var pl1 = [];
var pl2 = [];
var dogWin = 0;
var catWin = 0;
// Coding turns
var currentTurn = 0;
$('.box').one('click',function px(){

if (checkWin()){
	console.log();
}
    else if(currentTurn == 0){

    $(this).append('<img id="theImg" img src="./1.png">');
    pl1.push($(this).attr('id'));
    checkWin();
    currentTurn = 1;
}
else{
    $(this).append('<img id="theImg" img src="./2.png">');
    pl2.push($(this).attr('id'));
    checkWin();
    currentTurn = 0;
}

})



// win condition
var winConditions = [
['1','2','3'],
['4','5','6'],
['7','8','9'],
['1','4','7'],
['2','5','8'],
['3','6','9'],
['1','5','9'],
['3','5','7']
]
// reset function unfinish
function reset(){
	pl1.remove('id');
	pl2.remove('id');
	pl1.remove('')

}

// comparing he player's array to the wincondition arrary
function checkWin(){
  if(pl1.length>=3){
  for (a = 0; a < winConditions.length; a++){
if(winConditions[a].every(elem => pl1.indexOf(elem)>-1)){
	 alert("Dog win");
  dogWin++;
	return true;
 
}else if(winConditions[a].every(elem => pl2.indexOf(elem)>-1)) {
	alert("Cat win");
  catWin++;
	return true;
  
}else if ((pl1.length + pl2 .length)===9){
	alert('Round 2');
	return false;
}

  } 
}}
 

})
