export interface Review {
  id: string
  usuario: string
  fecha: string
  puntaje: number
  texto: string
  sentimiento: "Positivo" | "Neutro" | "Negativo"
}

export interface Alert {
  id: string
  frase: string
  frecuencia: number
  fecha: string
  gravedad: "alta" | "media" | "baja"
}

export interface InsightCategory {
  categoria: string
  menciones: number
}

export interface Metrics {
  promedioEstrellas: number
  totalReseñas: number
  porcentajePositivas: number
}
