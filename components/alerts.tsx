import { AlertCircle, Info, CheckCircle } from "lucide-react"

type Level = "high" | "medium" | "low"
type Alert = { phrase: string; date: string; level: Level }

const alerts: Alert[] = [
  { phrase: "tardaron en servir", date: "2025-07-12", level: "high" },
  { phrase: "muy ruidoso", date: "2025-07-11", level: "medium" },
  { phrase: "sin opciones vegetarianas", date: "2025-07-10", level: "low" },
]

function iconFor(level: Level) {
  const base = "size-5"
  if (level === "high") return <AlertCircle className={`${base} text-red-600`} />
  if (level === "medium") return <Info className={`${base} text-yellow-600`} />
  return <CheckCircle className={`${base} text-green-600`} />
}

export default function Alerts() {
  return (
    <ul className="space-y-4">
      {alerts.map((a) => (
        <li key={a.phrase} className="flex items-center gap-4 rounded-lg border bg-background p-4">
          {iconFor(a.level)}
          <div className="flex-1">
            <p className="font-medium">{a.phrase}</p>
            <p className="text-xs text-muted-foreground">{a.date}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
