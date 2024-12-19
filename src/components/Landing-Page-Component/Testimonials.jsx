'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Software Engineer",
    company: "TechCorp Inc.",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "The interactive learning paths have significantly accelerated my career growth. I've gained practical skills that I use daily in my job.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "DataDrive Analytics",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "The AI-powered job matching feature helped me land my dream job. The platform's certifications were key in showcasing my expertise.",
  },
  {
    id: 3,
    name: "Sarah Rodriguez",
    role: "UX Designer",
    company: "CreativeSolutions",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "The mentorship program connected me with industry leaders who provided invaluable insights and guidance for my career progression.",
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Product Manager",
    company: "InnovateTech",
    avatar: "/placeholder.svg?height=100&width=100",
    quote: "This platform offers a perfect blend of theoretical knowledge and practical application. It's been instrumental in my transition to a leadership role.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center text-black mb-12">What Our Users <span className='text-blue-800'>Say</span></h2>
        <div className="relative max-w-4xl mx-auto ">
          <Card className="bg-white shadow-lg bg-gradient-to-r from-slate-100 to-slate-200">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-blue-500 mb-6" />
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-blue-800">{testimonials[currentIndex].name}</h3>
                <p className="text-blue-600">{testimonials[currentIndex].role}</p>
                <p className="text-blue-500">{testimonials[currentIndex].company}</p>
              </div>
            </CardContent>
          </Card>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center -mt-4 px-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-600"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-600"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-500' : 'bg-blue-200'}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to testimonial {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
