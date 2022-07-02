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