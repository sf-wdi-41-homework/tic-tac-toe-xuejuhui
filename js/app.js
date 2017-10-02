$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

var pl1 = [];
var pl2 = [];
var currentTurn = 0;
$('.box').one('click',function px(){
    if(currentTurn == 0){
for (i = 0; i < 1; i++){
    $(this).append('<img id="theImg" img src="./1.png">');
    pl1.push($(this).attr('id'));
    currentTurn = 1;
}}else{
    $(this).append('<img id="theImg" img src="./2.png">');
    pl2.push($(this).attr('id'));
    currentTurn = 0;

}
checkWin()})
var winConditions = [['1','2','3'],
['4','5','6'],
['7','8','9'],
['1','4','7'],
['2','5','8'],
['3','6','9'],
['1','5','9'],
['3','5','7']
]


function checkWin(){
  if(pl1.length>=3){
  for (a = 0; a < winConditions.length; a++){
if(winConditions[a].every(elem => pl1.indexOf(elem)>-1)){
  alert("player 1 win");
  break;
}else if(winConditions[a].every(elem => pl2.indexOf(elem)>-1)) {
  alert("player 2 win");
  break;
}else if ((pl1.length + pl2 .length)===9){
  alert("it is a draw");
  break;
}
  }
}}
})
