'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const recommendations = [
  { id: 1, name: 'GraphQL Basics', reason: 'Based on your interest in API design' },
  { id: 2, name: 'React Hooks Deep Dive', reason: 'Recommended to enhance your React skills' },
  { id: 3, name: 'Responsive Web Design', reason: 'Complement your CSS knowledge' },
]

export function PersonalizedRecommendations() {
  return (
    <section className="my-12">
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-gray-100">Recommended for You</h2>
      <motion.div 
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {recommendations.map(rec => (
          <motion.div key={rec.id} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 text-white">
                <CardTitle className="text-lg font-semibold">{rec.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <span className="inline-block rounded-md bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  {rec.reason}
                </span>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white transition-all duration-200 hover:from-purple-600 hover:to-pink-700">
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
