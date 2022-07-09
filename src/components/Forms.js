import React, { Component } from 'react'

class Forms extends Component {

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
  this.handlerFormSubmit = this.handlerFormSubmit.bind(this)
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

handlerFormSubmit()
{
    alert(`${this.state.username} ${this.state.comment} ${this.state.language}`)
}



  render() {
    return (
       <form onSubmit={this.handlerFormSubmit}>
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
        <button type='submit'>Submit</button>
        </div>
     </form>
    )
  }
}

export default Forms