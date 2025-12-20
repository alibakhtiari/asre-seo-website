"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

// Types
type ToastProps = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  variant?: "default" | "destructive"
  open?: boolean
  onOpenChange?: (open: boolean) => void
  duration?: number
}

type ToastActionElement = React.ReactElement

// Context
type ToastContextType = {
  toasts: ToastProps[]
  addToast: (toast: Omit<ToastProps, "id">) => void
  dismissToast: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

// Provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const addToast = React.useCallback((toast: Omit<ToastProps, "id">) => {
    setToasts((prev) => [...prev, { ...toast, id: Math.random().toString(36).substring(2, 9) }])
  }, [])

  const dismissToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
      <ToastViewport />
    </ToastContext.Provider>
  )
}

function ToastViewport() {
  const context = React.useContext(ToastContext)
  if (!context) return null

  return (
    <div className="fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {context.toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  )
}

function Toast({ id, title, description, action, variant = "default", onOpenChange, duration = 5000 }: ToastProps) {
  const { dismissToast } = React.useContext(ToastContext)!

  React.useEffect(() => {
    const timer = setTimeout(() => {
      dismissToast(id)
    }, duration)
    return () => clearTimeout(timer)
  }, [id, duration, dismissToast])

  return (
    <div
      className={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all animate-slide-in-up",
        variant === "destructive" && "destructive group border-destructive bg-destructive text-destructive-foreground",
        variant === "default" && "border bg-background text-foreground"
      )}
    >
      <div className="grid gap-1">
        {title && <div className="text-sm font-semibold">{title}</div>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
      {action}
      <button
        onClick={() => dismissToast(id)}
        className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

// Hook to access toast context
export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return {
    toast: context.addToast,
    dismiss: context.dismissToast,
    toasts: context.toasts
  }
}

// Named exports to match previous API
export {
  ToastProvider as Provider,
  ToastViewport as Viewport,
  Toast as Root,
  type ToastProps,
  type ToastActionElement,
}
