// import React from 'react'

// export default function EventHandling() {

// function clickHnadler (){
//     console.log("Button Clicked");
// }

//   return (
//     <div>
//     {/* <button onClick={clickHnadler()}></button> _Not Working___ */}
//     <button onClick={clickHnadler}></button>  
//     </div>
//   )
// }


// with class component 

import React, { Component } from 'react'

export class EventHandling extends Component {

    clickHandler () {
        console.log("Clicked th btn");
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>FoUr Core Katas </button>
      </div>
    )
  }
}

export default EventHandling

