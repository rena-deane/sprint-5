//Looping a triangle

var abc = "";
for (i=1; i<8;  i++){
    abc += "#";
  console.log(abc);
}

//FizzBuzz

var fizzBuzz = 0;
for (i=1; i<=100; i++){
  if(i%3===0 && i%5===0){
      console.log("FizzBuzz");
    }
    else if (i%3===0){
    console.log("Fizz");
    }
    else if (i%5===0){
    console.log("Buzz");
    }
    else{
    console.log(i)
    }
}

//Chess Board
var size = 8;
var chessBoard = "";
for (var y=0; y<size; y++){
  for (var x=0; x<size; x++){
      if ((x+y)%2===0) {
          chessBoard +=" ";
        }
        else{
          chessBoard +="#";
        }
    }
    chessBoard +="\n";
}
  console.log(chessBoard);

