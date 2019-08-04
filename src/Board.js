import Cell from './Cell'
import React from 'React'

export class Board extends React.Component {
  constructor(sizeX, sizeY, bombs){
    super()
    this.state = {
      gameBoard: this.start(sizeX, sizeY, bombs),
      gameState: 'playing',
      bombsLeft: bombs
    }
  }
  start(sizeX, sizeY, bombs){
    let board = []
    let bombsCount = 0
    for(let i = 0; i < sizeX; i++){
      board.push([])
      for (let j=0; j < sizeY; j++){
        let temp = new Cell()
        temp.state.key = (i * sizeX) + j + 1
        //initialize the bombs on the board.  will randomize placements after
        if (bombsCount < bombs){
          temp.state.isBomb = true
          bombsCount++
        }
        board[i].push(temp)
      }
    }
    // console.log('before swap', this.board[0][0])
    //now that board is initialized call a function to randomly swap tiles on the board
    for (let i = 0; i <  sizeX - 1; i++) {
      for (let j = 0; j < sizeY - 1; j++) {
      let rando = Math.floor(Math.random() * (board.length)); // random index from 0 to x
      let rando2 = Math.floor(Math.random() * (board.length)); //using board length cause inclusive
      let temp = board[i][j]   // swap elements
      board[i][j] = board[rando][rando2]
      board[rando][rando2] = temp
      }
    }
    //now go through and see hos many adjacent tiles are bombs

    for(let x = 0; x < sizeX; x++){
      for (let y = 0; y < sizeY; y++){
        let count = 0
        let self = board[x][y]
        if (x -1 >= 0){
          if (y -1 >=0){
            if ( board[x-1][y-1].isBomb){  count++  }
          }
          if (board[x-1][y].isBomb){  count++  }
          if (y+1 < sizeY){
            if (board[x-1][y+1].isBomb){  count++  }
          }
        }
        if (x+1 < sizeX){
          if (y-1 >= 0){
            if (board[x+1][y-1].isBomb){  count++ }
          }
          if ( board[x+1][y].isBomb){  count++  }
          if (y+1 < sizeY){
            if ( board[x+1][y+1].isBomb){  count++  }
          }
        }
        if (y -1 >= 0){
          if ( board[x][y-1].isBomb){  count++  }
        }
        if (y + 1 < sizeY){
          if ( board[x][y+1].isBomb){  count++  }
        }




        self.state.isTouching = count


      }
    }

    console.log('done', board)
    return board
    }
  render(){
    return(
      <div>This is the new board</div>
    )
  }

}
