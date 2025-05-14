"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  onClick?: () => void
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-1.5", className)} onClick={onClick}>
      <div className="relative flex items-center justify-center">
        <img
          src="/logo.png"
          alt="GoRahal Logo"
          className="h-20 w-16 object-contain"
          />
      </div>
     
    </Link>
  )
}
