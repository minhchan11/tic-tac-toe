//Global Variables
var box1 = 0;
var box2 = 0;
var box3 = 0;
var box4 = 0;

//Business Logic
function TicTac(boxOne, boxTwo, boxThree, boxFour) {
  this.boxOne = boxOne;
  this.boxTwo = boxTwo;
  this.boxThree = boxThree;
  this.boxFour = boxFour;
}


//User Logic
$(document).ready(function() {
  box1 = parseInt($("#topLeft").val());
  box2 = parseInt($("#topRight").val());
  box3 = parseInt($("#bottomLeft").val());
  box4 = parseInt($("#bottomRight").val());

  var player = new TicTac(box1,box2,box3,box4);
});
