"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts"

const barData = [
  { category: "Comida", mentions: 120 },
  { category: "Atención", mentions: 90 },
  { category: "Ambiente", mentions: 75 },
  { category: "Precio", mentions: 50 },
]

// simple word map
const keywords: { word: string; weight: string }[] = [
  { word: "delicioso", weight: "text-3xl" },
  { word: "rápido", weight: "text-xl" },
  { word: "ruidoso", weight: "text-lg" },
  { word: "económico", weight: "text-2xl" },
  { word: "tardado", weight: "text-lg" },
]

export default function Insights() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Horizontal bar chart */}
      <div className="h-64 w-full rounded-lg border bg-background p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={barData} margin={{ top: 10, right: 20, bottom: 10, left: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" hide />
            <Tooltip />
            <Bar dataKey="mentions" fill="#4f46e5" radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Word “cloud” (lightweight) */}
      <div className="h-64 flex items-center justify-center rounded-lg border bg-background p-4 flex-wrap gap-4">
        {keywords.map((k) => (
          <span key={k.word} className={`${k.weight} font-semibold text-primary capitalize`}>
            {k.word}
          </span>
        ))}
      </div>
    </div>
  )
}
