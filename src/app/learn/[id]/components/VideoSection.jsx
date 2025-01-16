'use client'

import { useState } from 'react'
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="w-full h-[300px] bg-black mb-4 relative">
        {/* Video player would go here */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2">
          <div className="flex justify-between items-center">
            <button onClick={togglePlay}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <div className="flex space-x-2">
              <SkipBack size={20} />
              <SkipForward size={20} />
            </div>
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Current Lecture</h2>
      <p className="text-gray-600 mb-4">Description of the current lecture goes here.</p>
      <h3 className="font-semibold mb-2">Lecture List</h3>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {[1, 2, 3, 4, 5].map((lecture) => (
          <div
            key={lecture}
            className="flex-shrink-0 w-40 h-24 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors cursor-pointer"
          >
            Lecture {lecture}
          </div>
        ))}
      </div>
      <h3 className="font-semibold mt-4 mb-2">Recommended Videos</h3>
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((video) => (
          <div
            key={video}
            className="h-24 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors cursor-pointer"
          >
            Video {video}
          </div>
        ))}
      </div>
    </div>
  )
}

