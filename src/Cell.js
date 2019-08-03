import React from 'react';

class Cell extends React.Component {
  constructor(){
    super()
    this.isShowing = false
    this.isBomb = false
    this.isFlagged = false
    this.isTouching = 0
  }
  render(){
    return(
      <div> O </div>
    )

  }
}
export default Cell
