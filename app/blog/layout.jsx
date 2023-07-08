'use client'

import React from 'react'
import '../global.scss';
import Footer from '@components/unauthorized/Footer';
import UnauthorizedHeader from '@components/unauthorized/Header';

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
        <UnauthorizedHeader />
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
