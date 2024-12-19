import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs }) => {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;

