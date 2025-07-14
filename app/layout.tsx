import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Feedbite",
  description: "",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex bg-muted/20 min-h-screen text-foreground antialiased">
        {/* LEFT – navigation */}
        <Sidebar />

        {/* RIGHT – page stack */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
