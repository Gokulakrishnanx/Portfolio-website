"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">
            GK
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm lg:text-base transition-colors duration-300 font-medium ${
                  (pathname === "/projects" && item.href === "/projects") ||
                  (pathname === "/" && item.href.startsWith("/#"))
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-gray-100 h-10 w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 sm:py-6 border-t border-gray-200/50 bg-white/90 backdrop-blur-xl rounded-b-2xl">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 sm:py-3 text-base transition-colors font-medium ${
                  (pathname === "/projects" && item.href === "/projects") ||
                  (pathname === "/" && item.href.startsWith("/#"))
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
