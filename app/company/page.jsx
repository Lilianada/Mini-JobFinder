'use client'
import ExpectationSection from '@components/authorized/ExpectationSection';
import Hero from '@components/authorized/company/Hero';
// import Hero from '@components/authorized/Hero';
import React from 'react';

export default function HomePage() {
  return (
    <div className='main'>
      <Hero />
      <ExpectationSection/>
    </div>
  )
}
