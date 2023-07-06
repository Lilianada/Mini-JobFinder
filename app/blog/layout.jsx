'use client'

import React from 'react'
import '../global.scss';
// import UnauthorizedHeader from '@components/unauthorized/Header';
import Footer from '@components/unauthorized/Footer';
import CandidateHeader from '@components/authorized/AuthorizedHeader/CandidateHeader';

// export const metadata = {
//     title: "MinuJobs",
//     description: "Hire the best talent or get hired for your dream job",
//     keywords: "hire, talents, jobs, remote, malta"
// }

export default function BlogLayout ({
    children
}) {
  return (
    <html lang='en'>
        <body>
        <CandidateHeader />
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
