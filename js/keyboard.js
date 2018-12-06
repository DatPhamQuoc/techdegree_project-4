class Keyboard {
  constructor(){
    this.keys = this.addClassToKey();
  }

  /**
   * Add class (it's content) to each key button
   */
  addClassToKey(){
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.className += ` ${key.textContent}`
    })

  }

  /**
   * Reset. Enable all keyboard buttons
   */
  resetKeyboard(){
    const chosen = document.querySelectorAll('.chosen');
    const wrong = document.querySelectorAll('.wrong');
    chosen.forEach(key => {
      key.disabled = false;
      key.classList.remove('chosen')
    })
    wrong.forEach(key => {
      key.disabled = false;
      key.classList.remove('wrong')
    })
  }
}
