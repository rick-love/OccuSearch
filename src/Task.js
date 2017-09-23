import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskForm from "./TaskForm";
import firebase from 'firebase/app';
import 'firebase/database';
import { DB_CONFIG } from './Config/config';

class Task extends Component {

  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('tasks');
    this.handleRemoveTask = this.handleRemoveTask.bind(this);


    this.state = {
      tasks: [],
    }

    // this.taskContent = props.taskContent;
    this.taskId = props.taskId;
    this.key = props.taskId;

    this.message = "Here are your tasks";

  }

  componentWillMount(){
    const previousTasks = this.state.tasks;

    this.database.on('child_added', snap => {
      previousTasks.push({
      id: snap.key,
      taskContent: snap.val().taskContent,
      })

      this.setState({
        tasks: previousTasks
      })
    })

    this.database.on('child_removed', snap => {
      for(var i = 0; i < previousTasks.length; i++){
        if(previousTasks[i].id === snap.key){
          previousTasks.splice(i, 1);
        }
      }
      this.setState({
        tasks: previousTasks
      })
    })
  }


  addTask(task){
    this.database.push().set({ taskContent: task });
  }

  removeTask(taskId){
    this.database.child(taskId).remove();
  }

  handleRemoveTask(id){
    this.props.removeTask(id);
  }


  render(props) {
    return (
        <div className="taskWrapper">
          <div className="taskHeader">
            <div className="heading"><h1>{this.message}</h1></div>
          </div>
          <div className="taskBody">
          {
            this.state.tasks.map((task) => {
              return (
                <div>{task.taskContent}{task.Id}{this.removeTask}
                <span className="closebtn"
                  onClick={() => this.handleRemoveTask(this.taskId)}>
                  &times;
                  </span>
                  </div>
              );
            })
          }

          </div>
        <div className="taskFooter">
          <TaskForm addTask={this.addTask}/>
        </div>

        </div>
    );
  }
}

Task.propTypes = {
  taskContent: PropTypes.string.isRequired
}

export default Task;
