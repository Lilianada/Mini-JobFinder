"use client"
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
     
    </div>
  );
}
