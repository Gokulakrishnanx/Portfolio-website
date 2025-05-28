import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectDetail } from "@/components/project-detail"

const projects = {
  profitfolio: {
    id: "profitfolio",
    title: "Profitfolio.in — Personal Stock Portfolio Tracker",
    subtitle: "Web-based Stock Portfolio Management System",
    organization: "Freelance Project via Vibe Coding",
    date: "June 2024",
    duration: "3 months",
    role: "Full-Stack Developer",
    technologies: ["R", "Python", "HTML", "CSS", "JavaScript", "Data Analytics"],
    overview:
      "Developed a comprehensive web-based stock portfolio tracker with ₹10 lakhs simulated capital, automating performance analytics using Python, R, and a responsive frontend—delivered via Vibe Coding.",
    challenge:
      "The main challenge was creating a real-time stock tracking system that could handle large datasets while providing intuitive analytics and performance metrics for users to make informed investment decisions.",
    solution:
      "Implemented a robust backend using Python for data processing and R for statistical analysis, combined with a responsive frontend that displays real-time portfolio performance, profit/loss calculations, and interactive charts.",
    features: [
      "Real-time stock price tracking and portfolio valuation",
      "Automated performance analytics with Python and R",
      "Interactive charts and visualizations for portfolio insights",
      "Responsive design for desktop and mobile devices",
      "Simulated trading environment with ₹10 lakhs capital",
      "Profit/loss calculations and performance metrics",
    ],
    results: [
      "Successfully delivered a fully functional portfolio tracking system",
      "Implemented real-time data processing for accurate portfolio valuation",
      "Created intuitive user interface for easy portfolio management",
      "Achieved responsive design working across all device types",
    ],
    learnings: [
      "Advanced data processing techniques using Python and R",
      "Real-time web application development",
      "Financial data analysis and visualization",
      "Client communication and project delivery via freelance platform",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    websiteUrl: "#",
    githubUrl: null,
  },
  carepulse: {
    id: "carepulse",
    title: "CarePulse — Healthcare Appointment Platform",
    subtitle: "Responsive Healthcare Management System",
    organization: "Hindustan Innovation Lab",
    date: "October 2024",
    duration: "2 months",
    role: "Frontend Developer & UI/UX Collaborator",
    technologies: ["Next.js", "HTML", "CSS", "Figma", "JavaScript", "React"],
    overview:
      "Designed a responsive healthcare appointment platform using Next.js, HTML, and CSS. Collaborated with the UI/UX team to implement Figma prototypes into production-ready code.",
    challenge:
      "The challenge was to create a seamless healthcare appointment booking system that would be intuitive for patients while providing healthcare providers with efficient management tools.",
    solution:
      "Developed a responsive web application using Next.js with a focus on user experience, implementing Figma designs pixel-perfectly while optimizing the appointment flow and integrating real-time feedback mechanisms.",
    features: [
      "Responsive appointment booking system",
      "Real-time appointment availability checking",
      "Patient dashboard with appointment history",
      "Healthcare provider management interface",
      "Optimized appointment flow for better user experience",
      "Real-time feedback and notification system",
    ],
    results: [
      "Successfully implemented Figma prototypes into production code",
      "Enhanced user experience through optimized appointment flow",
      "Achieved full responsiveness across all device types",
      "Integrated real-time feedback system for better user engagement",
    ],
    learnings: [
      "Advanced Next.js development techniques",
      "Collaboration with UI/UX teams and design implementation",
      "Healthcare industry requirements and user experience design",
      "Real-time feedback integration and user flow optimization",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    websiteUrl: null,
    githubUrl: null,
  },
  frosty: {
    id: "frosty",
    title: "Frosty — Your Penguin AI Companion",
    subtitle: "Interactive AI Companion with Speech Recognition",
    organization: "Hindustan Innovation Lab",
    date: "April 2025",
    duration: "4 months",
    role: "AI Developer & Frontend Developer",
    technologies: ["Python", "React", "Web Speech API", "HTML/CSS", "NLP", "Machine Learning"],
    overview:
      "Built an interactive AI companion with a penguin persona using NLP and speech recognition technologies. Designed a responsive UI with support for dark/light mode.",
    challenge:
      "Creating an engaging AI companion that could understand natural language, respond intelligently, and provide a delightful user experience through speech recognition and natural conversation.",
    solution:
      "Developed an AI system using Python and NLP libraries, integrated with a React frontend featuring the Web Speech API for voice interaction, and created a charming penguin persona that users can interact with naturally.",
    features: [
      "Natural language processing for intelligent conversations",
      "Speech recognition and voice interaction capabilities",
      "Penguin persona with personality-driven responses",
      "Dark/light mode support for user preference",
      "Responsive design for cross-platform compatibility",
      "Real-time voice-to-text and text-to-speech functionality",
    ],
    results: [
      "Successfully created an engaging AI companion with natural conversation abilities",
      "Implemented robust speech recognition with high accuracy",
      "Developed a charming penguin persona that users love interacting with",
      "Achieved seamless voice interaction experience across devices",
    ],
    learnings: [
      "Advanced NLP and machine learning implementation",
      "Speech recognition and Web Speech API integration",
      "AI personality development and conversation design",
      "Real-time audio processing and voice interaction systems",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    websiteUrl: null,
    githubUrl: "https://github.com/Gokulakrishnanx",
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      <main className="pt-20">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  )
}
