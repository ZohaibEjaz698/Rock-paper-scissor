let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uscore = document.querySelector("#user");
let cscore = document.querySelector("#comp");
const genCompchoice = () =>{
      let options = ["rock","paper","scissor"];
      let idx = Math.floor(Math.random() *3);
     return options[idx];
}
const drawGame = () =>{
     msg.innerText = "Its a Draw"
     msg.style.backgroundColor = "#24252a"
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++
        uscore.innerText = userScore;
        msg.innerText = `Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        cscore.innerText = compScore;
        msg.innerText = `Your ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) =>{
     console.log(userChoice);
    const compChoice = genCompchoice();
    console.log(compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
  choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
