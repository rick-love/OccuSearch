import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskForm from "./TaskForm";
import firebase from 'firebase';
import 'firebase/database';
import { DB_CONFIG } from './Config/config';
import './App.css';

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

    this.taskContent = props.taskContent;
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

    var removeTaskData = firebase.database().ref('tasks/'+id);
    console.log(id);
    removeTaskData.remove()
    .then(function() {
      console.log("remove success")
    })
    .catch(function(error) {
      console.log("Remove failed" + error.message)
    })
    this.setState({
      tasks: this.state.tasks
    });
  }


  render(props) {
    return (
        <div className="taskWrapper">
          <div className="taskHeader">
            <div className="heading"><h1>{this.message}</h1></div>
          </div>
          <div className="taskBody">
          {
            this.state.tasks.map((task, key) => {
              return (
                <div className="taskContent"
                key={task.id}>
                {task.taskContent}
                <div className="closebtn"
                  onClick={() => this.handleRemoveTask(task.id)}>
                  X
                  </div>
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
  taskContent: PropTypes.string
}

export default Task;
