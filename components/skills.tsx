import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"],
      color: "blue",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
      color: "purple",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Prisma", "Jest", "Cypress"],
      color: "green",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "from-blue-50 to-blue-100 border-blue-200"
      case "purple":
        return "from-purple-50 to-purple-100 border-purple-200"
      case "green":
        return "from-green-50 to-green-100 border-green-200"
      default:
        return "from-gray-50 to-gray-100 border-gray-200"
    }
  }

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-white"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} border-0 shadow-xl shadow-gray-200/50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500`}
            >
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-center text-xl sm:text-2xl font-light text-gray-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-white/80 backdrop-blur-sm text-gray-700 border-0 px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 font-medium text-xs sm:text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
