'use client';

import { useState, useEffect, useCallback } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import CodeEditor from '../../components/Enhance-AI-Component/CodeEditor.jsx';
import VisualEditor from '../../components/Enhance-AI-Component/VisualEditor.jsx';
import ResumePreview from '../../components/Enhance-AI-Component/ResumePreview.jsx';
import TemplateSelector from '../../components/Enhance-AI-Component/TemplateSelector.jsx';
import AIChat from '../../components/Enhance-AI-Component/AIChat.jsx';
import { Button } from '@/components/ui/button';
import { Download, FileCode, Eye, Maximize2, Minimize2, ArrowLeftRight } from 'lucide-react';

export default function AdvancedResumeBuilder() {
  const [content, setContent] = useState(`\\documentclass{article}
\\begin{document}

\\section{Education}
\\resumeSubHeading
{Indian Institute of Technology}{2022 - Present}
{B.Tech in Computer Science}{GPA: 8.15}

\\section{Experience}
\\resumeSubHeading
{Software Developer Intern}{Oct 2024 - Present}
{Tech Company}{Location}
\\resumeItemListStart
\\resumeItem{Developed full-stack applications using React and Node.js}
\\resumeItem{Implemented user authentication and database integration}
\\resumeItemListEnd

\\end{document}`);

  const [activeTemplate, setActiveTemplate] = useState('classic');
  const [viewMode, setViewMode] = useState('split');
  const [editorWidth, setEditorWidth] = useState(300);
  const [previewWidth, setPreviewWidth] = useState(300);
  const [isEditorMaximized, setIsEditorMaximized] = useState(true);
  const [isPreviewMaximized, setIsPreviewMaximized] = useState(true);
  const [isClient, setIsClient] = useState(false);  // Add a state to check if we're on the client

  // Set isClient to true on client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle window resize
  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setViewMode('preview');
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isClient]);

  // Handle editor resize
  const handleEditorResize = useCallback((e, { size }) => {
    setEditorWidth(size.width);
  }, []);

  // Handle preview resize
  const handlePreviewResize = useCallback((e, { size }) => {
    setPreviewWidth(size.width);
  }, []);

  // Toggle maximized states
  const toggleEditorMaximize = () => {
    setIsEditorMaximized(!isEditorMaximized);
    setIsPreviewMaximized(false);
  };

  const togglePreviewMaximize = () => {
    setIsPreviewMaximized(!isPreviewMaximized);
    setIsEditorMaximized(false);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '1':
            setViewMode('split');
            break;
          case '2':
            setViewMode('preview');
            break;
          case 'e':
            toggleEditorMaximize();
            break;
          case 'p':
            togglePreviewMaximize();
            break;
        }
      }
    };
    if (isClient) {
      window.addEventListener('keydown', handleKeyPress);
    }
    return () => {
      if (isClient) {
        window.removeEventListener('keydown', handleKeyPress);
      }
    };
  }, [isEditorMaximized, isPreviewMaximized, isClient]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-blue-300 via-slate-100 to-blue-100">
      <div className="flex-1 overflow-hidden p-4">
        <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
          <div className="border-b bg-gray-50 rounded-t-lg">
            <div className="flex h-16 items-center px-4 gap-4">
              <h1 className="text-xl font-bold text-blue-600">Resume Builder</h1>
              <div className="ml-auto flex items-center gap-4">
                <TemplateSelector onSelect={setActiveTemplate} />
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setViewMode(viewMode === 'split' ? 'preview' : 'split')}
                    title="Toggle View Mode (Ctrl+1/2)"
                  >
                    {viewMode === 'split' ? <Eye className="h-4 w-4 mr-2" /> : <FileCode className="h-4 w-4 mr-2" />}
                    {viewMode === 'split' ? 'Preview' : 'Editor'}
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    title="Export as PDF"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {viewMode === 'split' ? (
              <div className="flex h-full relative">
                {/* Ensure window is defined by checking if we are on the client side */}
                {isClient && (
                  <>
                    <ResizableBox
                      width={isEditorMaximized ? window.innerWidth - 100 : editorWidth}
                      height={Infinity}
                      axis="x"
                      minConstraints={[200, Infinity]}
                      maxConstraints={[isEditorMaximized ? window.innerWidth - 100 : 600, Infinity]}
                      resizeHandles={['e']}
                      onResize={handleEditorResize}
                      className="relative"
                    >
                      <div className="h-full flex flex-col">
                        <div className="flex justify-between items-center px-4 py-2 border-b">
                          <span className="text-sm font-medium">Editor</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleEditorMaximize}
                            title="Maximize Editor (Ctrl+E)"
                          >
                            {isEditorMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                          </Button>
                        </div>
                        <TabsPrimitive.Root defaultValue="visual">
                          <TabsPrimitive.List className="border-b px-4 flex">
                            <TabsPrimitive.Trigger 
                              value="visual" 
                              className="px-4 py-2 border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
                            >
                              Visual Editor
                            </TabsPrimitive.Trigger>
                            <TabsPrimitive.Trigger 
                              value="code" 
                              className="px-4 py-2 border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
                            >
                              Code Editor
                            </TabsPrimitive.Trigger>
                          </TabsPrimitive.List>

                          <TabsPrimitive.Content value="visual" className="h-[calc(100vh-10rem)]">
                            <VisualEditor />
                          </TabsPrimitive.Content>
                          <TabsPrimitive.Content value="code" className="h-[calc(100vh-10rem)]">
                            <CodeEditor value={content} onChange={setContent} />
                          </TabsPrimitive.Content>
                        </TabsPrimitive.Root>
                      </div>
                    </ResizableBox>

                    <div 
                      className="resize-handle flex items-center justify-center w-4 cursor-col-resize hover:bg-gray-100 transition-colors"
                      aria-label="Resize panels"
                    >
                      <ArrowLeftRight className="h-4 w-4 text-gray-400" />
                    </div>

                    <ResizableBox
                      width={isPreviewMaximized ? window.innerWidth - 100 : previewWidth}
                      height={Infinity}
                      axis="x"
                      minConstraints={[200, Infinity]}
                      maxConstraints={[isPreviewMaximized ? window.innerWidth - 100 : 600, Infinity]}
                      resizeHandles={['e']}
                      onResize={handlePreviewResize}
                      className="relative"
                    >
                      <div className="h-full flex flex-col">
                        <div className="flex justify-between items-center px-4 py-2 border-b">
                          <span className="text-sm font-medium">Preview</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={togglePreviewMaximize}
                            title="Maximize Preview (Ctrl+P)"
                          >
                            {isPreviewMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                          </Button>
                        </div>
                        <div className="flex-1 overflow-auto">
                          <ResumePreview content={content} template={activeTemplate} />
                        </div>
                      </div>
                    </ResizableBox>
                  </>
                )}
              </div>
            ) : (
              <ResumePreview content={content} template={activeTemplate} />
            )}
          </div>
        </div>
      </div>

      <AIChat />
    </div>
  );
}
