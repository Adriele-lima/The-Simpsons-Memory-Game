// JS - LOGIN

// JS - GAME

let grid = document.getElementById('grid');
let card = document.getElementsByClassName('cards');

/**
 * 
 * Create the DIVs on the HTML and assign the correct character's picture.
 */
function createCard(character) {
   
    var card = document.createElement('div');
    card.className = 'cards';

    var front = document.createElement('div');
    front.className = 'face front';

    var back = document.createElement('div');
    back.className = 'face back';

    front.style.backgroundImage = `URL(../assets/images/${character}.png)`;
    
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    
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
 * Create all the cards to load the game.
 */
function loadGame (){
    
    characters.forEach(function(character){
        
        var card = createCard(character);
          
    });
}

loadGame();

let firstCard = "";
let secondCard = "";
let disabledCard = [];

/**
 * Flip the cards if not flipped before.
 */
function revealCard(){
           
    if (firstCard === "") {
        this.classList.add('flip');
        firstCard = this.dataset.character;
        return;
    } else if (secondCard === "") {
        this.classList.add('flip');
        secondCard = this.dataset.character;
        return;
    }
    
    checkCards();
  
}

/**
 * Check if cards match,
 * if match keep it flipped and clean the variables for the next card,
 * if not cards will flip back.
 */
function checkCards(){
    if (firstCard === secondCard) {
        disabledCard.push(firstCard);
        disabledCard.push(secondCard);
 
        firstCard = "";
        secondCard = "";

        //checkEndGame();
    } else {

        card.classList.remove('flip');
        card.classList.remove('flip');


        firstCard = "";
        secondCard = "";
    }

    
}


function checkEndGame(){
    
}