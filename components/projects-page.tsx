"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, ArrowRight, Search, Calendar, Building, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { StaggerItem } from "@/components/stagger-item"
import { ParallaxHero } from "@/components/parallax-hero"
import { useState } from "react"

export function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: "profitfolio",
      title: "Profitfolio.in — Personal Stock Portfolio Tracker",
      description:
        "Developed a comprehensive web-based stock portfolio tracker with ₹10 lakhs simulated capital, automating performance analytics using Python, R, and a responsive frontend—delivered via Vibe Coding.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["R", "Python", "HTML", "CSS", "JavaScript", "Data Analytics"],
      category: "web-development",
      liveUrl: "#",
      githubUrl: null,
      websiteUrl: true,
      date: "June 2024",
      duration: "3 months",
      organization: "Freelance Project via Vibe Coding",
      role: "Full-Stack Developer",
      featured: true,
      status: "completed",
    },
    {
      id: "carepulse",
      title: "CarePulse — Healthcare Appointment Platform",
      description:
        "Designed a responsive healthcare appointment platform using Next.js, HTML, and CSS. Collaborated with the UI/UX team to implement Figma prototypes into production-ready code. Enhanced user experience by optimizing appointment flow and integrating real-time feedback.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "HTML", "CSS", "Figma", "JavaScript", "React"],
      category: "web-development",
      liveUrl: null,
      githubUrl: null,
      websiteUrl: false,
      date: "October 2024",
      duration: "2 months",
      organization: "Hindustan Innovation Lab",
      role: "Frontend Developer & UI/UX Collaborator",
      featured: true,
      status: "completed",
    },
    {
      id: "frosty",
      title: "Frosty — Your Penguin AI Companion",
      description:
        "Built an interactive AI companion with a penguin persona using NLP and speech recognition technologies. Designed a responsive UI with support for dark/light mode.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "React", "Web Speech API", "HTML/CSS", "NLP", "Machine Learning"],
      category: "ai-ml",
      liveUrl: null,
      githubUrl: "https://github.com/Gokulakrishnanx",
      websiteUrl: false,
      date: "April 2025",
      duration: "4 months",
      organization: "Hindustan Innovation Lab",
      role: "AI Developer & Frontend Developer",
      featured: true,
      status: "in-progress",
    },
    {
      id: "code-arena",
      title: "Code-Arena — Programming Contest Platform",
      description:
        "A competitive programming platform for hosting coding contests and challenges. Features real-time leaderboards, automated judging system, and comprehensive problem management.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
      category: "web-development",
      liveUrl: null,
      githubUrl: "https://github.com/Gokulakrishnanx",
      websiteUrl: false,
      date: "March 2024",
      duration: "2 months",
      organization: "Personal Project",
      role: "Full-Stack Developer",
      featured: false,
      status: "completed",
    },
    {
      id: "website-scraping",
      title: "Website-Scraping — Data Extraction Tool",
      description:
        "Developed a comprehensive web scraping tool for extracting and analyzing data from various websites. Implements advanced scraping techniques with data cleaning and export functionality.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Data Analysis"],
      category: "data-science",
      liveUrl: null,
      githubUrl: "https://github.com/Gokulakrishnanx",
      websiteUrl: false,
      date: "February 2024",
      duration: "1 month",
      organization: "Personal Project",
      role: "Data Engineer",
      featured: false,
      status: "completed",
    },
    {
      id: "flipkart-reviews",
      title: "Flipkart-reviewscraping — E-commerce Analytics",
      description:
        "Built a specialized scraping tool for analyzing Flipkart product reviews and ratings. Provides insights into customer sentiment and product performance metrics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Web Scraping", "Data Analysis", "Sentiment Analysis"],
      category: "data-science",
      liveUrl: null,
      githubUrl: "https://github.com/Gokulakrishnanx",
      websiteUrl: false,
      date: "January 2024",
      duration: "3 weeks",
      organization: "Personal Project",
      role: "Data Analyst",
      featured: false,
      status: "completed",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "web-development",
      label: "Web Development",
      count: projects.filter((p) => p.category === "web-development").length,
    },
    { id: "ai-ml", label: "AI & Machine Learning", count: projects.filter((p) => p.category === "ai-ml").length },
    { id: "data-science", label: "Data Science", count: projects.filter((p) => p.category === "data-science").length },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <ParallaxHero className="text-center mb-12 sm:mb-16 lg:mb-20">
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
              My Projects
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my skills in web development, AI/ML, and data science. Each project
              represents a unique challenge and learning experience.
            </p>
          </AnimatedSection>
        </ParallaxHero>

        {/* Stats Section */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl text-center p-6">
              <div className="text-3xl font-light text-blue-600 mb-2">{projects.length}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl text-center p-6">
              <div className="text-3xl font-light text-green-600 mb-2">
                {projects.filter((p) => p.status === "completed").length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl text-center p-6">
              <div className="text-3xl font-light text-purple-600 mb-2">
                {new Set(projects.flatMap((p) => p.technologies)).size}
              </div>
              <div className="text-sm text-gray-600">Technologies</div>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl text-center p-6">
              <div className="text-3xl font-light text-orange-600 mb-2">
                {projects.filter((p) => p.featured).length}
              </div>
              <div className="text-sm text-gray-600">Featured</div>
            </Card>
          </div>
        </AnimatedSection>

        {/* Featured Projects */}
        <AnimatedSection direction="up" delay={0.4} className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-light mb-8 text-gray-900 text-center">Featured Projects</h2>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <StaggerItem key={project.id} direction="up">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group h-full">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader className="p-6 sm:p-8 pb-3 sm:pb-4">
                    <div className="flex flex-col space-y-2">
                      <CardTitle className="text-lg sm:text-xl font-medium text-gray-900 line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Building className="mr-1 h-3 w-3" />
                          {project.organization}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {project.date}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed mt-2 line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 sm:px-8 pb-4 sm:pb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="bg-gray-50 text-gray-700 border-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="bg-gray-50 text-gray-700 border-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs font-medium"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 p-6 sm:p-8 pt-0 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 shadow-lg shadow-blue-600/25 transition-all duration-300 flex-1 text-xs"
                    >
                      <Link href={`/projects/${project.id}`}>
                        <ArrowRight className="mr-2 h-3 w-3" />
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection direction="up" delay={0.5} className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-2 border-gray-200 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full text-xs"
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* All Projects Grid */}
        <AnimatedSection direction="up" delay={0.6}>
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900">All Projects ({filteredProjects.length})</h2>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
            </div>
          ) : (
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <StaggerItem key={project.id} direction="up">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg shadow-gray-200/50 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge
                          variant={project.status === "completed" ? "default" : "secondary"}
                          className={
                            project.status === "completed" ? "bg-green-600 text-white" : "bg-yellow-500 text-white"
                          }
                        >
                          {project.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                      </div>
                      {project.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-blue-600 text-white">Featured</Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-3">
                      <CardTitle className="text-base sm:text-lg font-medium text-gray-900 line-clamp-2 mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <div className="flex items-center">
                          <User className="mr-1 h-3 w-3" />
                          {project.role}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {project.date}
                        </div>
                      </div>
                      <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 sm:px-6 pb-3 sm:pb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="bg-gray-50 text-gray-700 border-gray-200 rounded-full px-2 py-0.5 text-xs font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge
                            variant="outline"
                            className="bg-gray-50 text-gray-700 border-gray-200 rounded-full px-2 py-0.5 text-xs font-medium"
                          >
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 p-4 sm:p-6 pt-0 mt-auto">
                      <Button asChild size="sm" variant="outline" className="rounded-full flex-1 text-xs">
                        <Link href={`/projects/${project.id}`}>
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Details
                        </Link>
                      </Button>
                      {project.githubUrl && (
                        <Button asChild size="sm" variant="outline" className="rounded-full">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </Link>
                        </Button>
                      )}
                      {project.websiteUrl && (
                        <Button asChild size="sm" variant="outline" className="rounded-full">
                          <Link href="#" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection
          direction="up"
          delay={0.7}
          className="text-center mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-200"
        >
          <h3 className="text-2xl sm:text-3xl font-light mb-4 text-gray-900">Interested in Working Together?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full">
              <Link href="#contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/resume/Gokulakrishnan_Resume.pdf" target="_blank" download="Gokulakrishnan_Resume.pdf">
                Download Resume
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
