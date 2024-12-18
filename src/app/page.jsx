import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Briefcase, Code2, GraduationCap, HeartHandshake, LayoutDashboard, MapPin, Palette, Search, Settings, Users } from 'lucide-react'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white px-10 font-sans">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="size-8 rounded-lg bg-[#5B4DFF]" />
            <span className="text-xl font-bold">Pathforge</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Find Jobs
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Browse Companies
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Login
            </Link>
            <Button className="bg-[#5B4DFF] hover:bg-[#4B3DFF] text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover more than{" "}
                    <span className="text-[#5B4DFF]">5000+ Jobs</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Great platform for the job seeker that searching for new career heights and passionate about startups
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex-1 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500" />
                      <Input
                        className="pl-10 bg-white"
                        placeholder="Job title or keyword"
                        type="search"
                      />
                    </div>
                    <div className="relative flex-1">
                      <MapPin className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500" />
                      <Select>
                        <SelectTrigger className="pl-10 bg-white">
                          <SelectValue placeholder="Florence, Italy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="florence">Florence, Italy</SelectItem>
                          <SelectItem value="rome">Rome, Italy</SelectItem>
                          <SelectItem value="milan">Milan, Italy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button size="lg" className="bg-[#5B4DFF] hover:bg-[#4B3DFF] text-white">
                    Search my job
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-500">Popular:</span>
                  {["UI Designer", "UX Researcher", "Android", "Admin"].map((tag) => (
                    <Link
                      key={tag}
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block relative">
                <Image
                  src="/placeholder.svg"
                  alt="Hero Image"
                  width={250}
                  height={300}
                  className="absolute right-0 top-0"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 border-y bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8">
              <p className="text-lg text-gray-500">Companies we helped grow</p>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                {["Vodafone", "Intel", "Tesla", "AMD", "Talkit"].map((company) => (
                  <div key={company} className="flex items-center justify-center">
                    <Image
                      src="/placeholder-logo.svg"
                      alt={`${company} logo`}
                      width={120}
                      height={40}
                      className="opacity-50 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Explore by{" "}
                    <span className="text-[#5B4DFF]">category</span>
                  </h2>
                </div>
                <Link
                  href="#"
                  className="hidden sm:flex items-center text-[#5B4DFF] hover:underline"
                >
                  Show all jobs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Palette, label: "Design", count: "235" },
                  { icon: Users, label: "Sales", count: "132" },
                  { icon: LayoutDashboard, label: "Marketing", count: "156" },
                  { icon: Settings, label: "Finance", count: "320" },
                  { icon: Code2, label: "Technology", count: "445" },
                  { icon: Briefcase, label: "Engineering", count: "542" },
                  { icon: GraduationCap, label: "Business", count: "271" },
                  { icon: HeartHandshake, label: "Human Resource", count: "345" },
                ].map(({ icon: Icon, label, count }, i) => (
                  <Card key={i} className="group relative overflow-hidden border hover:border-[#5B4DFF] transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="size-12 rounded-lg bg-[#5B4DFF]/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-[#5B4DFF]" />
                          </div>
                          <h3 className="font-semibold">{label}</h3>
                          <p className="text-sm text-gray-500">{count} jobs available</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-[#5B4DFF] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                    <Link href="#" className="absolute inset-0">
                      <span className="sr-only">View {label} jobs</span>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#5B4DFF]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
                    Start posting jobs today
                  </h2>
                  <p className="text-lg text-white/80">
                    Start posting jobs for only $10
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-[#5B4DFF] hover:bg-white/90">
                    Sign Up For Free
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  alt="Dashboard Preview"
                  className="rounded-xl shadow-2xl"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}