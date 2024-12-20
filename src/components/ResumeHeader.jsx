'use client'

import { useState } from 'react'
import { FileText, Upload, Download, Pencil } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ResumeHeader() {
  const [fileName, setFileName] = useState('SkillUp_My_Resume')
  const [isEditing, setIsEditing] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10 MB limit.')
        return
      }
      // Process the uploaded file (e.g., send to server or display name)
      console.log('Uploaded file:', file)
      setIsModalOpen(false) // Close modal after upload
    }
  }

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
          <Button
            variant="outline"
            className="text-blue-600 border-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
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

      {/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-2xl p-8 w-[95%] max-w-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Your Resume</h3>
      <p className="text-gray-500 text-sm italic mb-6">
        "A resume is a window to your professional journey. Let it shine with clarity and purpose."
      </p>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-5 rounded-lg mb-6">
        <p className="text-sm font-medium">Important:</p>
        <p className="text-sm">
          Ensure that your file size is not greater than <b>10 MB</b>. Accepted formats are <b>.pdf</b>, <b>.doc</b>, and <b>.docx</b>.
        </p>
      </div>
      
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        Please upload a professional resume that highlights your skills and accomplishments. This will help us understand your profile better and connect you with the right opportunities.
      </p>
      
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
        onChange={handleFileUpload}
      />
      
      <div className="mt-6 flex justify-end gap-4">
        <Button
          variant="outline"
          className="text-gray-600 border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </Button>
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Upload
        </Button>
      </div>
    </div>
  </div>
)}

    </div>
  )
}
