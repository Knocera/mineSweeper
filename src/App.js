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
        let temp = new Cell()
        temp.key = (i * this.x) + j + 1
        //initialize the bombs on the board.  will randomize placements after
        if (bombsCount < this.bombs){
          temp.isBomb = true
          bombsCount++
        }
        this.board[i].push(temp)
      }
    }
    //now that board is initialized call a function to randomly swap tiles on the board
    for (let i = 0; i <  this.x - 1; i++) {
      for (let j = 0; j < this.y - 1; j++) {
      let rando = Math.floor(Math.random() * (this.board.length)); // random index from 0 to x
      let rando2 = Math.floor(Math.random() * (this.board.length)); //using board length cause inclusive
      let temp = this.board[i][j]   // swap elements
      this.board[i][j] = this.board[rando][rando2]
      this.board[rando][rando2] = temp
      }
    }
    //now go through and see hos many adjacent tiles are bombs
    console.log(this.board)
    for(let x = 0; x < this.x; x++){
      for (let y=0; y < this.y; y++){
        let count = 0
        let self = this.board[x][y]

        if (this.board[x-1][y-1]&& this.board[x-1][y-1].isBomb){  count++  }
        if (this.board[x-1][y]&& this.board[x-1][y].isBomb){  count++  }
        if (this.board[x-1][y+1]&& this.board[x-1][y+1].isBomb){  count++  }
        if (this.board[x][y-1]&& this.board[x][y-1].isBomb){  count++  }
        if (this.board[x][y+1]&& this.board[x][y+1].isBomb){  count++  }
        if (this.board[x+1][y-1]&& this.board[x+1][y].isBomb){  count++  }
        if (this.board[x+1][y]&& this.board[x+1][y].isBomb){  count++  }
        if (this.board[x+1][y+1]&& this.board[x+1][y+1].isBomb){  count++  }


        self.isTouching = count


      }
    }


    return this.board
    }


  }

let x = new Game(5,5,10)

let arr = x.start()



return (
  <div>
    {arr.map(row => {


        return (<div>Row {row.map(index => {
          console.log(index.isBomb)
          return <div>{index.isBomb ? '√' : 'x'}</div>
        }
      )}</div>)

    })}
  </div>

)
}


export default App

