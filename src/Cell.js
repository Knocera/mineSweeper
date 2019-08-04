import React from 'react';

class Cell extends React.Component {
  constructor(){
    super()
    this.state ={
      isShowing: false,
      isBomb: false,
      isFlagged: false,
      isTouching: null
    }

  }
  render(){
    return(
      <div>{this.isTouching}</div>
    )

  }
}
export default Cell
