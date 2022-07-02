import React, { Component } from "react";

class Count extends Component {
    
    constructor() {
      super();
      this.state = {
         count : 0
      }
    }

    increment()
    {
 /*     this.state.count = this.state.count + 1;
        console.log(this.state.count) */
        // ------ count will be updated in console but it cannot be re-rendered in the UI inorder to make it updated
        // we need to use setState() method 
     /*     this.setState({
            count : this.state.count+1
        })
        console.log(this.state.count) */

        // ------ console output value is 1 lessthan the rendered value in the UI
        // This is because calls to the setState() are asynchronous 
        // Here console.log is called before the setState()is actually set
        // So whenever the code has to be executed after the state has been updated  then place the code in callback function
        // which is second argument to the setState().
        
      /*this.setState({
        count:this.state.count+1
       }, 
       () => {
        console.log('Callback ' + this.state.count)
       })
       console.log('count '+ this.state.count)
     } */

     this.setState((prevState) => ({
        count : prevState.count + 1
        })
       ,
       () => {
           console.log('Callback ' + this.state.count)
          }        
       )  
    }

    // when you have to update the state based on the previous state , 
    // pass in function as an argument instead of regular object

    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()    
    }

    render()
    {
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }

}

export default Count;
