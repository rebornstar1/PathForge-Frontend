import { BookOpen, BriefcaseIcon, GraduationCap, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Interactive Learning Paths",
    description:
      "Personalized, adaptive learning paths tailored to your goals and skill level.",
    icon: BookOpen,
    gradient: "from-blue-300 to-blue-400",
  },
  {
    title: "Job Matching & Placement",
    description:
      "AI-powered job recommendations based on your skills and learning progress.",
    icon: BriefcaseIcon,
    gradient: "from-blue-300 to-blue-400",
  },
  {
    title: "Certifications & Achievements",
    description:
      "Earn industry-recognized certificates and skill badges as you progress.",
    icon: GraduationCap,
    gradient: "from-blue-300 to-blue-400",
  },
  {
    title: "Expert Mentorship",
    description:
      "Connect with industry experts and mentors who guide your learning journey.",
    icon: Users,
    gradient: "from-blue-300 to-blue-400",
  },
]

export default function FeaturesSection() {
  return (
    <section className="container space-y-8 py-16 sm:py-24 font-sans ">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-normal sm:text-4xl">
          Everything you need to <span className='text-blue-800'>succeed</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 tracking-wide">
          Our platform provides all the tools and resources you need to learn,
          grow, and advance your career.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card 
            key={feature.title} 
            className={`relative overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br ${feature.gradient} hover:bg-gradient-to-br from-blue-400 to-blue-500`}
          >
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white bg-opacity-20 shadow-inner">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-100">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

