import React from 'react';
// import Cell from './Cell'
import {Board} from './Board'
import './App.css'

import {Grid, Button} from 'semantic-ui-react'




export class GameState {
  constructor(){
    this.playing = 0;
    this.won = 1
    this.lost = 2
  }
}

// export class Cell extends React.Component {
//   constructor(){
//     super()
//     this.state ={
//       isShowing: false,
//       isBomb: false,
//       isFlagged: false,
//       isTouching: null
//     }
//     // this.getValue = this.getValue.bind(this)
//   }
  // getValue(){
  //   console.log('getting Value', this.state)
  //   if (!this.state.isShowing){
  //     return this.state.isFlagged ? '🚩' : null
  //   }
  //   if (this.state.isBomb){
  //     return "💣"
  //   }
  //   return this.state.isTouching
  // }
//   render(){
//     return(
//       <div onClick={this.getValue()}>{this.getValue()}</div>
//     )

//   }
// }

// export class Game {
//   constructor(sizeX, sizeY, bombs){
//     this.x = sizeX
//     this.y = sizeY
//     this.bombs = bombs
//   }
//   start(){
//     this.board = []
//     let bombsCount = 0
//     for(let i = 0; i < this.x; i++){
//       this.board.push([])
//       for (let j=0; j < this.y; j++){
//         let temp = new Cell()
//         temp.state.key = (i * this.x) + j + 1
//         //initialize the bombs on the board.  will randomize placements after
//         if (bombsCount < this.bombs){
//           temp.state.isBomb = true
//           bombsCount++
//         }
//         this.board[i].push(temp)
//       }
//     }
//     console.log('before swap', this.board[0][0])
//     //now that board is initialized call a function to randomly swap tiles on the board
//     for (let i = 0; i <  this.x - 1; i++) {
//       for (let j = 0; j < this.y - 1; j++) {
//       let rando = Math.floor(Math.random() * (this.board.length)); // random index from 0 to x
//       let rando2 = Math.floor(Math.random() * (this.board.length)); //using board length cause inclusive
//       let temp = this.board[i][j]   // swap elements
//       this.board[i][j] = this.board[rando][rando2]
//       this.board[rando][rando2] = temp
//       }
//     }
//     //now go through and see hos many adjacent tiles are bombs

//     for(let x = 0; x < this.x; x++){
//       for (let y = 0; y < this.y; y++){
//         let count = 0
//         let self = this.board[x][y]
//         if (x -1 >= 0){
//           if (y -1 >=0){
//             if ( this.board[x-1][y-1].isBomb){  count++  }
//           }
//           if (this.board[x-1][y].isBomb){  count++  }
//           if (y+1 < this.y){
//             if (this.board[x-1][y+1].isBomb){  count++  }
//           }
//         }
//         if (x+1 < this.x){
//           if (y-1 >= 0){
//             if (this.board[x+1][y-1].isBomb){  count++ }
//           }
//           if ( this.board[x+1][y].isBomb){  count++  }
//           if (y+1 < this.y){
//             if ( this.board[x+1][y+1].isBomb){  count++  }
//           }
//         }
//         if (y -1 >= 0){
//           if ( this.board[x][y-1].isBomb){  count++  }
//         }
//         if (y + 1 < this.y){
//           if ( this.board[x][y+1].isBomb){  count++  }
//         }




//         self.state.isTouching = count


//       }
//     }

//     console.log('done', this.board)
//     return this.board
//     }


//   }

let x = new Board(5,5,10)
console.log(x)
// let arr = x.start()


class App extends React.Component{
render(){
  console.log('Sups sups')
return (
  <div>
    <div>
      HI HI
    </div>
    <Board />

  </div>
)
}}

//   <div>

//   <Grid celled divided columns={x.x}>
//     {arr.map(row => {


//       return (<div>{row.map(index => {
//           console.log(index.isBomb)
//           return <div>{index.isBomb ? '√' : 'x'}</div>
//         }
//         )}</div>)

//     })}
//   </Grid>

//   <Grid celled columns={x.x}>
//     {arr.map(row => {
//         return (<div>{row.map(index => {
//           return (
//           <div>
//             <div className="tile" onClick={this.getValue}>
//                 {index.state.isShowing ? index.state.isTouching : ''}
//             </div>
//           </div>)}
//       )}</div>)

//     })}
//   </Grid>
//   </div>

// )
// }


export default App

