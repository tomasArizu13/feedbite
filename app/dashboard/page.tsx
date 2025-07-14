import DashboardCards from "@/components/cards"
import ReviewsTable from "@/components/reviews-table"
import Insights from "@/components/insights"
import Alerts from "@/components/alerts"

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <DashboardCards />

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Reseñas recientes</h2>
        <ReviewsTable />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Insights de IA</h2>
        <Insights />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Alertas</h2>
        <Alerts />
      </section>
    </div>
  )
}
