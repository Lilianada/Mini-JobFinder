'use client'
// import ExpectationSection from '@components/authorized/ExpectationSection';
import Hero from '@components/authorized/Hero';
import AppliedJobs from '@components/authorized/candidate/AppliedJobs';
import ExpectationSection from '@components/authorized/candidate/ExpectationSection';
import SavedJobs from '@components/authorized/candidate/SavedJobs';
import React from 'react';

export default function HomePage() {
  return (
    <div className='main'>
      <Hero />
      {/* <ExpectationSection/> */}
      <SavedJobs/>
      <AppliedJobs/>
    </div>
  )
}
