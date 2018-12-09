
/**
 * Listens for click on `#btn_reset` and calls startGame() on game object
 */
document.querySelector('#btn__reset').addEventListener('click', (e) => {
  if (e.target.textContent === "Start Game"){
    resetDisplay()
    game = new Game();
    game.startGame();
  }else {
    restart();
    resetDisplay()
    game = new Game();
    game.missed = 0;
    game.resetLife();
    game.startGame();

  }
})

/**
 * Listens for click on `#qwerty` and calls markButton()
 */
document.querySelector('#qwerty').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON'){
    const selectedKey = e.target
    markButton(selectedKey);
  }
})

/**
 * Listen for keyboard presses
 */
document.addEventListener('keyup', (e)=>{
  const selectedKey = document.querySelector(`button.${e.key}`);
  markButton(selectedKey);
})

/**
 * Hide the overlay
 */
function resetDisplay(){
  const overlay = document.querySelector('#overlay');
  overlay.style.display = 'none'
}

/**
 * Disables the button on the onscreen
  keyboard and calls the handleInteraction() method
  of the Game class.
 */
function markButton(selectedKey){
  selectedKey.setAttribute('disabled', true)
  game.handleInteraction(selectedKey);
}

/**
 * Listen for keyboard presses
 */
function restart(){
  document.querySelector('ul').innerHTML ="";
  document.querySelectorAll('.wrong').forEach(button =>{
    button.classList.remove('wrong');
    button.disabled = false;
  })
  document.querySelectorAll('.chosen').forEach(button =>{
    button.classList.remove('chosen');
    button.disabled = false;
  })
}
