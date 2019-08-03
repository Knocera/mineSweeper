import React from 'react';
import Cell from './Cell'
import './App.css';
function App(){


class GameState {
  constructor(){
    this.playing = 0;
    this.won = 1
    this.lost = 2
  }
}



class Game {
  constructor(sizeX, sizeY, bombs){
    this.x = sizeX
    this.y = sizeY
    this.bombs = bombs
  }
  start(){
    this.board = []
    let bombsCount = 0
    for(let i = 0; i < this.x; i++){
      this.board.push([])
      for (let j=0; j < this.y; j++){
        this.board[i].push(new Cell())
      }
    }
    let row = 0
    let index = 0
    while (bombsCount < this.bombs){
      if (this.board[row][index]){
        this.board[row][index].isBomb = true
        index++
        bombsCount++
      } else {
        row++
        index = 0
      }

    }

    return this.board
    }


  }

let x = new Game(5,5,20)

let arr = x.start()



return (
  <div>
    {arr.map(row => {

      return row.map(index => {
        console.log(index.isBomb)
        return <div>{index.isBomb ? 'x' : '√'}</div>
      })
    })}
  </div>

)
}


export default App

