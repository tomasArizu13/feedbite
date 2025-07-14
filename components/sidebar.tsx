"use client"

import { Home, MessageCircle, BarChart, Bell, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/dashboard", label: "Inicio", icon: Home },
  { href: "/dashboard#reviews", label: "Reseñas", icon: MessageCircle },
  { href: "/dashboard#insights", label: "Insights", icon: BarChart },
  { href: "/dashboard#alerts", label: "Alertas", icon: Bell },
  { href: "/settings", label: "Configuración", icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block w-64 shrink-0 border-r bg-background">
      <div className="h-16 flex items-center justify-center border-b">
        <span className="font-bold text-lg">FeedBite</span>
      </div>
      <nav className="p-4 space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium
                hover:bg-muted transition-colors
                ${active ? "bg-muted font-semibold" : ""}`}
            >
              <Icon className="size-4" />
              {label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
