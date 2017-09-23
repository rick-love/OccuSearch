import React, { Component } from "react";
import Task from './Task'

class Home extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let title = this.title.value;
    let postalCode = this.postalCode.value;
  }

  render(){
    return(
      <div className="container">
        <div className="main-content-home">
          <h2>Welcome HOME</h2>
          <p>asdlfkjasldkfjalsdkjf</p>
          <p>Another Paragraph</p>
          <h3>Enter a title and Postal code</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Title" ref={ (input) => this.title = input }  />
            <input type="text" placeholder="Postal Code" ref={ (input) => this.postalCode = input }  />
            <button type="submit">Enter</button>
          </form>
          <hr />
        </div>
      </div>
    );
  }
}

export default Home;
