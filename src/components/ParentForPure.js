import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentForPure extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Srinu'
      }
    }

    componentDidMount()
    {
        setInterval(() => {
            this.setState({
              name : 'Srinu'  
            })
        },1000)
    }


  render() {

    console.log('***Parent Component***')
    return (
      <div>Parent Component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name} ></PureComp>
      </div>  
    )
  }
}

export default ParentForPure