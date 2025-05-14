"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export function MobileNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 border border-gray-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="فتح القائمة"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background">
          <div className="container flex flex-col h-full py-6">
            <div className="flex items-center justify-start mb-6">
              <Logo onClick={() => setIsOpen(false)} />
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className={cn(
                  "flex items-center py-3 text-lg font-medium hover:text-primary border-b border-gray-100",
                  pathname === "/" && "text-primary font-semibold",
                )}
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/destinations"
                className={cn(
                  "flex items-center py-3 text-lg font-medium hover:text-primary border-b border-gray-100",
                  pathname === "/destinations" && "text-primary font-semibold",
                )}
                onClick={() => setIsOpen(false)}
              >
                الوجهات
              </Link>
              <Link
                href="/tours"
                className={cn(
                  "flex items-center py-3 text-lg font-medium hover:text-primary border-b border-gray-100",
                  pathname === "/tours" && "text-primary font-semibold",
                )}
                onClick={() => setIsOpen(false)}
              >
                الجولات
              </Link>
              <Link
                href="/hotels"
                className={cn(
                  "flex items-center py-3 text-lg font-medium hover:text-primary border-b border-gray-100",
                  pathname === "/hotels" && "text-primary font-semibold",
                )}
                onClick={() => setIsOpen(false)}
              >
                الفنادق
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "flex items-center py-3 text-lg font-medium hover:text-primary border-b border-gray-100",
                  pathname === "/contact" && "text-primary font-semibold",
                )}
                onClick={() => setIsOpen(false)}
              >
                تواصل معنا
              </Link>
            </nav>
            <div className="mt-auto pt-4">
              <Link href="/contact">
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  حجز الآن
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

