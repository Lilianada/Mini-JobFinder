import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function JobListingsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobListings();
  }, []);

  const fetchJobListings = async () => {
    try {
      const response = await axios.get('/api/jobListings'); // Replace with your API endpoint
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching job listings:', error);
    }
  };

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.salary}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}
