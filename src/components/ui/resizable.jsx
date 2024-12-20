import React from "react"
import { DragHandleHorizontal, DragHandleVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

// Utility function to combine classnames
const cn = (...classes) => classes.filter(Boolean).join(" ")

// ResizablePanel component
const ResizablePanel = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props
  
  return (
    <ResizablePrimitive.Panel
      ref={ref}
      className={cn(
        "relative flex w-full data-[panel-group-direction=vertical]:h-full",
        className
      )}
      {...otherProps}
    />
  )
})
ResizablePanel.displayName = "ResizablePanel"

// ResizableHandle component
const ResizableHandle = React.forwardRef((props, ref) => {
  const { className, withHandle, ...otherProps } = props
  
  return (
    <ResizablePrimitive.PanelResizeHandle
      ref={ref}
      className={cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-4 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-4 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...otherProps}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
          <DragHandleVertical className="h-2.5 w-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
})
ResizableHandle.displayName = "ResizableHandle"

// ResizablePanelGroup component
const ResizablePanelGroup = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props
  
  return (
    <ResizablePrimitive.PanelGroup
      ref={ref}
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...otherProps}
    />
  )
})
ResizablePanelGroup.displayName = "ResizablePanelGroup"

export {
  ResizablePanel,
  ResizableHandle,
  ResizablePanelGroup
}