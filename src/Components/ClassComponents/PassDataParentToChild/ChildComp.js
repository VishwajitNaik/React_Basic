import React from 'react'

export const ChildComp = (props) => {
  return (
    <div>
        <button onClick={props.greetHandler('child')}>greet parant</button>
    </div>
  )
}
