import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, AlertCircle, Info } from "lucide-react"
import type { Alert } from "@/lib/types"

interface AlertsSectionProps {
  alerts: Alert[]
}

export default function AlertsSection({ alerts }: AlertsSectionProps) {
  const getAlertIcon = (gravedad: string) => {
    switch (gravedad) {
      case "alta":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "media":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getAlertColor = (gravedad: string) => {
    switch (gravedad) {
      case "alta":
        return "bg-red-100 text-red-800 border-red-200"
      case "media":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alertas Recientes</CardTitle>
        <p className="text-sm text-gray-500">Frases repetidas más de 3 veces en los últimos 7 días</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className={`p-4 rounded-lg border ${getAlertColor(alert.gravedad)}`}>
              <div className="flex items-start space-x-3">
                {getAlertIcon(alert.gravedad)}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">"{alert.frase}"</h4>
                    <Badge variant="outline">{alert.frecuencia} menciones</Badge>
                  </div>
                  <p className="text-sm mt-1">Última mención: {new Date(alert.fecha).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
