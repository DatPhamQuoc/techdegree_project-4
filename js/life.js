class Heart {
  constructor () {
    this.count = 5;
  }

  /**
   * Remove a life if letter did not match
   */
  removeLife(){
    const life = document.querySelectorAll('img')
    life[this.count -1].setAttribute('src', 'images/lostHeart.png')
    this.count -= 1;
  }

  /**
   * Reset. All 5 life available
   */
  resetLife(){
    const life = document.querySelectorAll('img');
    life.forEach(img => {
      img.setAttribute('src', 'images/liveHeart.png')
    })
  }
}
