import React, { Component } from 'react'

export class PropsWithoutPropsInClass extends Component {
     
  render() {
    const {name, age, fev} = this.props
    return (
      <div>
        <h1>{name} {age} {fev}</h1>
      </div>
    )
  }
}

export default PropsWithoutPropsInClass
