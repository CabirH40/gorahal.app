"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"
import { Logo } from "./logo"

export function MainNav() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration errors
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm">حجز الآن</Button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={cn("text-sm font-medium hover:underline", pathname === "/" && "text-primary font-semibold")}
            >
              الرئيسية
            </Link>
            <Link
              href="/destinations"
              className={cn(
                "text-sm font-medium hover:underline",
                pathname === "/destinations" && "text-primary font-semibold",
              )}
            >
              الوجهات
            </Link>
            <Link
              href="/tours"
              className={cn(
                "text-sm font-medium hover:underline",
                pathname === "/tours" && "text-primary font-semibold",
              )}
            >
              الجولات
            </Link>
            <Link
              href="/hotels"
              className={cn(
                "text-sm font-medium hover:underline",
                pathname === "/hotels" && "text-primary font-semibold",
              )}
            >
              الفنادق
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium hover:underline",
                pathname === "/contact" && "text-primary font-semibold",
              )}
            >
              تواصل معنا
            </Link>
          </nav>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button size="sm">حجز الآن</Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <MobileNav />
      </div>
    </header>
  )
}

