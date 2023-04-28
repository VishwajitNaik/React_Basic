import React, { Component } from 'react'

class BindingEventHandler extends Component {
  constructor() {
    super()

    this.state = {
      message: "Handle click"
    }

    // This is not needed when using arrow function syntax for the clickHandler method
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // Use arrow function syntax for the clickHandler method to avoid the need to bind 'this'
  clickHandler = () => {
    this.setState({
      message: "Goodbye!"
    })
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* This is not recommended because it creates a new function on each render */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default BindingEventHandler
