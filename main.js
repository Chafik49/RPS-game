let gameZone = document.querySelector(".game-zone"),
    hand =  document.querySelectorAll(".hand"),
    resultZone = document.querySelector(".result-zone"),
    playAgain = document.querySelector(".restart-game");

let myChoice = "null",
    cpChoice = "null";


hand.forEach(h=>{
    h.addEventListener("click",()=>{
        gameZone.style.display="none",
        resultZone.style.display = "flex";

        if(h.classList.contains("paper")){
            myChoice = "paper";
            document.getElementById("myChoiceImg").src = "assets/Paper.png";

        }else if(h.classList.contains("rock")){
            myChoice = "rock";
            document.getElementById("myChoiceImg").src = "assets/Rock.png";

        }else{
            myChoice="scissors";
            document.getElementById("myChoiceImg").src = "assets/Scissors.png";

        }
        cpPick();
        Takedecision();

        


    })
})

playAgain.onclick = ()=>{
    gameZone.style.display="flex",
    resultZone.style.display = "none";
}


const cpPick = ()=>{
    let cpRandom = Math.floor(Math.random()*3);
    if(cpRandom == 0){
        cpChoice = "paper";
        document.getElementById("cpChoiceImg").src = "assets/Paper.png";
    }else if(cpRandom ==1 ){
        cpChoice = "rock";

        document.getElementById("cpChoiceImg").src = "assets/Rock.png";
    }else{
        cpChoice = "scissors";

        document.getElementById("cpChoiceImg").src = "assets/Scissors.png";
    }

}
let decison = "null";

const Takedecision = ()=>{
    

    if(myChoice == cpChoice){
        // console.log("no winner");

        decison = "NO WINNER";
    }
    if(myChoice == "paper" && cpChoice == "rock"){
        // console.log("you win");
        decison = "YOU WIN";

    }
    if(myChoice == "rock" && cpChoice == "scissors"){
        // console.log("you win");
        decison = "YOU WIN";

    }
    if(myChoice == "scissors" && cpChoice == "paper"){
        // console.log("you win");
        decison = "YOU WIN";


    }

   
    if(myChoice == "rock" && cpChoice == "paper"){
        // console.log("you lose");
        decison = "YOU LOSE";

    }
    if(myChoice == "scissors" && cpChoice == "rock"){
        // console.log("you lose");
        decison = "YOU LOSE";

    }
    if(myChoice == "paper" && cpChoice == "scissors"){
        // console.log("you lose");
        decison = "YOU LOSE";


    }

    
    dispalyResult();
    

}


const dispalyResult = ()=>{
    let resulDecison = document.querySelector(".result h2"),
        score = document.querySelector(".score h2");

    resulDecison.textContent = decison;

    if(decison == "YOU WIN") {
        score.textContent = parseInt(score.textContent)+1;
    }

}