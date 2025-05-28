"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { StaggerItem } from "@/components/stagger-item"

export function Projects() {
  const projects = [
    {
      id: "profitfolio",
      title: "Profitfolio.in — Personal Stock Portfolio Tracker",
      description:
        "Developed a web-based stock portfolio tracker with ₹10 lakhs simulated capital, automating performance analytics using Python, R, and a responsive frontend—delivered via Vibe Coding.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["R", "Python", "HTML", "CSS"],
      liveUrl: "#",
      githubUrl: null,
      websiteUrl: true,
      date: "June 2024",
      organization: "Freelance Project via Vibe Coding",
    },
    {
      id: "carepulse",
      title: "CarePulse — Healthcare Appointment Platform",
      description:
        "Designed a responsive healthcare appointment platform using Next.js, HTML, and CSS. Collaborated with the UI/UX team to implement Figma prototypes into production-ready code. Enhanced user experience by optimizing appointment flow and integrating real-time feedback.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "HTML", "CSS", "Figma"],
      liveUrl: null,
      githubUrl: null,
      websiteUrl: false,
      date: "October 2024",
      organization: "Hindustan Innovation Lab",
    },
    {
      id: "frosty",
      title: "Frosty — Your Penguin AI Companion",
      description:
        "Built an interactive AI companion with a penguin persona using NLP and speech recognition technologies. Designed a responsive UI with support for dark/light mode.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "React", "Web Speech API", "HTML/CSS", "NLP"],
      liveUrl: null,
      githubUrl: "https://github.com/Gokulakrishnanx",
      websiteUrl: false,
      date: "April 2025",
      organization: "Hindustan Innovation Lab",
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection direction="up" className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index} direction="up">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group h-full">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="p-6 sm:p-8 pb-3 sm:pb-4">
                  <div className="flex flex-col space-y-1">
                    <CardTitle className="text-lg sm:text-xl font-medium text-gray-900">{project.title}</CardTitle>
                    <p className="text-xs text-gray-500">
                      {project.organization} • {project.date}
                    </p>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 sm:px-8 pb-4 sm:pb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-gray-50 text-gray-700 border-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 sm:gap-3 p-6 sm:p-8 pt-0 mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 sm:px-6 shadow-lg shadow-blue-600/25 transition-all duration-300 w-full sm:w-auto text-xs sm:text-sm"
                  >
                    <Link href={`/projects/${project.id}`}>
                      <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View Details
                    </Link>
                  </Button>
                  {project.websiteUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-2 border-gray-300 hover:border-gray-400 rounded-full px-4 sm:px-6 transition-all duration-300 w-full sm:w-auto text-xs sm:text-sm"
                    >
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Website
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-2 border-gray-300 hover:border-gray-400 rounded-full px-4 sm:px-6 transition-all duration-300 w-full sm:w-auto text-xs sm:text-sm"
                    >
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
