import React from 'react'

function FunClick() {

    function clickHandler()
    {
        console.log('Button Clicked')
    }

  return (
    <div>
        {/* <button onClick={() => clickHandler()}>ClickMe</button> */}
        <button onClick={clickHandler}>ClickMe</button>
    </div>
  )
}
//While adding eventHandler it not be function call it should be function if we give function call
//without clicking button o/p will be displayed and when we click the button nothing will be displayed

export default FunClick