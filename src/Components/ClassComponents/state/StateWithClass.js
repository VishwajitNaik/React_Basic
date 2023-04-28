import React, { Component } from 'react'

export class StateWithClass extends Component {
  constructor(props) {
        super()

        this.state = {
            message : "Hi I am a State"
        }
  }

  changeMessage() {
    this.setState({message:"I am updated"})
  }
    render() {
    
        return (
        <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>change message</button>
        </>
        )
  }
}

export default StateWithClass
