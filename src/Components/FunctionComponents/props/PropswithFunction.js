import React from 'react'

function propswithFunction(props) {
  console.log(props);
  return (
    <div>
      <p>{props.children}</p>
      <h1>I am {props.name} and my age {props.age} </h1>
    </div>
  )
}

export default propswithFunction
