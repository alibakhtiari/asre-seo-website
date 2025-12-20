import { useToast as useToastOriginal } from "@/components/ui/toast"

export const useToast = () => {
  const { toast, dismiss, toasts } = useToastOriginal()
  return {
    toast,
    dismiss,
    toasts
  }
}

export const toast = (props: any) => {
  // This is a direct static call workaround if needed, 
  // but typically useToast hook is preferred in components.
  // Since we moved state to provider, static usage is harder without a global event emitter.
  // For now, we will rely on components usage useToast.
  console.warn("Static toast() call is deprecated in this custom implementation. Use useToast() hook instead.")
}
