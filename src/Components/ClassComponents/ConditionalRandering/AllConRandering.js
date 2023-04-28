import React, { Component } from 'react'

export class IfElse extends Component {
    constructor(){
        super()

        this.state = {
            isLoggedIn : false
        }
    }
    render() {
//Approch 1 :-
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Vishwa</div>
        // }
        // else{
        //     return <div>Welcome guest</div>
        // }

// approch 2 :-
        // let message;
        // if(this.state.isLoggedIn){
        //     message = "Hi Vishwa"
        // }else{
        //     message = "welcome guest"
        // }

//   return this.state.isLoggedIn &&
//   <div>Welcome Vishwa</div>

        return (
// approch 3 :-
        // this.state.isLoggedIn ? 
        // <div>Welcome Vishwa</div> : 
        // <div>Welcome Guest</div>
        <div></div>
        )
  }
}

export default IfElse
