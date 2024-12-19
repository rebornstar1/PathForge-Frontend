'use client'

import { useState } from 'react'
import { Trash2, GripVertical, Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from 'react-bootstrap';

export default function ResumeContent() {
  const [personalInfo, setPersonalInfo] = useState({
    email: 'user@example.com',
    phone: '+1234567890',
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
    location: '',
    website: ''
  })

  const [sections, setSections] = useState([
    {
      id: 'summary',
      title: 'Summary',
      content: '',
      urgentFixes: 1
    },
    {
      id: 'experience',
      title: 'Work Experience',
      items: [
        {
          company: 'Company Name',
          position: 'Position',
          duration: 'Start - Present',
          description: 'Description of your role and achievements'
        }
      ],
      urgentFixes: 1
    }
  ])

  return (
    <div className="space-y-6">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(personalInfo).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {key}
                </label>
                <Input
                  value={value}
                  onChange={(e) => 
                    setPersonalInfo(prev => ({ ...prev, [key]: e.target.value }))
                  }
                  placeholder={`Enter your ${key}`}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {sections.map((section) => (
        <Card key={section.id} className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <GripVertical className="w-5 h-5 text-gray-400" />
              <CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
            </div>
            <div className="flex items-center gap-3">
              {section.urgentFixes > 0 && (
                <Badge variant="destructive" className="rounded-full">
                  {section.urgentFixes} Urgent
                </Badge>
              )}
              <Button variant="outline" className="text-green-500 border-green-500">
                FIX
              </Button>
              <Button variant="ghost" className="text-gray-500">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {section.id === 'summary' ? (
              <Textarea
                placeholder="Add a professional summary..."
                className="min-h-[100px]"
                value={section.content}
              />
            ) : (
              <div className="space-y-4">
                {section.items?.map((item, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <Input value={item.company} placeholder="Company name" />
                      <Input value={item.position} placeholder="Position" />
                      <Input value={item.duration} placeholder="Duration" />
                    </div>
                    <Textarea
                      value={item.description}
                      placeholder="Description of your role and achievements"
                      className="min-h-[100px]"
                    />
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add {section.id === 'experience' ? 'Experience' : 'Item'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
