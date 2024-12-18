import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import globe from "../../../public/LandingPage.png"
import spinklr from "../../../public/sprinklr.png"
import Arrow from "../../../public/Arrows.png"
import blue from "../../../public/test.png"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Code2,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  MapPin,
  Palette,
  Search,
  Settings,
  Users,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const companies = [
  { name: "Vodafone", logo: spinklr },
  { name: "Intel", logo: spinklr },
  { name: "Tesla", logo: spinklr },
  { name: "AMD", logo: spinklr },
  { name: "Talkit", logo: spinklr },
]

const navItems = [
  { title: "Find Jobs", href: "#" },
  { title: "Browse Companies", href: "#" },
  { title: "Personalized Learning", href: "#" },
  { title: "Community Forum", href: "#" },
  { title: "About Us", href: "#" },
  { title: "Contact Us", href: "#" },
]

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

const numberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans bg-no-repeat bg-cover bg-opacity-50 " style={{ backgroundImage: `url(${blue.src})` }}>
      <header className=" py-4">
        <div className="container flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="size-8 rounded-lg bg-[#5B4DFF]" />
            <span className="text-2xl font-semibold text-[#695bfb]">Pathforge</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-md text-white hover:text-blue-900 tracking-wide">
              Find Jobs
            </Link>
            <Link href="#" className="text-md text-white hover:text-blue-900 tracking-wide">
              Browse Companies
            </Link>
            <Link href="#" className="text-md text-white hover:text-blue-900 tracking-wide">
              Personalized Learning
            </Link>
            <Link href="#" className="text-md text-white hover:text-blue-900 tracking-wide">
              Community Forum
            </Link>
            <Link href="#" className="text-md text-white hover:text-blue-900 tracking-wide">
              About Us
            </Link>
            <Link href="#" className="text-md text-white hover:text-blue-900 tracking-wide">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-sm font-medium text-gray-200 hover:text-gray-900">
              Login
            </Link>
            <Button className="bg-[#5B4DFF] hover:bg-[#4B3DFF] text-white py-3 px-6 rounded-lg">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <div className="hidden lg:block relative bg-no-repeat bg-center bg-cover h-[500px]" >
      {/* Hero Section */}
        <section className="w-full px-10 ">
          <div className="container px-6 md:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="py-32 flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
                    Discover more than{" "}
                    <span className="text-[#5B4DFF]">5000+ Jobs</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    A great platform for job seekers looking for new career heights and passionate about startups.
                  </p>
                </div>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="flex-1 space-y-6 sm:space-y-0 sm:flex sm:space-x-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-3 h-5 w-5 text-gray-800" />
                      <Input className="pl-10 bg-white" placeholder="Job title or keyword" type="search" />
                    </div>
                    <div className="relative flex-1">
                      <MapPin className="absolute left-4 top-3 h-5 w-5 text-gray-800" />
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
                  <Button size="lg" className="bg-[#5B4DFF] hover:bg-[#4B3DFF] text-white py-3 px-6 rounded-lg">
                    Search my job
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <span className="text-sm font-medium text-gray-200">Popular:</span>
                  {["UI Designer", "UX Researcher", "Android", "Admin"].map((tag) => (
                    <Link key={tag} href="#" className="text-sm text-gray-300 hover:text-gray-900">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block relative">
              </div>
            </div>
          </div>
        </section>

        {/* Companies We Helped */}
        <section className="w-full py-16 companies-gradient">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5B4DFF] text-center">
            Companies We Helped Grow
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className="company-card bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
              >
                <div className="w-24 h-24 flex items-center justify-center mb-2">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={120}
                    height={40}
                    className="opacity-70 transition-opacity duration-300"
                  />
                </div>
                <p className="text-sm text-gray-600 font-medium text-center mt-2">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

        {/* Categories Section */}
        <section className="w-full py-16 bg-white font-sans">
          <div className="container px-6 md:px-12">
            <div className="flex flex-col space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-semibold tracking-tighter">
                  Explore by <span className="text-[#5B4DFF]">category</span>
                </h2>
                <Link href="#" className="hidden sm:flex items-center text-[#5B4DFF] hover:underline">
                  Show all jobs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 font-sans">
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
                  <Card key={i} className="group relative overflow-hidden border hover:border-[#5B4DFF] transition-colors font-sans">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="size-12 rounded-lg bg-[#5B4DFF]/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-[#5B4DFF]" />
                          </div>
                          <h3 className="font-semibold font-sans">{label}</h3>
                          <p className="text-sm text-gray-500 font-sans">{count} jobs available</p>
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

        {/* Job Posting Section */}
        <section className="w-full py-16 bg-[#5B4DFF]">
          <div className="container px-6 md:px-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_600px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Start posting jobs today
                </h2>
                <p className="text-lg text-white/80">Start posting jobs for only $10</p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-[#5B4DFF] hover:bg-white/90 py-3 px-6 rounded-lg">
                    Sign Up For Free
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  alt="Dashboard Preview"
                  className="rounded-xl shadow-2xl"
                  height="400"
                  src={globe}
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
