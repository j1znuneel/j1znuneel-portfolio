import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jishnu PN - Portfolio",
  description: "Portfolio of Jishnu PN",
  keywords: ["portfolio", "developer", "j1znuneel", "github"],
  authors: [{ name: "Jishnu PN" }],
  openGraph: {
    title: "Jishnu PN - Portfolio",
    description: "Portfolio of Jishnu PN",
    images: ["https://avatars.githubusercontent.com/u/201781483?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jishnu PN - Portfolio",
    description: "Portfolio of Jishnu PN",
    images: ["https://avatars.githubusercontent.com/u/201781483?v=4"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}