import React, { Component } from 'react'

export class propswithClass extends Component {
  render() {
    return (
      <div>
        <h3>My name is {this.props.name} my age is {this.props.age}</h3>
      </div>
    )
  }
}

export default propswithClass
