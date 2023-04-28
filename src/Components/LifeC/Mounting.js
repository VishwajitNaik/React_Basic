import React, { Component } from 'react'

export class Mounting extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name: "Vishwajit"
   }
   console.log('life cycle constructor');
 }

 static getDerivedStateFromProps(props, state){
    console.log("Life cycle getDerivedStateFromProps");
    return null;
 }
 
 componentDidMount(){
    console.log('life Cylce Compnent Didmount');
 }

    render() {
        console.log('life of rander');
        return (
      <div>
            <h1>Retrur Life cycle</h1>
      </div>
    )
  }
}

export default Mounting
