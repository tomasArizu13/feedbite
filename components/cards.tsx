import { Star, ScrollText, Smile } from "lucide-react"

const metrics = [
  {
    title: "Promedio de estrellas",
    value: "4.3",
    icon: Star,
    color: "text-yellow-500",
  },
  {
    title: "Total de reseñas",
    value: "325",
    icon: ScrollText,
    color: "text-blue-500",
  },
  {
    title: "Reseñas positivas",
    value: "82%",
    icon: Smile,
    color: "text-green-500",
  },
]

export default function DashboardCards() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map(({ title, value, icon: Icon, color }) => (
        <div key={title} className="flex items-center gap-4 rounded-lg border bg-background p-5 shadow-sm">
          <Icon className={`size-8 ${color}`} />
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
