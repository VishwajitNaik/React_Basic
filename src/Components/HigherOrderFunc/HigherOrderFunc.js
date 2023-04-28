import React, { Component } from 'react'

export class HigherOrderFunc extends Component {
    constructor(props) {
        super(props)

            this.state = {
                count : 0
        }
    }

    incrementCounter =()=>{
        this.setState(preState =>{
            return {count:preState.count + 1}
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.incrementCounter}>Clicked {count} times</button>
      </div>
    )
  }
}

export default HigherOrderFunc
