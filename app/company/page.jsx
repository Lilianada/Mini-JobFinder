'use client'
import ExpectationSection from '@components/authorized/company/StepsToHire';
import Hero from '@components/authorized/company/CompanyHero';
import React from 'react';
import StepsToHire from '@components/authorized/company/StepsToHire';

export default function HomePage() {
  return (
    <div className='main'>
      <Hero />
      <StepsToHire/>
    </div>
  )
}
