// HTML Elements
const statustDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const itemsDiv = document.querySelectorAll('.grid-items');

// Game Constant
const xSymbol = '×';
const oSymbol = '○';

// Variables
let gameOn = true;
let xTurn = true;



// Functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameOn = false;
    if (letter === 'x') {
        statustDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
    } else {
        statustDiv.innerHTML = `<span>
        ${letterToSymbol(letter)} has won!
        </span>`;
    }

}

const checkGameStatus = () => {
    const topLeft = itemsDiv[0].classList[1];
    const topMiddle = itemsDiv[1].classList[1];
    const topRight = itemsDiv[2].classList[1];
    const middleLeft = itemsDiv[3].classList[1];
    const middleMiddle = itemsDiv[4].classList[1];
    const middleRight = itemsDiv[5].classList[1];
    const bottonLeft = itemsDiv[6].classList[1];
    const bottonMiddle = itemsDiv[7].classList[1];
    const bottonRight = itemsDiv[8].classList[1];

    // Check Winner
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
        itemsDiv[0].classList.add('won');
        itemsDiv[1].classList.add('won');
        itemsDiv[2].classList.add('won');
        
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
        handleWin(middleLeft);
        itemsDiv[3].classList.add('won');
        itemsDiv[4].classList.add('won');
        itemsDiv[5].classList.add('won');

    }else if (bottonLeft && bottonLeft === bottonMiddle && bottonLeft === bottonRight){
        handleWin(bottonLeft);
        itemsDiv[6].classList.add('won');
        itemsDiv[7].classList.add('won');
        itemsDiv[8].classList.add('won');

    }else if(topLeft && topLeft === middleLeft && topLeft === bottonLeft){
        handleWin(topLeft);
        itemsDiv[0].classList.add('won');
        itemsDiv[3].classList.add('won');
        itemsDiv[6].classList.add('won');

    }else if(topMiddle && topMiddle === middleMiddle && topMiddle === bottonMiddle){
        handleWin(topMiddle);
        itemsDiv[1].classList.add('won');
        itemsDiv[4].classList.add('won');
        itemsDiv[7].classList.add('won');
        
    }else if(topRight && topRight === middleRight && topRight === bottonRight){
        handleWin(topRight);
        itemsDiv[2].classList.add('won');
        itemsDiv[5].classList.add('won');
        itemsDiv[8].classList.add('won');

    }else if(topLeft && topLeft ===  middleMiddle && topLeft === bottonRight){
        handleWin(topLeft);
        itemsDiv[0].classList.add('won');
        itemsDiv[4].classList.add('won');
        itemsDiv[8].classList.add('won');

    }else if(topRight && topRight === middleMiddle && topRight === bottonLeft){
        handleWin(topRight);
        itemsDiv[2].classList.add('won');
        itemsDiv[4].classList.add('won');
        itemsDiv[6].classList.add('won');

    }else if(topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottonLeft && bottonMiddle && bottonRight){
        gameOn= false;
        statustDiv.innerHTML= 'Game is Tied!';
        
    }else {
        xTurn = !xTurn;

        if(xTurn){
            statustDiv.innerHTML = `${xSymbol} is next`;
        } else {
            statustDiv.innerHTML = `<span> ${oSymbol} is next </span>`;
        }

    }
};

// Event Handlers

const resetGame = () => {
    xTurn = true;statustDiv.innerHTML = `${xSymbol} is next`;
    for(const itemDiv of itemsDiv){
        itemDiv.classList.remove('x');
        itemDiv.classList.remove('o');
        itemDiv.classList.remove('won');
    }
    gameOn = true;

};

const handleItemsClick = (e) => {
    const classList = e.target.classList;

    if (!gameOn || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }

    if (xTurn) {
        classList.add('x');
        checkGameStatus();

    } else {
        classList.add('o');
        checkGameStatus();
    }
};



// Event Listeners

resetDiv.addEventListener('click', resetGame);

// adding event listener for grid-items
for (item of itemsDiv) {
    item.addEventListener('click', handleItemsClick);
};



