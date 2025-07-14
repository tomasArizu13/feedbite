import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, FileText, ThumbsUp } from "lucide-react"
import type { Metrics } from "@/lib/types"

interface MetricsCardsProps {
  metrics: Metrics
}

export default function MetricsCards({ metrics }: MetricsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Promedio de Estrellas</CardTitle>
          <Star className="h-4 w-4 text-yellow-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.promedioEstrellas}</div>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(metrics.promedioEstrellas) ? "text-yellow-500 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de Reseñas</CardTitle>
          <FileText className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.totalReseñas}</div>
          <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Reseñas Positivas</CardTitle>
          <ThumbsUp className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.porcentajePositivas}%</div>
          <p className="text-xs text-muted-foreground">+5% desde el mes pasado</p>
        </CardContent>
      </Card>
    </div>
  )
}
