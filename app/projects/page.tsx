import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsPage } from "@/components/projects-page"

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      <main className="pt-20">
        <ProjectsPage />
      </main>
      <Footer />
    </div>
  )
}
