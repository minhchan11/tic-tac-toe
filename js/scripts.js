
//Business Logic
function TicTac(Box1, Box2, Box3, Box4, Box5, Box6, Box7, Box8, Box9) {
  this.Box1 = Box1;
  this.Box2 = Box2;
  this.Box3 = Box3;
  this.Box4 = Box4;
  this.Box5 = Box5;
  this.Box6 = Box6;
  this.Box7 = Box7;
  this.Box8 = Box8;
  this.Box9 = Box9;

}

TicTac.prototype.check = function () {
  if (this.Box1 === 1 && this.Box2 === 1 || this.Box1 === 1 && this.Box3 === 1 || this.Box1 === 1 && this.Box4 === 1 || this.Box2 === 1 && this.Box3 === 1 || this.Box2 === 1 && this.Box4 === 1  ) {
    alert("you win!");
  } else if (this.Box1 === 2 && this.Box2 === 2 || this.Box1 === 2 && this.Box3 === 2 || this.Box1 === 2 && this.Box4 === 2 || this.Box2 === 2 && this.Box3 === 2 || this.Box2 === 2 && this.Box4 === 2  ) {
    alert("you also win!");
  };

};


//User Logic
$(document).ready(function() {
  $(".table").change(function() {
    box1 = parseInt($("#topLeft").val());
    box2 = parseInt($("#topMiddle").val());
    box3 = parseInt($("#topRight").val());
    box4 = parseInt($("#centerLeft").val());
    box5 = parseInt($("#centerMiddle").val());
    box6 = parseInt($("#centerRight").val());
    box7 = parseInt($("#bottomLeft").val());
    box8 = parseInt($("#bottomMiddle").val());
    box9 = parseInt($("#bottomRight").val());


    console.log(box1);
    console.log(box2);
    console.log(box3);
    console.log(box4);
    var player = new TicTac(box1,box2,box3,box4,box5,box6,box7,box8,box9);
    player.check();
  })
});
