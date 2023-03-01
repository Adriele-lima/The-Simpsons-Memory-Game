// JS - LOGIN

// JS - GAME

let grid = document.getElementById('grid');

/**
 * 
 * Create a new card on the HTML.
 */
function createCard(characters) {
   
    var card = document.createElement('div');
    card.className = 'cards';

    var front = document.createElement('div');
    front.className = 'face front';

    var back = document.createElement('div');
    back.className = 'face back';

    front.style.backgroundImage = `url (../images/${characters}.png)`;

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
]

function loadGame (){
    characters.forEach(function(card){
        console.log(card);

        var card = createCard(characters);
        grid.appendChild(card);

        
    })
}

loadGame();

