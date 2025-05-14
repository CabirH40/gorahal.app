"use client"

import { useState, useEffect } from "react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
      }, 5000)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const whatsappNumber = "+905076409961"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=مرحباً، أرغب في الاستفسار عن العروض السياحية في تركيا. أريد معلومات أكثر عن الرحلات والفنادق والأسعار.`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <div
        className={`bg-white text-gray-800 py-3 px-4 rounded-lg shadow-lg ml-3 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col text-right">
          <p className="text-sm font-medium mb-1">تحتاج مساعدة؟</p>
          <p className="text-xs text-gray-600">تواصل معنا مباشرة على واتساب!</p>
        </div>
      </div>

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ${
          isAnimating ? "animate-pulse" : ""
        } hover:scale-110`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <FaWhatsapp className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></span>
        </div>
      </Link>
    </div>
  )
}
