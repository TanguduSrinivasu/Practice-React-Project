import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {

  constructor() {
    super();
    this.state = {
      parentName: "Parent",
    }

    this.greetParent = this.greetParent.bind(this);

  }

  greetParent(childName) {
    //template literals we can use alert('Hello '+ this.state.parentName)
    /* alert(`Hello ${this.state.parentName}`); */ 
    alert(`Hello ${this.state.parentName} from ${childName}`) 
  }

  render() {
    return <div>
        <Child greetHandler={this.greetParent}></Child>
    </div>;
  }
}

export default Parent;
