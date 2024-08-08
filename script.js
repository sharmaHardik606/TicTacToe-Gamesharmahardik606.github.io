let buttons = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector("#msg");
let msg1 = document.querySelector("#msg1");

let playerX = true;
let count = 0;

//2D array
const winPatterns = [
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
    playerX = true;
    count = 0;
    enableButtons();
    msg.classList.add("hide");
    msg.innerText = "";
    msg1.classList.add("hide");
    msg1.innerText = "";
    
}




buttons.forEach((button)=>{
  button.addEventListener("click", () =>{
    if(playerX){
        button.innerText="X";
        button.style.color="red";
        // button.style.fontSize="2rem";
        playerX = false;}

    else{
        button.innerText="O";
        button.style.color="green";
        // button.style.fontSize="2rem";
        playerX = true;}

        button.disabled = true;//button is disabled.
        count++;

        let isWinner = checkWinner();

        if (count===9 && !isWinner){
            drawCondition();
        }

     });
});


const drawCondition = ()=>{
    msg1.innerText= `Match is Draw`;
    msg1.classList.remove("hide");
    disableButtons();  
} 


const disableButtons =()=>{
    for (let button of buttons){
        button.disabled = true;
    }
}

const enableButtons =()=>{
    for (let button of buttons){
        button.disabled = false;
        button.innerText = "";
    }
};


const showWinner = (winner)=>{
    msg.innerText= `congratulations, winner is ${winner}`; 
    msg.classList.remove("hide");
    disableButtons();
}




 const checkWinner= ()=>{
     for (let pattern of winPatterns) {
        let pos1Val =buttons[pattern[0]].innerText;
        let pos2Val =buttons[pattern[1]].innerText;
        let pos3Val =buttons[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
          if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return true;
        
        }}
    }

    reset.addEventListener("click", resetGame);}
