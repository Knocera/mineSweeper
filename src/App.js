import React from 'react';

import './App.css';

class GameState {
  constructor(){
    this.playing = 0;
    this.won = 1
    this.lost = 2
  }
}

class Cell {
  constructor(){
    this.isShowing = false
    this.isBomb = false
    this.isFlagged = false
    this.isTouching = 0
  }
}


export default App;
