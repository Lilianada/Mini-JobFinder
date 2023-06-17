import React from 'react'
import './global.scss';

export const metadata = {
    title: "MinuJobs",
    description: "Hire the best talent or get hired for your dream job",
}

export default function RootLayout ({
    children
}) {
  return (
    <html lang='en'>
        <body>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}
