import { redirect } from "next/navigation"

export default function Home() {
  // Simply push visitors to the dashboard route
  redirect("/dashboard")
  return null
}
