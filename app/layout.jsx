import React from 'react'
import './global.scss';

export const metadata = {
    title: "MinuJobs",
    description: "Hire the best talent or get hired for your dream job",
    keywords: "hire, talents, jobs, remote, malta"
}

export default function RootLayout ({
    children
}) {
  return (
    <html lang='en'>
        <body>
                {children}
            {/* <main className="app">
            </main> */}
        </body>
    </html>
  )
}
