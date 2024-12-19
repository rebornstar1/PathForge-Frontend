'use client'

import { useState } from 'react'
import { FileText, Upload, Download, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ResumeHeader() {
  const [fileName, setFileName] = useState('SkillUp_My_Resume')
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-blue-600" />
          {isEditing ? (
            <Input
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              className="w-[200px]"
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              {fileName}
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-600 hover:text-blue-700"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </h2>
          )}
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="text-blue-600 border-blue-600">
            <Upload className="w-4 h-4 mr-2" />
            Upload Resume
          </Button>
          <Button variant="outline" className="text-blue-600 border-blue-600">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline" className="text-blue-600 border-blue-600">
            <Download className="w-4 h-4 mr-2" />
            Export Word
          </Button>
        </div>
      </div>
    </div>
  )
}

