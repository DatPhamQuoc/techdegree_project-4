class Game {
  constructor(){
    this.phrase = new Phrase();
    this.heart =  new Heart();
    this.keyboard = new Keyboard();
    this.ready = false;
  }

  /**
   * Initializes the game
   */
  startGame() {
    this.ready = true
  }

  /**
  * Branches code, depending on what key player presses
  * @para   {DOM element}    selectedKey - clicked or pressed Key
  */
  selectionHandler(selectedKey) {
    if(this.ready) {
      if (this.checkMatchLetter(selectedKey)) {
        selectedKey.className += ' chosen';
        this.phrase.showLetter(selectedKey);
      }else {
        selectedKey.className += ' wrong';
        this.heart.removeLife();
      }
      if (this.checkWin()){
        this.gameOver('You Win !', 'win')
      }
      if (this.checkLose()){
        this.gameOver('You Lose !', 'lose')
      }
    }
  }

  /**
  * Check if selected key match any letter in the phrase
  * @para   {DOM element}    selectedKey - clicked or pressed Key
  * @return {boolean}        return true or false
  */
  checkMatchLetter (selectedKey) {
    return this.phrase.newPhrase.includes(selectedKey.textContent);
  }

  /**
  * Check if there a win after each turn
  * @return {boolean}       win - return true or false
  */
  checkWin () {
    let win = false;
    const letterShow = document.querySelectorAll('.show')
    if (this.phrase.newPhrase.length === letterShow.length && this.heart.count !== 0){
      return win = true;
    }
  }

  /**
  * Check if there a lose after each turn
  * @return {boolean}       lose -  return true or false
  */
  checkLose () {
    let lose = false;
    if (this.heart.count === 0){
      return lose = true;
    }
  }

  /**
  * Display win(lose) infor
  * @para  {string}   message -  Game over message
  * @para  {string}   className -  Add class to '#overlay'
  */
  gameOver(message, className){
    document.querySelector('#game-over-message').textContent = message;
    document.getElementById('overlay').className = className;
    document.getElementById('overlay').style.display = '';
    document.getElementById('btn__reset').textContent = "Play Agian";
    this.ready = false;
  }

  /**
  * Reset game
  */
  resetGame(){
    this.keyboard.resetKeyboard();
    this.phrase.resetPhrase();
    this.heart.resetLife();
  }
}
