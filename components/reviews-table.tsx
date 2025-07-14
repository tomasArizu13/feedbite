import { Star } from "lucide-react"

type Review = {
  user: string
  date: string
  stars: number
  text: string
  sentiment: "Positivo" | "Neutro" | "Negativo"
}

// Mock data
const reviews: Review[] = [
  {
    user: "Juan P.",
    date: "2025-07-01",
    stars: 5,
    text: "¡La comida estuvo increíble!",
    sentiment: "Positivo",
  },
  {
    user: "María G.",
    date: "2025-06-28",
    stars: 3,
    text: "Servicio un poco lento.",
    sentiment: "Neutro",
  },
  {
    user: "Carlos R.",
    date: "2025-06-25",
    stars: 1,
    text: "Muy ruidoso y tardaron en servir.",
    sentiment: "Negativo",
  },
]

function SentimentBadge({ value }: { value: Review["sentiment"] }) {
  const color =
    value === "Positivo"
      ? "bg-green-100 text-green-700"
      : value === "Neutro"
        ? "bg-yellow-100 text-yellow-800"
        : "bg-red-100 text-red-700"

  return <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${color}`}>{value}</span>
}

export default function ReviewsTable() {
  return (
    <div className="overflow-x-auto rounded-lg border bg-background">
      <table className="min-w-full text-sm">
        <thead className="bg-muted/50">
          <tr className="text-left">
            <th className="px-4 py-3 font-medium">Usuario</th>
            <th className="px-4 py-3 font-medium">Fecha</th>
            <th className="px-4 py-3 font-medium">Puntaje</th>
            <th className="px-4 py-3 font-medium">Reseña</th>
            <th className="px-4 py-3 font-medium">Sentimiento</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((r) => (
            <tr key={r.text} className="border-t">
              <td className="px-4 py-2">{r.user}</td>
              <td className="px-4 py-2">{r.date}</td>
              <td className="px-4 py-2 flex items-center gap-1">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                ))}
              </td>
              <td className="px-4 py-2 max-w-xs">{r.text}</td>
              <td className="px-4 py-2">
                <SentimentBadge value={r.sentiment} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
