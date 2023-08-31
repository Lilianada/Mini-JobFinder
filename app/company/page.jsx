'use client'
import React from 'react';
import Hero from '@components/authorized/Company/CompanyHero';
import StepsToHire from '@components/authorized/Company/StepsToHire';
import CompanyService from '@components/authorized/Company/CompanyService';
import CompanyTeam from '@components/authorized/Company/CompanyTeam';

export default function HomePage() {
  return (
    <div className='main'>
      <Hero />
      <StepsToHire/>
      <CompanyService/>
      <CompanyTeam/>
    </div>
  )
}
