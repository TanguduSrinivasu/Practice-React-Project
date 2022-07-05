import React from 'react'

/* function Person(props) {
  return (
    <div>
        <h2>ID is {props.person.id} Name is {props.person.name}  Age is {props.person.age} </h2>
    </div>
  )
} */

function Person({person}) {
    return (
      <div>
          <h2>ID is {person.id} Name is {person.name}  Age is {person.age} </h2>
      </div>
    )
  }

export default Person