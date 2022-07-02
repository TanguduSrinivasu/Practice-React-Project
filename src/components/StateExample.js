import React, { Component } from "react";

class StateExample extends Component
{
    constructor()
    {
        super();
        this.state = {
            msg : 'Welcome Visitor'
        }

    }
    
    changeMsg()
    {
        // this.state.msg = "Thanks for Subscribing"   /* output will be displayed in console but not in UI so we use setState() to render the change in state */
        console.log(this.state.msg)
        this.setState({
            msg : 'Thanks for Subcribing'
       })
    }
    
    render()
    {
        return(
            <div>
                {/* <h1>Welcome Visitor</h1> */}
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changeMsg()}>Subcribe</button>
            </div>
        )
    }
}
export default StateExample