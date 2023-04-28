import React from 'react'

const propsWithArrow = (props) => {
  console.log(props);
  return (
    <div>
        <h2>I am {props.name} my age is {props.age}  </h2>
    </div>
  )
}

export default propsWithArrow