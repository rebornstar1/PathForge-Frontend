'use client'

import { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react'

export default function CodeEditor({ value, onChange }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Editor
      height="100%"
      defaultLanguage="latex"
      theme="vs-dark"
      value={value}
      onChange={(value) => onChange(value || '')}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        lineNumbers: 'on',
        wordWrap: 'on',
        automaticLayout: true,
      }}
    />
  )
}
