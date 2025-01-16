'use client'

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 text-slate-900 dark:text-gray-200">
      <div className="absolute inset-0" />
      <motion.div 
        className="container relative z-10 mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Welcome to Your Learning Journey</h1>
        <p className="mb-8 text-xl font-medium text-slate-700 dark:text-gray-300">Explore personalized modules and track your progress</p>
        <Button size="lg" className="mb-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
          Explore Learning Modules
        </Button>
        <div className="rounded-lg bg-white/80 p-6 shadow-lg dark:bg-gray-800/80 backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-semibold">Your Progress</h2>
          <div className="mb-2 flex items-center justify-between">
            <span>Completed Modules: 5/20</span>
            <span className="text-yellow-600 dark:text-yellow-400">Streak: 7 days</span>
          </div>
          <Progress value={25} className="h-2 bg-slate-200 dark:bg-slate-700">
            <div className="h-full w-full bg-gradient-to-r from-green-400 to-blue-500" style={{ width: '25%' }} />
          </Progress>
        </div>
      </motion.div>
    </section>
  )
}

