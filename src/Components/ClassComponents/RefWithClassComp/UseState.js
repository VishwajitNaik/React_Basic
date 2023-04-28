import React, { Component } from 'react'
import RefWithClassComp from './RefWithClassComp'

export class UseState extends Component {
    constructor(props){
        super(props)
        this.compRef = React.createRef()
    }

    clicHandler =()=>{
        this.compRef.current.focusInput()
    }

  render() {
    return (
      <div>
        <RefWithClassComp ref={this.compRef} />
        <button onClick={this.clicHandler}>Focus</button>    
      </div>
    )
  }
}

export default UseState
