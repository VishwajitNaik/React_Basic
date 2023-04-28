import React from 'react'
import PersonAPI from './PersonAPI'

function Person () {
    const persons = [
        {
            id : 1,
            name: "Vishwajit",
            skill : "react"
        },
        {
            id : 2,
            name: "Vaibhav",
            skill : "Gate"
        },
        {
            id : 3,
            name: "Rohit",
            skill : "Design"
        },
        {
            id : 4,
            name: "Amol",
            skill : "CAd"
        },
        {
            id : 5,
            name: "rutik",
            skill : "Angular"
        }]
    const personList = persons.map((person)=> <PersonAPI key={person.id} person={person} />)
  return (
    <div>
       {personList}
    </div>
  )
}

export default Person