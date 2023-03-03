var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");
var button = document.querySelector("button");

button.addEventListener("click", randomNumber);

function randomNumber()
{
    let x,y;
    x = Math.floor((Math.random() * 6) + 1);
    y = Math.floor((Math.random() * 6) + 1);

    // for 1st image;
    if(x === 1)
        img1.setAttribute('src', src="./images/dice1.png");
    else if(x === 2)
        img1.setAttribute('src', src="./images/dice2.png");
    else if(x === 3)
        img1.setAttribute('src', src="./images/dice3.png");
    else if(x === 4)
        img1.setAttribute('src', src="./images/dice4.png");
    else if(x === 5)
        img1.setAttribute('src', src="./images/dice5.png");
    else
        img1.setAttribute('src', src="./images/dice6.png");

    // for 2nd image
    if(y === 1)
        img2.setAttribute('src', src="./images/dice1.png");
    else if(y === 2)
        img2.setAttribute('src', src="./images/dice2.png");
    else if(y === 3)
        img2.setAttribute('src', src="./images/dice3.png");
    else if(y === 4)
        img2.setAttribute('src', src="./images/dice4.png");
    else if(y === 5)
        img2.setAttribute('src', src="./images/dice5.png");
    else
        img2.setAttribute('src', src="./images/dice6.png");

    if(x > y)
        h1.innerText = "Player 1 Wins";
    else if (x === y)
        h1.innerText = "Draw";
    else 
        h1.innerText = "Player 2 Wins";
        
}