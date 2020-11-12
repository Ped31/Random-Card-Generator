const mySuit = ["\u2660", "\u2663", "\u2665", "\u2666"];
const myCard = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

// Función para cambiar el número de la carta

function randomNum(){
    let myNumIndx =Math.floor(Math.random() * myCard.length);
    return myCard[myNumIndx];
};

let myRandomNumber = randomNum();

// Función para cambiar el palo de la carta

function randomSuit(){
    let mySuitIndx =Math.floor(Math.random() * mySuit.length);
    return mySuit[mySuitIndx];
};

let myRandomSuit = randomSuit();

//condicional para el color del  palo
if (myRandomSuit == "\u2665" || myRandomSuit == "\u2666") {
    document.querySelector(".top-suit").style.color= "#ff6347"
    document.querySelector(".bottom-suit").style.color= "#ff6347"
};



document.querySelector(".top-suit").innerHTML = myRandomSuit;
document.querySelector(".bottom-suit").innerHTML = myRandomSuit;
document.querySelector(".card-number").innerHTML = myRandomNumber;







