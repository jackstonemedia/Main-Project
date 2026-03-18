import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "ghost" | "outline" | "destructive" | "neon" | "primary" | "outline-light" | "ghost-light"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-white text-black hover:bg-white/90": variant === "default",
            "bg-indigo-600 text-white hover:bg-indigo-700": variant === "primary",
            "bg-[#00f3ff] text-black hover:bg-[#00f3ff]/90 neon-glow": variant === "neon",
            "border border-white/10 bg-transparent hover:bg-white/10 text-white": variant === "outline",
            "border border-slate-200 bg-transparent hover:bg-slate-100 text-slate-900": variant === "outline-light",
            "hover:bg-white/10 text-white": variant === "ghost",
            "hover:bg-slate-100 text-slate-900": variant === "ghost-light",
            "bg-red-500/10 text-red-500 hover:bg-red-500/20": variant === "destructive",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
