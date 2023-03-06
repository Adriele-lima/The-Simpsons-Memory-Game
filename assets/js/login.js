let input = document.getElementById('login-input');
let form = document.getElementById('login-box');
let button = document.getElementById('submit-btn');

form.addEventListener('submit', setPlayer);

function setPlayer(event) {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'game.html'
}