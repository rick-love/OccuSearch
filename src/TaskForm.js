import React, {Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskContent: '',
    };
     this.handleUserInput = this.handleUserInput.bind(this);
     this.writeTask = this.writeTask.bind(this);
  }
// Sets newTaskContent to value of input box
handleUserInput(e){
  this.setState({
    newTaskContent: e.target.value, //value of text input
  })
}

writeTask(){
  //calls method that sets taskContent for a task to the value of input
  this.props.addTask(this.state.newTaskContent);

  //set newTaskContent to empty string
  this.setState({
    newTaskContent: '',
  })
}

render(){
  return(
    <div className="formWrapper">
      <input className="taskInput"
      placeholder="Enter a task...."
      value={this.state.newTaskContent}
      onChange={this.handleUserInput} />
      <button className="taskButton"
      onClick={this.writeTask}>Add a Task</button>

    </div>

    )
  }
}
export default TaskForm;
