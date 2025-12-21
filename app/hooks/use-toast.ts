import { useToast as useToastUI } from "@/components/ui/toast"

/**
 * Hook to access the toast functionality.
 * Re-exports the core useToast from the UI component for cleaner access in hooks/
 */
export const useToast = () => {
  const { toast, dismiss, toasts } = useToastUI()
  return {
    toast,
    dismiss,
    toasts
  }
}
