import React from 'react'

function Child(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        {/* If you want to pass the parameter from child to the parent method use arrow function */}
        <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default Child;