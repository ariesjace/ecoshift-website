"use client"

import type React from "react"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "full"
}

export function Container({ children, className = "", size = "lg" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-7xl",
    full: "w-full",
  }

  return <div className={`mx-auto px-4 md:px-6 ${sizeClasses[size]} ${className}`}>{children}</div>
}
