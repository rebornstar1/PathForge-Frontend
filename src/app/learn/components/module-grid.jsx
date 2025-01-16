import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Search, Filter } from 'lucide-react'

const modules = [
  { id: 1, name: 'Introduction to React', difficulty: 'Beginner', time: '2 hours', progress: 75 },
  { id: 2, name: 'Advanced JavaScript Concepts', difficulty: 'Intermediate', time: '4 hours', progress: 30 },
  { id: 3, name: 'CSS Grid Mastery', difficulty: 'Intermediate', time: '3 hours', progress: 0 },
  { id: 4, name: 'TypeScript Fundamentals', difficulty: 'Beginner', time: '2.5 hours', progress: 50 },
  { id: 5, name: 'Node.js Backend Development', difficulty: 'Advanced', time: '5 hours', progress: 10 },
  { id: 6, name: 'RESTful API Design', difficulty: 'Intermediate', time: '3.5 hours', progress: 0 },
]

export function ModuleGrid() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredModules = modules.filter(module =>
    module.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="my-12">
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-gray-100">Learning Modules</h2>
      <div className="mb-6 flex gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-slate-400" />
          <Input
            type="text"
            placeholder="Search modules..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline"><Filter className="mr-2" />Filter</Button>
      </div>
      <motion.div 
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {filteredModules.map(module => (
          <motion.div key={module.id} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
            <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <CardTitle className="text-lg font-semibold">{module.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-2 flex justify-between">
                  <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                    {module.difficulty}
                  </span>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                    <Clock className="mr-1 h-4 w-4" />
                    {module.time}
                  </div>
                </div>
                <Progress value={module.progress} className="h-2 bg-slate-200 dark:bg-slate-700">
                  <div className="h-full w-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 ease-in-out" style={{ width: `${module.progress}%` }} />
                </Progress>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white transition-all duration-200 hover:from-blue-600 hover:to-blue-800">
                  {module.progress > 0 ? 'Resume' : 'Start'}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
