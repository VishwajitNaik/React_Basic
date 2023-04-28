import React, { Component } from 'react'
import { ChildComp } from './ChildComp';

export class PassDataParentToChild extends Component {
  constructor(){
    super()

    this.state = {
        parentName : "Parent"
    }
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }

    render() {
    return (
      <div>
        <ChildComp greetHandler ={this.greetParent} />
      </div>
    )
  }
}

export default PassDataParentToChild
