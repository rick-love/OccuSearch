import React from 'react';
import NoJobs from './NoJobs';

export default JobList;

const JobList = props => {
  const results = props.data;
  let jobs;

  if results.length > 0) {
    jobs = results.map(job => <Job />)
  } else {
    jobs = <NoJobs />
  }

  return(
    <ul className="job-list">
    {jobs}
    </ul>
  );
}

export default JobList;
