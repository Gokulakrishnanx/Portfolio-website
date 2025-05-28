"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, User, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { StaggerItem } from "@/components/stagger-item"
import { ParallaxHero } from "@/components/parallax-hero"

interface Project {
  id: string
  title: string
  subtitle: string
  organization: string
  date: string
  duration: string
  role: string
  technologies: string[]
  overview: string
  challenge: string
  solution: string
  features: string[]
  results: string[]
  learnings: string[]
  images: string[]
  websiteUrl: string | null
  githubUrl: string | null
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <AnimatedSection direction="fade" delay={0.1}>
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        {/* Hero Section */}
        <ParallaxHero className="mb-12 sm:mb-16">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-gray-900 tracking-tight">
              {project.title}
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">{project.subtitle}</p>
          </AnimatedSection>

          {/* Project Meta */}
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StaggerItem>
              <div className="flex items-center text-gray-600">
                <Building className="mr-2 h-4 w-4" />
                <span className="text-sm">{project.organization}</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="text-sm">{project.date}</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center text-gray-600">
                <Clock className="mr-2 h-4 w-4" />
                <span className="text-sm">{project.duration}</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center text-gray-600">
                <User className="mr-2 h-4 w-4" />
                <span className="text-sm">{project.role}</span>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Action Buttons */}
          <StaggerContainer className="flex flex-wrap gap-3">
            {project.websiteUrl && (
              <StaggerItem>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Link>
                </Button>
              </StaggerItem>
            )}
            {project.githubUrl && (
              <StaggerItem>
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
              </StaggerItem>
            )}
          </StaggerContainer>
        </ParallaxHero>

        {/* Main Image */}
        <AnimatedSection direction="scale" delay={0.4} className="mb-12 sm:mb-16">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image src={project.images[0] || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Overview */}
            <AnimatedSection direction="up" delay={0.1}>
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900">Overview</h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{project.overview}</p>
              </section>
            </AnimatedSection>

            {/* Challenge */}
            <AnimatedSection direction="up" delay={0.2}>
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900">Challenge</h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{project.challenge}</p>
              </section>
            </AnimatedSection>

            {/* Solution */}
            <AnimatedSection direction="up" delay={0.3}>
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900">Solution</h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{project.solution}</p>
              </section>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection direction="up" delay={0.4}>
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900">Key Features</h2>
                <StaggerContainer>
                  {project.features.map((feature, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start mb-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-base sm:text-lg">{feature}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>
            </AnimatedSection>

            {/* Results */}
            <AnimatedSection direction="up" delay={0.5}>
              <section>
                <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900">Results & Impact</h2>
                <StaggerContainer>
                  {project.results.map((result, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start mb-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-base sm:text-lg">{result}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </section>
            </AnimatedSection>

            {/* Additional Images */}
            {project.images.length > 1 && (
              <AnimatedSection direction="up" delay={0.6}>
                <section>
                  <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 text-gray-900">Project Gallery</h2>
                  <StaggerContainer className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <StaggerItem key={index} direction="scale">
                        <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} screenshot ${index + 2}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </section>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Technologies */}
            <AnimatedSection direction="right" delay={0.3}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <StaggerContainer className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <StaggerItem key={index} direction="scale">
                        <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200 rounded-full">
                          {tech}
                        </Badge>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Key Learnings */}
            <AnimatedSection direction="right" delay={0.4}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Key Learnings</CardTitle>
                </CardHeader>
                <CardContent>
                  <StaggerContainer>
                    {project.learnings.map((learning, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-start mb-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{learning}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Project Links */}
            <AnimatedSection direction="right" delay={0.5}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Project Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.websiteUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Website
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Navigation to Other Projects */}
        <AnimatedSection direction="up" delay={0.7} className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-light mb-6 text-gray-900">Explore More Projects</h3>
            <Button asChild variant="outline" size="lg">
              <Link href="/#projects">View All Projects</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
