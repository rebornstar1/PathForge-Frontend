'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const progressData = [
  { name: 'Week 1', modules: 2 },
  { name: 'Week 2', modules: 3 },
  { name: 'Week 3', modules: 1 },
  { name: 'Week 4', modules: 4 },
]

const timeData = [
  { name: 'Mon', hours: 1.5 },
  { name: 'Tue', hours: 2 },
  { name: 'Wed', hours: 1 },
  { name: 'Thu', hours: 2.5 },
  { name: 'Fri', hours: 1.5 },
  { name: 'Sat', hours: 3 },
  { name: 'Sun', hours: 2 },
]

const achievements = [
  { id: 1, name: 'Fast Learner', description: 'Completed 5 modules in a week' },
  { id: 2, name: 'Consistent', description: 'Maintained a 7-day learning streak' },
  { id: 3, name: 'Explorer', description: 'Tried modules from 3 different categories' },
]

// Custom Badge Component using Tailwind CSS
const Badge = ({ name, description }) => (
  <div className="rounded-lg bg-gradient-to-r from-yellow-200 to-orange-200 text-yellow-800 dark:from-yellow-900 dark:to-orange-900 dark:text-yellow-200 px-4 py-2">
    <span className="font-medium">{name}</span>
    <p className="text-xs text-yellow-700 dark:text-yellow-300">{description}</p>
  </div>
);

export function InsightsDashboard() {
  return (
    <section className="my-12">
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-gray-100">Your Learning Insights</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="overflow-hidden shadow-lg dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <CardTitle>Modules Completed</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: 'none', 
                      borderRadius: '0.375rem', 
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
                      color: '#E5E7EB' 
                    }}
                  />
                  <Bar dataKey="modules" fill="url(#colorModules)" />
                  <defs>
                    <linearGradient id="colorModules" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Card className="overflow-hidden shadow-lg dark:bg-gray-800">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 p-4 text-white">
              <CardTitle>Learning Time (Hours)</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={timeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: 'none', 
                      borderRadius: '0.375rem', 
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
                      color: '#E5E7EB' 
                    }}
                  />
                  <Bar dataKey="hours" fill="url(#colorHours)" />
                  <defs>
                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#14B8A6" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6"
      >
        <Card className="overflow-hidden shadow-lg dark:bg-gray-800">
          <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-600 p-4 text-white">
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-4">
              {achievements.map(achievement => (
                <Badge 
                  key={achievement.id}
                  name={achievement.name}
                  description={achievement.description}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
