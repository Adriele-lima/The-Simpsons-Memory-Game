// JS - LOGIN

// JS - GAME

let grid = document.getElementById('grid');

/**
 * 
 * Create a new card on the HTML.
 */
function createCard(character) {
   
    var card = document.createElement('div');
    card.className = 'cards';

    var front = document.createElement('div');
    front.className = 'face front';

    var back = document.createElement('div');
    back.className = 'face back';

    front.style.backgroundImage = `url(../images/back.jpeg)`;

    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);

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

function loadGame (){
    characters.forEach(function(character){
        console.log(character);

        var card = createCard(character);
        grid.appendChild(card);

        
    });
}

loadGame();

