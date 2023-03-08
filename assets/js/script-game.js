let grid = document.getElementById('grid');
let card = document.getElementsByClassName('cards');
let timer = document.getElementById('timer');
let player = document.getElementById('player');
let restartButton = document.getElementById('restart-btn');

/**
 * Create timer.
 */
function startTimer() {

    setInterval(() => {

        let currentTime = Number(timer.innerHTML);
        timer.innerHTML = currentTime + 1;

    }, 1000);
}

/**
 * Loads player's name, timer and cards when browser is fully loaded.
 */
window.onload = () => {

    player.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
};

/**
 * Create the DIVs on the HTML and assign the correct character's picture.
 */
function createCard(character) {
   
    var card = document.createElement('div');
    card.className = 'cards';

    var front = document.createElement('div');
    front.className = 'face front';

    var back = document.createElement('div');
    back.className = 'face back';

    front.style.backgroundImage = `url('assets/images/${character}.png')`;
    
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    
    return card;
} 

let characters = [
    'bart',
    'lisa',
    'maggie',
    'marge',
    'homer',
    'moe',
    'carl',
    'lenny',
    'cat',
    'dog',
    'bart',
    'lisa',
    'maggie',
    'marge',
    'homer',
    'moe',
    'carl',
    'lenny',
    'cat',
    'dog',
];

/**
 * Shuffle the characters index.
 */
function shuffle(values) {
    let index = values.length,
      randomIndex;
  
    while (index != 0) {
    
      randomIndex = Math.floor(Math.random() * index);
      index--;
  
      [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
    }
  
    return values;
  }
  
shuffle(characters);

/**
 * Create all the cards to load the game.
 */
function loadGame (){
    
    characters.forEach(function(character){
        
        var card = createCard(character);
          
    });
    
}

let firstCard = "";
let secondCard = "";
let disabledCard = [];

/**
 * Flip the cards if not flipped before.
 */
function revealCard(){

    if (firstCard === "") {
        this.classList.add('flip');
        firstCard = this;
        firstCard.removeEventListener('click', revealCard);
        return;
        
    } else if (secondCard === "") {
        this.classList.add('flip');
        secondCard = this;

        checkForMatch();
    }
      
}

/**
 * Check if cards match.
 */
function checkForMatch(){
    let itMatch = firstCard.dataset.character == secondCard.dataset.character;

    itMatch ? blockCard() : unflipCard();
}

/**
 * if match keep it flipped and clean the variables for the next card.
 */
function blockCard(){
    
    disabledCard.push(firstCard);
    disabledCard.push(secondCard);
    firstCard.removeEventListener('click', revealCard);
    secondCard.removeEventListener('click', revealCard);
 
    firstCard = "";
    secondCard = "";

    checkEndGame();
}

/**
 * if it doesn't match cards will flip back also it will clean the variables.
 */
function unflipCard(){
    setTimeout(() => {
            
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.addEventListener('click', revealCard);

        firstCard = ""; 
        secondCard = "";
        
    }, '1000');
}

/**
 * Check end Game.
 */
function checkEndGame(){
    if (disabledCard.length == 20) {
        window.alert('You did it!!');
    }
}

restartButton.addEventListener('click', restartGame);

function restartGame(){
    window.location.reload(true);
}