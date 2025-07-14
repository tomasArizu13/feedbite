import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { InsightCategory } from "@/lib/types"

interface InsightsSectionProps {
  insights: InsightCategory[]
  wordCloud: string[]
}

export default function InsightsSection({ insights, wordCloud }: InsightsSectionProps) {
  const maxMenciones = Math.max(...insights.map((item) => item.menciones))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Menciones por Categoría</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((item) => (
              <div key={item.categoria} className="flex items-center space-x-4">
                <div className="w-20 text-sm font-medium">{item.categoria}</div>
                <div className="flex-1">
                  <div className="bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{
                        width: `${(item.menciones / maxMenciones) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div className="text-sm font-bold text-gray-700">{item.menciones}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Palabras Clave Más Usadas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {wordCloud.map((word, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  fontSize: `${Math.random() * 0.5 + 0.8}rem`,
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
