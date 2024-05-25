let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let btn = document.querySelector("#reset");

const genComp = () => {
    const options = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random() *3);
    return options[idx];
}
const drawGame = () =>{
    msg.innerText = "Its a draw";
    msg.style.backgroundColor = "#24252a";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++
        user.innerText = userScore;
        msg.innerText = `Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `Your ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
   console.log(userChoice);
   const compChoice = genComp();
   console.log(compChoice);
   if(userChoice === compChoice){
    drawGame();
   }else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper"? false : true;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissor"? false : true;
    }else {
        userWin = compChoice === "rock"? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    user.innerText = 0;
    comp.innerText = 0;
    msg.innerText = "Play Your Turn";
    msg.style.backgroundColor = "#24252a";
}
btn.addEventListener("click",resetGame);
