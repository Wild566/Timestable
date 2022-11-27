// Times Table script

//What Times Table they want to do // STB == Start Times Table
var STB = parseInt(prompt(`What times table do you want to start at?`, 0));

//veriables

var ans = "";
var message = "";
var statment = false
var multi = 0;
var userAns = "";
var correct = 0;
var incorect = 0;
var total = 0;
var message = "";
var ava = 0;
const commands = "type 'next' to go to the next timestable\ntype 'skip' to skip the question\ntype 'exit' to exit the game\n\n";


// Main script

function main() {
    userAns = prompt(`${commands}${message}What is ${STB} x ${multi}`);
    if (userAns == (STB * multi)) {
      correct++;
    } else if (userAns !== (STB * multi)) {
      incorect++;
    } else if (userAns == null || userAns == "") {
      alert("Please type something");
    } else if (multi >= 12) {
        alert("You have reached the end of the multiplication table / 12");
        STB++;
    } else {
      alert("error");
    }
}

function Commands() {

  // the next command gose to the next timestable.
  if (userAns === String("next")) {
    multi = 13;
    message = (`You have skiped to the next timestable\n\n`);
    incorect--;
    }

  // the skip command skipes the question.
    if (userAns === String("skip")) {
      incorect--;
      message = (`You have skipped the question\n\n`);
    }


  // the exit command exits the game.
    if (userAns === String("exit")) {
      incorect--;
    }

}




// Making a loop

while (STB !== 13) {
    while (userAns !== String("exit") && multi !== 13) {

        main();
        multi++;
        message = "";
        Commands();

}

multi = 0;
STB++;

}

   
function finishGame() {
    ava = correct / (correct + incorect) * 100
    document.write(`Answers correct: <font color="green">${correct}</font>
    <br /><br />
    Answers incorrect: <font color="red">${incorect}</font>
    <br /><br />
    <font color="blue">Your average is: ${ava}</font>%`);
}


finishGame();
