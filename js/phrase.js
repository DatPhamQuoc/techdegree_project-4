class Phrase {
  constructor() {
    this.newPhrase = this.getPhrase;
  }

  /**
   * Return array of each letter in the phrase
   */
  get getPhrase(){
    const letters =[]
    const phrase = document.querySelectorAll('.letter');
    phrase.forEach(letter => {
      letters.push(letter.textContent)
    })
    return letters
  }

  /**
  * Reveal matched letter in the phrase
  * @para   {DOM element}    selectedKey - clicked or pressed Key
  */
  showLetter(selectedKey){
    const match = document.querySelectorAll(`li.${selectedKey.textContent}`);
    match.forEach(letter => {
      letter.className += " show";
    })
  }

  /**
   * Reset. Hide all reveal letter
   */
  resetPhrase(){
    const show = document.querySelectorAll('.show');
    show.forEach(letter => {
      letter.classList.remove('show');
    })

  }
}
