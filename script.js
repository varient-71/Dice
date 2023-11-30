const dice1 = Math.ceil(Math.random()*6);
const dice2 = Math.ceil(Math.random()*6);
if((dice1 || dice2) > 6 ){
    alert("error found");
}

const path1 = `images/dice${dice1}.png`;
const path2 = `images/dice${dice2}.png`;
const player1 = document.querySelector(".img1").setAttribute("src",path1);
const player2 = document.querySelector(".img2").setAttribute("src",path2);
const heading = document.querySelector(".container>h1")

if(dice1>dice2){
    heading.innerHTML = "Player 1 Wins"
}
else{
    if(dice1<dice2){
        heading.innerHTML = "Player 2 Wins"
    }
    else{
        heading.innerHTML = "It's a draw"
    }
}