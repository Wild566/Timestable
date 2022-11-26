// times table script

var startNum = parseInt(prompt(`What times table do you want to start with`));

var multaplier = 0

var correct = 0
var incorect = 0

var b = 2

var ava

//var message = ""

var ans = ""

var i = 1



while (ans !== stop) {
   while (ans !== "stop" || i < 13) {   

      var timesTable = startNum * multaplier
      
      ans = parseInt(prompt(`What's ${startNum} * ${multaplier}`))
          

      if (timesTable == ans) {
         correct++
         i++
      } if (timesTable !== ans) {
         incorect++
         i++
      } if (ans == stop) {
         finishGame();
      }

      multaplier++

      }
   
     multaplier = 0

     startNum++

     var text = prompt(`would you like to do the ${startNum} timestables`)
     if (text == "yes") {
        b++
     } else if (text == "no") {
      // this part works
      finishGame();
     } if (i == 13) {
      finishGame();
   }
}









// this part works
function finishGame() {

   ava = correct / (correct + incorect) * 100
   //document.write(`you got ${correct} answers correct<br>you got ${incorect} incorect`);
   document.write(`Answers correct: <font color="green">${correct}</font><br /><br />
   Answers incorrect: <font color="red">${incorect}</font><br /><br />
   <font color="blue">Your average is: ${ava}</font>%`);
}
