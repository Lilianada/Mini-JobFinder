'use client'
import ExpectationSection from '@components/authorized/ExpectationSection';
import Footer from '@components/authorized/Footer';
import Hero from '@components/authorized/Hero';
import React from 'react';

export default function HomePage() {
  return (
    <div className='main'>
      <Hero />
      <ExpectationSection/>
      <Footer/>
    </div>
  )
}
