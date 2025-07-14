"use client"

import { useState } from "react"
import Sidebar from "./components/sidebar"
import Navbar from "./components/navbar"
import MetricsCards from "./components/metrics-cards"
import ReviewsTable from "./components/reviews-table"
import InsightsSection from "./components/insights-section"
import AlertsSection from "./components/alerts-section"
import { mockMetrics, mockReviews, mockInsights, mockAlerts, mockWordCloud } from "./lib/mock-data"

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("inicio")

  const renderContent = () => {
    switch (activeSection) {
      case "inicio":
        return (
          <div>
            <MetricsCards metrics={mockMetrics} />
            <ReviewsTable reviews={mockReviews} />
            <InsightsSection insights={mockInsights} wordCloud={mockWordCloud} />
            <AlertsSection alerts={mockAlerts} />
          </div>
        )
      case "reseñas":
        return <ReviewsTable reviews={mockReviews} />
      case "insights":
        return <InsightsSection insights={mockInsights} wordCloud={mockWordCloud} />
      case "alertas":
        return <AlertsSection alerts={mockAlerts} />
      case "configuración":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Configuración</h2>
            <p className="text-gray-500">Panel de configuración en desarrollo</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar restaurantName="Restaurante El Buen Sabor" />

        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
