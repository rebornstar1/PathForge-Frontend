'use client'

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight, List, Type } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'

const initialSections = [
  {
    id: 'education',
    title: 'Education',
    content: 'Your education details here...',
    type: 'text',
  },
  {
    id: 'experience',
    title: 'Experience',
    content: 'Your work experience here...',
    type: 'text',
  },
  {
    id: 'skills',
    title: 'Skills',
    content: 'Your skills here...',
    type: 'list',
  },
]

export default function VisualEditor() {
  const [sections, setSections] = useState(initialSections)
  const [selectedSection, setSelectedSection] = useState(null)

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(sections)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setSections(items)
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Formatting Toolbar */}
      <div className="border-b p-2 flex items-center gap-2 bg-gray-50">
        <Select defaultValue="paragraph">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="heading1">Heading 1</SelectItem>
            <SelectItem value="heading2">Heading 2</SelectItem>
            <SelectItem value="paragraph">Paragraph</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="arial">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Font" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="arial">Arial</SelectItem>
            <SelectItem value="times">Times New Roman</SelectItem>
            <SelectItem value="calibri">Calibri</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-100">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-100">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-100">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-100">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-100">
          <AlignRight className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700 hover:bg-blue-100">
          <List className="h-4 w-4" />
        </Button>
      </div>

      {/* Sections Area */}
      <div className="flex-1 overflow-auto p-4">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {sections.map((section, index) => (
                  <Draggable key={section.id} draggableId={section.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="mb-4"
                      >
                        <div className="bg-white border rounded-lg shadow-sm">
                          <div
                            {...provided.dragHandleProps}
                            className="p-3 border-b bg-blue-50 flex items-center justify-between"
                          >
                            <Input
                              value={section.title}
                              onChange={(e) => {
                                const newSections = [...sections]
                                newSections[index].title = e.target.value
                                setSections(newSections)
                              }}
                              className="w-[200px] bg-white"
                            />
                            <Type className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="p-3">
                            <textarea
                              value={section.content}
                              onChange={(e) => {
                                const newSections = [...sections]
                                newSections[index].content = e.target.value
                                setSections(newSections)
                              }}
                              className="w-full min-h-[100px] p-2 border rounded"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}
