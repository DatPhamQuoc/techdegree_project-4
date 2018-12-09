class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  /**
   *  Adds letter placeholders to the display when the game starts
   */
  addPhraseToDisplay (){
    this.phrase.split("").forEach(letter => {
      const addLetter = document.createElement('li')
      addLetter.textContent = letter;
      if (letter !== " "){
        addLetter.classList.add ('hide', 'letter', `${letter}`)
      }else{
        addLetter.classList.add ('hide', 'space')
      }
      document.querySelector('#phrase ul').appendChild(addLetter)
    })
  }

  /**
   *  Checks to see if letter selected by player matches a letter in the phrase.
   *  @para   {DOM element}   selectedKey - clicked or pressed key
   *  @return {Boolean}       return true or false
   */
  checkLetter(selectedKey){
    if (this.phrase.includes(selectedKey.textContent)) {
      return true;
    }else {
      return false;
    }
  }

  /**
   *  Reveals the letter(s) on the board that matches player's selection.
   *  @para   {DOM element}   selectedKey - clicked or pressed key
   */
  showMatchedLetter(selectedKey){
      document.querySelectorAll(`li.${selectedKey.textContent}`).forEach(letter =>{
        letter.classList.add('show');
    })
  }
}
