"use client"

import { Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="h-16 flex items-center justify-between px-4 border-b bg-background">
      <div className="flex items-center gap-2">
        {/* Mobile menu placeholder */}
        <button className="md:hidden p-2">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </button>
        <h1 className="text-lg font-semibold">Restaurante Demo</h1>
      </div>
      <Image
        src="/placeholder.svg?width=40&height=40"
        width={40}
        height={40}
        alt="avatar"
        className="rounded-full bg-muted"
      />
    </header>
  )
}
