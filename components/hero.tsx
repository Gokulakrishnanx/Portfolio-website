"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggerContainer } from "@/components/stagger-container"
import { StaggerItem } from "@/components/stagger-item"
import { ParallaxHero } from "@/components/parallax-hero"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80" />

      {/* Floating Orbs - Responsive sizing */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <AnimatedSection direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Gokulakrishnan
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed px-4 lg:px-0">
                I craft exceptional digital experiences that blend beautiful design with powerful functionality. Let's
                build something amazing together.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <StaggerContainer className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 lg:px-0 justify-center lg:justify-start">
              <StaggerItem>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-blue-600/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/30 group text-sm sm:text-base"
                >
                  <Link href="#contact">
                    Let's Work Together
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </StaggerItem>
              <StaggerItem>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-2 border-gray-300 hover:border-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm text-sm sm:text-base"
                >
                  <Link href="/resume/Gokulakrishnan_Resume.pdf" target="_blank" download="Gokulakrishnan_Resume.pdf">
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Download Resume
                  </Link>
                </Button>
              </StaggerItem>
            </StaggerContainer>

            {/* Social Links */}
            <StaggerContainer className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start px-4 lg:px-0">
              <StaggerItem direction="scale">
                <Link
                  href="https://github.com/Gokulakrishnanx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </StaggerItem>
              <StaggerItem direction="scale">
                <Link
                  href="https://www.linkedin.com/in/gokulakrishnanx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </StaggerItem>
              <StaggerItem direction="scale">
                <Link
                  href="mailto:Gokulakrishnan9627@gmail.com"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <AnimatedSection direction="scale" delay={0.6}>
              {/* Main Avatar */}
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-80 lg:h-80 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white text-6xl sm:text-8xl font-light shadow-2xl shadow-blue-500/25 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />

                  <span className="relative z-10">GK</span>
                </div>

                {/* Floating Elements - Responsive sizing */}
                <AnimatedSection direction="scale" delay={0.8}>
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-xl flex items-center justify-center animate-bounce delay-500">
                    <span className="text-lg sm:text-2xl">👋</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="scale" delay={1.0}>
                  <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-400 to-blue-500 shadow-xl flex items-center justify-center animate-pulse">
                    <span className="text-2xl sm:text-3xl">⚡</span>
                  </div>
                </AnimatedSection>

                <AnimatedSection direction="scale" delay={1.2}>
                  <div className="absolute top-1/2 -right-6 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg flex items-center justify-center animate-bounce delay-1000">
                    <span className="text-lg sm:text-xl">✨</span>
                  </div>
                </AnimatedSection>
              </div>

              {/* Background Decoration - Hidden on small screens */}
              <div className="absolute inset-0 -z-10 hidden sm:block">
                <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 border-2 border-blue-200/50 rounded-2xl sm:rounded-3xl rotate-12" />
                <div className="absolute bottom-10 left-10 w-20 h-20 sm:w-24 sm:h-24 border-2 border-purple-200/50 rounded-xl sm:rounded-2xl -rotate-12" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats Row */}
        <ParallaxHero offset={30}>
          <StaggerContainer className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-gray-200/50 px-4 lg:px-0">
            <StaggerItem>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">6+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">GitHub Repositories</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">3+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Years Experience</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-gray-900 mb-1 sm:mb-2">200+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">Students Mentored</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </ParallaxHero>
      </div>
    </section>
  )
}
