"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
              Let's Connect
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-12 text-center lg:text-left">
              I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg shadow-gray-200/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center mr-3 sm:mr-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <span className="text-gray-700 text-base sm:text-lg">Gokulakrishnan9627@gmail.com</span>
              </div>
              <div className="flex items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg shadow-gray-200/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-green-100 flex items-center justify-center mr-3 sm:mr-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <span className="text-gray-700 text-base sm:text-lg">+91 7418232796</span>
              </div>
              <div className="flex items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg shadow-gray-200/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-purple-100 flex items-center justify-center mr-3 sm:mr-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <span className="text-gray-700 text-base sm:text-lg">OMR, Chennai</span>
              </div>
            </div>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl shadow-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden order-1 lg:order-2">
            <CardHeader className="p-6 sm:p-8 pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl font-light text-gray-900">Send a Message</CardTitle>
              <CardDescription className="text-gray-600 text-base sm:text-lg">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-blue-500 focus:ring-0 transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-blue-500 focus:ring-0 transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block text-sm sm:text-base">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-2 border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-blue-500 focus:ring-0 transition-colors resize-none text-sm sm:text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 font-medium text-sm sm:text-base"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
