import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 font-light text-sm sm:text-base">© 2024 Gokulakrishnan. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 sm:space-x-6">
            <Link
              href="https://github.com/Gokulakrishnanx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gokulakrishnanx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:Gokulakrishnan9627@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
