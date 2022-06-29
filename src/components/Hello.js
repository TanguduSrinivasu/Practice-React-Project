import React from "react";

const Hello = () => 
{
    /* return(
  <div id='hello' className='dummyClass'>
    <h1>Using JSX for HTML</h1>
  </div>
  ) */

  return React.createElement('div',
  {id:'hello',className:'dummyClass'},
  React.createElement('h1',null,'Without Using JSX for HTML(regular HTML')
  )
}


export default Hello