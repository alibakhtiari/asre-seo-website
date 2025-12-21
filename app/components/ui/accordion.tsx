"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
  value?: string
  onChange?: (value: string) => void
}>({})

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type?: "single" | "multiple"
    collapsible?: boolean
    defaultValue?: string
    value?: string
    onValueChange?: (value: string) => void
  }
>(({ className, type, value: valueProp, onValueChange, children, ...props }, ref) => {
  const [value, setValue] = React.useState<string | undefined>(props.defaultValue)

  const handleValueChange = React.useCallback(
    (newValue: string) => {
      const nextValue = valueProp !== undefined ? newValue : (value === newValue ? undefined : newValue);
      if (onValueChange) {
        onValueChange(nextValue || "");
      }
      if (valueProp === undefined) {
        setValue(nextValue);
      }
    },
    [onValueChange, value, valueProp]
  )

  return (
    <AccordionContext.Provider value={{ value: valueProp ?? value, onChange: handleValueChange }}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-b", className)}
    data-value={value}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { value, onChange } = React.useContext(AccordionContext)
  // Find the parent Item's value. Ideally we'd use another context for item, but finding closest data-attr works for simple structure
  // Or better, let's wrap Item in context too.
  return (
    <AccordionTriggerInternal className={className} ref={ref} {...props}>{children}</AccordionTriggerInternal>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

// Helper to access item value cleanly
const AccordionItemContext = React.createContext<{ value: string }>({ value: "" })

const AccordionItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => (
  <AccordionItemContext.Provider value={{ value }}>
    <div
      ref={ref}
      className={cn("border-b", className)}
      {...props}
    >
      {children}
    </div>
  </AccordionItemContext.Provider>
))
AccordionItemWrapper.displayName = "AccordionItem"


const AccordionTriggerInternal = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { value: selectedValue, onChange } = React.useContext(AccordionContext)
  const { value: itemValue } = React.useContext(AccordionItemContext)
  const isOpen = selectedValue === itemValue

  return (
    <div className="flex">
      <button
        ref={ref}
        type="button"
        onClick={() => onChange?.(itemValue)}
        aria-expanded={isOpen}
        data-state={isOpen ? "open" : "closed"}
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </button>
    </div>
  )
})


const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { value: selectedValue } = React.useContext(AccordionContext)
  const { value: itemValue } = React.useContext(AccordionItemContext)
  const isOpen = selectedValue === itemValue

  if (!isOpen) return null

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItemWrapper as AccordionItem, AccordionTrigger, AccordionContent }
