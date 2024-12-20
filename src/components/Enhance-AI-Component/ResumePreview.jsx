'use client'

export default function ResumePreview({ content, template }) {
  return (
    <div className="h-full bg-white">
      <div className="h-full overflow-auto p-8">
        <div className="max-w-[850px] mx-auto bg-white shadow-lg p-8 min-h-[1100px]">
          {/* This is a placeholder for the actual LaTeX rendering */}
          <div className="prose max-w-none">
            <h1 className="text-2xl font-bold mb-4">Sanjay Manikrao Paul</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
              <span>+91 9876543210</span>
              <span>example@gmail.com</span>
              <span>LinkedIn</span>
              <span>GitHub</span>
            </div>

            <section className="mb-6">
              <h2 className="text-xl font-bold border-b border-gray-300 mb-4">Education</h2>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <strong>Indian Institute of Technology</strong>
                  <span>2022 - Present</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>B.Tech in Computer Science</span>
                  <span>GPA: 8.15</span>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-bold border-b border-gray-300 mb-4">Experience</h2>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <strong>Software Developer Intern</strong>
                  <span>Oct 2024 - Present</span>
                </div>
                <div className="mb-2 text-sm">Tech Company, Location</div>
                <ul className="list-disc list-inside text-sm">
                  <li>Developed full-stack applications using React and Node.js</li>
                  <li>Implemented user authentication and database integration</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
