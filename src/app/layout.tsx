import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HealthyMe',
  description: 'The Figma Designs for the HealthyMe app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full overflow-auto m-0 p-0">
      <body className="h-full">{children}</body>
    </html>
  )
}
