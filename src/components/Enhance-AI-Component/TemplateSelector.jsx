'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const templates = [
  { id: 'classic', name: 'Classic' },
  { id: 'modern', name: 'Modern' },
  { id: 'academic', name: 'Academic' },
  { id: 'minimal', name: 'Minimal' },
]

export default function TemplateSelector({ onSelect }) {
  return (
    <Select onValueChange={onSelect} defaultValue="classic">
      <SelectTrigger className="w-[180px] bg-white text-blue-600 border-blue-300">
        <SelectValue placeholder="Select template" />
      </SelectTrigger>
      <SelectContent>
        {templates.map((template) => (
          <SelectItem key={template.id} value={template.id}>
            {template.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
