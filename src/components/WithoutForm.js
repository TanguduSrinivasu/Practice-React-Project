import React, { Component } from 'react'

class WithoutForm extends Component {

constructor() {
  super()
  this.state = {
     username : '',
     comment : '',
     language : 'Vue' 
  }
  this.handlerInputChange = this.handlerInputChange.bind(this)
  this.handlerTextChange = this.handlerTextChange.bind(this)
  this.handlerSelectChange = this.handlerSelectChange.bind(this)
  this.handlerSubmit = this.handlerSubmit.bind(this)
}

handlerInputChange(event)
{
    this.setState(
        {
            username : event.target.value
        }
    )
    
}

/* handlerInputChange = (event) => {
    this.setState(
        {
            username : event.target.value
        }
    )
} */

handlerTextChange(event)
{
    this.setState(
        {
            comment : event.target.value
        }
    )
}

handlerSelectChange(event)
{
    this.setState(
        {
            language : event.target.value
        }
    )
}

handlerSubmit(event)
{
    alert(`Username:  ${this.state.username} Comment: ${this.state.comment} Language: ${this.state.language}`)
    event.preventDefault()
}


  render() {
    return (
       <div>
        <label>Without Form</label>
        <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handlerInputChange}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.handlerTextChange}></textarea>
        </div>
        <div>
            <label>Language</label>
            <select value={this.state.language} onChange={this.handlerSelectChange}>
                <option value='React'>React</option>
                <option value='Angular'>Angular</option>
                <option value='Vue'>Vue</option>
            </select>
        </div>
        <div>
        <button onClick={this.handlerSubmit}>Submit</button>
        </div>
     </div>
    )
  }
}

export default WithoutForm