
//Business Logic
function TicTac(boxOne, boxTwo, boxThree, boxFour) {
  this.boxOne = boxOne;
  this.boxTwo = boxTwo;
  this.boxThree = boxThree;
  this.boxFour = boxFour;
}

TicTac.prototype.check = function () {
  if (this.boxOne === 1 && this.boxTwo === 1 || this.boxOne === 1 && this.boxThree === 1 || this.boxOne === 1 && this.boxFour === 1 || this.boxTwo === 1 && this.boxThree === 1 || this.boxTwo === 1 && this.boxFour === 1  ) {
    alert("you win!");
  } else if (this.boxOne === 2 && this.boxTwo === 2 || this.boxOne === 2 && this.boxThree === 2 || this.boxOne === 2 && this.boxFour === 2 || this.boxTwo === 2 && this.boxThree === 2 || this.boxTwo === 2 && this.boxFour === 2  ) {
    alert("you also win!");
  };

};


//User Logic
$(document).ready(function() {
  $(".table").change(function() {
    box1 = parseInt($("#topLeft").val());
    box2 = parseInt($("#topRight").val());
    box3 = parseInt($("#bottomLeft").val());
    box4 = parseInt($("#bottomRight").val());
    console.log(box1);
    console.log(box2);
    console.log(box3);
    console.log(box4);
    var player = new TicTac(box1,box2,box3,box4);
    player.check();
  })
});
