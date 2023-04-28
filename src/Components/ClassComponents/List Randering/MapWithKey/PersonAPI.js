import React from 'react'

function PersonAPI({person}) {
  return (
    <div>
       <h2>{person.name} {person.skill}</h2>
    </div>
  )
}

export default PersonAPI
