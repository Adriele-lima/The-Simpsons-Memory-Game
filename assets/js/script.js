// JS - LOGIN

// JS - GAME

let grid = document.getElementById('grid');

/**
 * 
 * Create a new card on the HTML.
 */
function createCard() {
   
    let card = document.createElement('div');
    card.className = 'cards';

    let front = document.createElement('div');
    front.className = 'face front';

    let back = document.createElement('div');
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);

    return card;
} 

createCard();
