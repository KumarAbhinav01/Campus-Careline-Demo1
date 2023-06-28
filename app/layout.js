import './globals.css'

export const metadata = {
  title: 'NIT Patna',
  description: 'Complaint Reporting Portal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
