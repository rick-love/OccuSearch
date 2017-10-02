import React, { Component } from "react";
import Task from './Task';
import './App.css';

class Home extends Component {

  constructor() {
    super();
    this.addTitle = this.addTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
    jobs: [],
    title: ''
  };


}

handleSubmitTitle(e){
  e.preventDefault();
  const self = this;
  fetch(`https://, {
        method: 'GET',
        headers: {
        'Authorization': 'Bearer ' + ' '
      }

    })
    .then(r=>r.json())
    .then(function(data) {
      self.setState({
        jobs: data.Jobs
      })
    });
}

  handleChange({ target }) {
    this.setState({
      title: target.value
    });
  }

  addTitle(e){
    e.preventDefault();
    const title = this.setState
  }

  render(){
    let jobs = this.state.jobs;
    console.log(this.state.jobs)
    console.log(this.state.title)

    return(
      <div className="container">
        <div className="homeContent">
          <h1 className="appName text-center">OccuSearch</h1>
          <p className="appDescription text-center">Occupation Search and task managmenet application.</p>
          <hr />
      <div className="searchForm">
        <h3 className="text-center">Search for your dream job!</h3>
          <form  className="centerForm" onSubmit={this.handleSubmitTitle.bind((this))}>
            <input className="searchInput"
            type="text"
            placeholder="Search by skillset..."
            name="title"
            value={ this.state.title }
            onChange= { this.handleChange }
            />
            <button className="searchButton"
            value="Send"
            >Enter</button>
          </form>
      </div>
        </div>
        <div>

            {this.state.jobs.map(function(job, key) {
              return (
                <div className="jobWrapper">
                  <div key={job.id} className="job">
                      {job.Company} is looking for a {job.JobTitle}<br />
                    <div className="jobLink">
                      <a target="_blank" href={job.URL}>View this opportunity</a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Home;
