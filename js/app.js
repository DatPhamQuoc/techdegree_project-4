const game = new Game();

document.getElementById('btn__reset').addEventListener('click', (e) => {
  if(e.currentTarget.innerHTML === 'Start Game') {
  game.startGame();
  document.getElementById('overlay').style.display = 'none';
}else if (e.currentTarget.innerHTML === 'Play Agian') {
  game.phrase = new Phrase();
  game.heart = new Heart();
  game.resetGame()
  game.startGame();
  document.querySelector('#overlay').style.display = 'none';
}
})

/**
 * Listens for click on `#qwerty` and calls startGame() on game object
 */
document.querySelector('#qwerty').addEventListener('click', (e) => {
  if (e.target.tagName === "BUTTON") {
    const selectedKey = e.target
    selectedKey.setAttribute('disabled', true);
    game.selectionHandler(selectedKey);
  }
})

/**
 * Listen for keyboard presses
 */
document.querySelector('body').addEventListener('keyup', (e) =>{
  const keyName = e.key;
  const selectedKey = document.querySelector(`.${keyName}`)
  selectedKey.setAttribute('disabled', true);
  game.selectionHandler(selectedKey);
})
