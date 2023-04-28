import React, { Component, PureComponent } from 'react'
import ReqCom from './ReqCom'
import PureComponetn from './PureComponetn'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Vishwajit"
      }
    }
    
    componentDidMount () {
        setInterval(() => {
          this.setState({
            name: "Vishwajit"
          })
        }, 2000)
      }
      

  render() {
    
    console.log(this.state.name);
    return (
      <div>
        Parent Component
        <ReqCom name={this.state.name} />
        <PureComponetn name = {this.state.name} />
      </div>
    )
  }
}

export default ParentComp
