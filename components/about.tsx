import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Final-year B.Tech student in Artificial Intelligence and Data Science with hands-on experience in building
            web apps and machine learning models.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
              My Journey
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              Currently pursuing B.Tech in Artificial Intelligence and Data Science at Hindustan University. I'm
              passionate about designing intelligent systems and delivering impactful solutions through innovative
              technology.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center lg:text-left">
              As a Coding & Development SPOC at Blue Screen Programming Club, I lead technical workshops, hackathons,
              and mentor peers in Python and web development. I believe in creating solutions that make a real
              difference.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">3+</div>
                <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-blue-600 mb-2">200+</div>
                <div className="text-sm sm:text-base text-gray-600">Students Mentored</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 order-1 lg:order-2">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center mr-3 sm:mr-4">
                    <Code className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-medium text-gray-900">AI & Development</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Specializing in AI/ML solutions and full-stack web development with modern frameworks like Next.js and
                  Python.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-purple-100 flex items-center justify-center mr-3 sm:mr-4">
                    <Palette className="h-6 w-6 sm:h-7 sm:w-7 text-purple-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-medium text-gray-900">UI/UX Design</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Creating intuitive user experiences with Figma and Framer, focusing on responsive design and
                  user-centered approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl shadow-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-green-100 flex items-center justify-center mr-3 sm:mr-4">
                    <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-medium text-gray-900">Leadership</h4>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Leading technical workshops and mentoring students in programming, with experience organizing
                  large-scale coding competitions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
