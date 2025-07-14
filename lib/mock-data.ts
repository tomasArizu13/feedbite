import type { Review, Alert, InsightCategory, Metrics } from "./types"

export const mockMetrics: Metrics = {
  promedioEstrellas: 4.3,
  totalReseñas: 325,
  porcentajePositivas: 82,
}

export const mockReviews: Review[] = [
  {
    id: "1",
    usuario: "María González",
    fecha: "2024-01-15",
    puntaje: 5,
    texto: "Excelente comida y muy buen ambiente. El servicio fue impecable.",
    sentimiento: "Positivo",
  },
  {
    id: "2",
    usuario: "Carlos Rodríguez",
    fecha: "2024-01-14",
    puntaje: 3,
    texto: "La comida estaba bien pero tardaron mucho en servir.",
    sentimiento: "Neutro",
  },
  {
    id: "3",
    usuario: "Ana Martínez",
    fecha: "2024-01-13",
    puntaje: 2,
    texto: "Muy ruidoso y el servicio fue lento. No recomiendo.",
    sentimiento: "Negativo",
  },
  {
    id: "4",
    usuario: "Luis Fernández",
    fecha: "2024-01-12",
    puntaje: 4,
    texto: "Buena experiencia en general, la comida deliciosa.",
    sentimiento: "Positivo",
  },
  {
    id: "5",
    usuario: "Sofia López",
    fecha: "2024-01-11",
    puntaje: 5,
    texto: "Increíble atención al cliente y ambiente acogedor.",
    sentimiento: "Positivo",
  },
]

export const mockInsights: InsightCategory[] = [
  { categoria: "Comida", menciones: 145 },
  { categoria: "Atención", menciones: 98 },
  { categoria: "Ambiente", menciones: 76 },
  { categoria: "Precio", menciones: 52 },
]

export const mockAlerts: Alert[] = [
  {
    id: "1",
    frase: "tardaron en servir",
    frecuencia: 8,
    fecha: "2024-01-15",
    gravedad: "alta",
  },
  {
    id: "2",
    frase: "muy ruidoso",
    frecuencia: 5,
    fecha: "2024-01-14",
    gravedad: "media",
  },
  {
    id: "3",
    frase: "comida fría",
    frecuencia: 4,
    fecha: "2024-01-13",
    gravedad: "media",
  },
]

export const mockWordCloud = [
  "delicioso",
  "excelente",
  "recomendado",
  "sabroso",
  "fresco",
  "lento",
  "ruidoso",
  "caro",
  "pequeño",
  "sucio",
  "amable",
  "rápido",
  "limpio",
  "acogedor",
  "profesional",
]
