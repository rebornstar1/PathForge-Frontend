'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Team from "../../../public/Team.png"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Lock } from 'lucide-react'
import Image from 'next/image'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold bg-black bg-clip-text text-transparent">
                Let&apos;s Get in <span className='text-blue-800'>Touch</span>
              </h1>
              <p className="text-lg text-gray-800">
                We&apos;re here to help and answer any questions you might have.
                We look forward to hearing from you.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-900/10" />
              <Image
                src={Team}
                alt="Team collaboration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <Card className="p-6 sm:p-8 backdrop-blur-sm bg-white/80 border-blue-100 shadow-xl">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        required
                        className="border-blue-100 focus:border-blue-200 focus:ring-blue-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-blue-100 focus:border-blue-200 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Contact Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="border-blue-100 focus:border-blue-200 focus:ring-blue-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Interested In</Label>
                      <Select>
                        <SelectTrigger className="border-blue-100 focus:border-blue-200 focus:ring-blue-100">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      className="min-h-[150px] border-blue-100 focus:border-blue-200 focus:ring-blue-100"
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-200 transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Connect With Us →"}
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                  <Lock className="w-4 h-4" />
                  <p>We hate spam, and we respect your privacy.</p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
