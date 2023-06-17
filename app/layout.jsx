import React from 'react'
import '@styles/global.css';

export const metadata = {
    title: "MinuJobs",
    description: "Hire the best talent or get hired for your dream job",
}

export default function RootLayout({
    children
}) {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}
