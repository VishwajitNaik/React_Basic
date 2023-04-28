/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from 'react'

export class DestructuringState extends Component {
  constructor(){
    super()
    this.state = {
        count : 0,
        count1: 1
    }
  }


IncrementONE(){
    this.setState(prevState => ({
        count : prevState.count + 1 
    }))
  }

decrement(){
    this.setState(prevState =>({
        count1 : prevState.count1 - 1
    }))
}



    render() {
        const {count, count1} = this.state
        return (
        <div>
            <h2>{count}</h2>
            <h3>{count1}</h3>
            <button onClick={()=> this.IncrementONE()}>IncrementONE</button>
            <h1 onClick={()=> this.decrement()}>decrement</h1>
        </div>
        )
    }
}

export default DestructuringState
