let input = document.getElementById('login-input');
let form = document.getElementById('login-box');

form.addEventListener('submit', setPlayer);

function setPlayer(event) {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'game.html';
}