# The Simpsons - Memory Game

It's a memory game for all ages!

![Responsive](https://github.com/Adriele-lima/The-Simpsons-Memory-Game/blob/main/assets/images/responsive.jpg)

## Existing Features

- __Login Page__

    - Allow the user to add his/her name or nickname.

![Login-Page](https://github.com/Adriele-lima/The-Simpsons-Memory-Game/blob/main/assets/images/login-page.jpg)

- __Game Page__

    - The game has a timer and the core of the game is match all the cards in the shortest time.

![Game-Page](https://github.com/Adriele-lima/The-Simpsons-Memory-Game/blob/main/assets/images/game-page.jpg)

## Testing

- I tested that this page works in differents browsers: Firefox and Microsoft Edge.

- I confirm that this project is responsive, looks good and functions on all standart screen sizes using the devtools device toolbar.

- I confirm that the login page and game page are all readable and easy to understand.

- I have confirmed that the form works and it will redirect to the game's page. 

## Bugs

- __Solved Bugs__

    - When I deployed my project to GitHub Pages I discovered that my game was broken, the links to images and JS did not work.

    - I discovered that my JS was not working because I didn't link it correctly. The rel="script-game"  was missing also the relative markup file. 

    ![Javascript Bug](https://github.com/Adriele-lima/The-Simpsons-Memory-Game/blob/main/assets/images/error-2.jpg)

    - I discovered that my images was not working because I didn't link it correctly. GitHub doesn't accept absolute files. Just changed for relative markup file.

    ![Images Bug](https://github.com/Adriele-lima/The-Simpsons-Memory-Game/blob/main/assets/images/error-3.jpg)

## Validator Testing

- HTML

    - Only one error returned for [(W3C) validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)

    - I added a closing tag for input and it's not necessary. I removed that and then no error returned again.

![Error](https://github.com/Adriele-lima/The-Simpsons-Memory-Game/blob/main/assets/images/error.jpg)

- CSS

    - No errors were returned on [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

- JavaScript

    - Only error returned was missing some semicolons on [(JSHint) validator](https://jshint.com/)

    - It was fixed and added all the semicolons missing.

- Accessibility

    - I confirmed that the colors and fonts chosen are easy to read and acessible by running it through lighthouse in devtools.

![lighthouse-Login](https://github.com/Adriele-lima/The-Simpsons-Memory-Game/blob/main/assets/images/light-house-login.jpg)
![lighthouse-Game](https://github.com/Adriele-lima/The-Simpsons-Memory-Game/blob/main/assets/images/light-house-game.jpg)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follow:
    - In the GitHub repository, navigate to the settings tab;
    - On the right menu select "pages";
    - On The section "Build and Deployment" select your branch on the dropdown menu and selec "main";
    - After save and wait a few minutes, the link for your live site will be on the top of the page.

The live link can be found here [Let's Cook School](https://adriele-lima.github.io/The-Simpsons-Memory-Game/)

## Credits

- __Content__

- [W3School](https://www.w3schools.com/JSREF/)

- [W3School](https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html)

- [W3School](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- __Media__

- Some media pictures are from [Hikipedia](https://www.w3schools.com/JSREF/met_win_setinterval.asp) 

- Some media pictures are from [Google - Images](https://www.google.com/) 