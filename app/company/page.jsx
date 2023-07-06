'use client'
import Hero from '@components/authorized/company/CompanyHero';
import React from 'react';
import StepsToHire from '@components/authorized/company/StepsToHire';
import CompanyService from '@components/authorized/company/CompanyService';
import CompanyTeam from '@components/authorized/company/CompanyTeam';

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
