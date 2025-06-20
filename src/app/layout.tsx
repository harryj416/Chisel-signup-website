import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chisel - Get Your Aesthetic Blueprint",
  description: "Join the waitlist for Chisel - get your personalized Aesthetic Blueprint and transform your physique. The fastest way to sculpt your dream body.",
  keywords: ["chisel", "aesthetic", "physique", "fitness", "transformation", "blueprint", "gymtok"],
  openGraph: {
    title: "Chisel - Get Your Aesthetic Blueprint", 
    description: "Join the waitlist for Chisel. Get your personalized Aesthetic Blueprint and transform your physique with AI-powered guidance.",
    type: "website",
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