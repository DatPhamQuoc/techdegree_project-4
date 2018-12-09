 class Game {
  constructor(){
    this.missed = 0;
    this.phrases = ['how are you',
                    'i am fine',
                    'thank you',
                    'see you again'];
    this.addClassToKey = this.addClassToKey();
  }

  /**
   *  Randomly retrieves one of the phrases stored in the phrases array.
   *   @return {Array}       return random phrase
   */
  getRandomPhrase(){
    const rndNum= Math.floor(Math.random()*this.phrases.length);
    return this.phrases[rndNum];
  }

  /**
   *  Checks to see if the button clicked by the player matches a letter in the phrase.
   *  @para   {DOM element}   selectedKey - clicked or pressed key
   */
  handleInteraction(selectedKey){
    if(this.phrase.checkLetter(selectedKey)){
      selectedKey.classList.add('chosen')
      this.phrase.showMatchedLetter(selectedKey)
    }else{
      selectedKey.classList.add('wrong')
      this.removeLife();
    }
    if (this.checkForWin()){
      this.gameOver('You win!', 'win')
    }
    if(this.missed === 5) {
      this.gameOver('Better luck next time', 'lose')
    }
  }

  /**
   *  Removes a life, removes a heart from the board.
   */
  removeLife(){
    const hearts = document.querySelectorAll("img[src='images/liveHeart.png']");
    hearts[hearts.length-1].setAttribute('src', 'images/lostHeart.png')
    this.missed += 1;
  }

  /**
   *  Checks to see if the player has selected all of the letters.
   *  @return {Boolean}       return true
   */
  checkForWin(){
    const showLetter = document.querySelectorAll('.show')
    const letterInPhrase = document.querySelectorAll('.letter')
    if( this.missed !== 5 && showLetter.length === letterInPhrase.length) {
      return true;
    }
  }

  /**
   *  Checks to see if letter selected by player matches a letter in the phrase.
   *  @para   {string}   message - message to the player
   *  @para   {string}   addClass - add class to #overlay
   */
  gameOver(message, addClass){
    document.querySelector('#game-over-message').textContent = message
    document.querySelector('#overlay').className = addClass;
    document.querySelector('#btn__reset').textContent = 'Play again';
    document.querySelector('#overlay').style.display = "";
  }

  /**
   *   calls the getRandomPhrase() method,
      and adds that phrase to the board by
      calling the Phrase class' addPhraseToDisplay() method..
   */
  startGame(){
    const rndPhrase = this.getRandomPhrase();
    this.phrase = new Phrase(rndPhrase);
    this.phrase.addPhraseToDisplay();
  }

  /**
   * Restore all life
   */
  resetLife(){
    const hearts = document.querySelectorAll("img");
    hearts.forEach(heart => {
      heart.setAttribute('src','images/liveHeart.png')
    })
  }

  /**
   * Add class to each key on the screen by it's content.
   */
  addClassToKey(){
    document.querySelectorAll('.key').forEach(key =>{
      key.classList.add(`${key.textContent}`);
    })
  }
}
