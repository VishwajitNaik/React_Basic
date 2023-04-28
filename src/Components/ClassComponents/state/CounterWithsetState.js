import React, { Component } from 'react'

export class CounterWithsetState extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }


    increment(){
        this.setState({
            count : this.state.count + 1
        }, ()=>{
            console.log(this.state.count);
        })
      
    }

    fiveInc(){
        this.setState({
            count : this.state.count + 5
        },()=>{
            console.log(this.state.count);
        })
        console.log(this.state.count);
    }

    prevState(){
        this.setState(prev=>(
            {count: prev.count + 3}
        ))
        console.log(this.state.count);
    }


  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.increment()}}>click me</button>
        <button onClick={()=>{this.fiveInc()}}>click me inc 5</button>
        <button onClick={()=>{this.prevState()}}>click me inc 3</button>
      </div>
    )
  }
}

export default CounterWithsetState
