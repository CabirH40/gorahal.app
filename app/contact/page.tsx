"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MainNav } from "../components/main-nav"
import { SiteFooter } from "../components/site-footer"
import { sendMessage } from "../actions/send-message"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    error?: Record<string, string[]>
  }>({})
  const formRef = useRef<HTMLFormElement>(null)

  // Estados para el captcha
  const [captchaValue, setCaptchaValue] = useState<number | null>(null)
  const [userCaptchaInput, setUserCaptchaInput] = useState<string>("")
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false)

  // Estados para el paquete seleccionado
  const [selectedPackage, setSelectedPackage] = useState<string>("")
  const [isCustomPackage, setIsCustomPackage] = useState<boolean>(false)

  // Estado para el teléfono
  // إضافة حالة لتتبع ما إذا تم تسجيل التحويل بالفعل
  const [conversionTracked, setConversionTracked] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneError, setPhoneError] = useState("")

  // Función para generar el captcha
  const generateCaptcha = useCallback(() => {
    // Generar un número aleatorio simple entre 1000 y 9999
    const randomNum = Math.floor(Math.random() * 9000) + 1000
    setCaptchaValue(randomNum)
    setUserCaptchaInput("")
    setIsCaptchaVerified(false)
  }, [])

  // Inicializar el captcha al cargar la página
  useEffect(() => {
    generateCaptcha()
  }, [generateCaptcha])
  // تأثير لتتبع التحويل عندما يتم إرسال النموذج بنجاح
  useEffect(() => {
    if (formStatus.success && !conversionTracked) {
      // التحقق من أن gtag متاح
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17046869879/AKz1CPPTuMAaEPeuysA_",
          value: 1.0,
          currency: "TRY",
        })
        setConversionTracked(true)
      }
    }
  }, [formStatus.success, conversionTracked])
  // Validar el número de teléfono
  const validatePhone = useCallback(() => {
    // Verificar si el número comienza con + أو 00
    if (!phoneNumber.startsWith("+") && !phoneNumber.startsWith("00")) {
      setPhoneError("يجب أن يبدأ رقم الهاتف بـ + أو 00")
      return false
    }

    // Verificar longitud mínima (código de país + al menos 8 dígitos)
    if (phoneNumber.length < 10) {
      setPhoneError("رقم الهاتف قصير جدًا")
      return false
    }

    setPhoneError("")
    return true
  }, [phoneNumber])

  // Validar el teléfono cuando cambia
  useEffect(() => {
    if (phoneNumber.length > 0) {
      validatePhone()
    } else {
      setPhoneError("")
    }
  }, [phoneNumber, validatePhone])

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Verificar si el captcha es correcto
    if (!isCaptchaVerified) {
      setFormStatus({
        error: {
          server: ["يرجى التحقق من أنك لست روبوت أولاً"],
        },
      })
      return
    }

    // Validar el número de teléfono
    if (phoneNumber && !validatePhone()) {
      return
    }

    setIsSubmitting(true)
    setConversionTracked(false) // Reiniciar حالة التحويل
    const formData = new FormData(e.currentTarget)

    // Añadir información del paquete seleccionado al formData
    if (isCustomPackage) {
      formData.append("package", "عرض مخصص")
    } else if (selectedPackage) {
      formData.append("package", selectedPackage)
    } else {
      formData.append("package", "لم يتم تحديد عرض")
    }

    // Añadir el número de الهاتف completo
    if (phoneNumber) {
      formData.append("phone", phoneNumber)
    }

    const result = await sendMessage(formData)

    setFormStatus(result)
    setIsSubmitting(false)

    if (result.success) {
      formRef.current?.reset()
      setSelectedPackage("")
      setIsCustomPackage(false)
      setPhoneNumber("")
      generateCaptcha()
    }
  }

  // Función para verificar el captcha
  const verifyCaptcha = () => {
    if (userCaptchaInput === captchaValue?.toString()) {
      setIsCaptchaVerified(true)
    } else {
      setIsCaptchaVerified(false)
      generateCaptcha()
      setFormStatus({
        error: {
          server: ["رمز التحقق غير صحيح، يرجى المحاولة مرة أخرى"],
        },
      })
    }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Script de conversión de Google Ads - Solo se carga cuando hay una conversión exitosa */}
      {formStatus.success && !conversionTracked && (
        <Script id="google-conversion" strategy="afterInteractive">
          {`
                  gtag('event', 'conversion', {
                    'send_to': 'AW-17046869879/AKz1CPPTuMAaEPeuysA_',
                    'value': 1.0,
                    'currency': 'TRY'
                  });
                `}
        </Script>
      )}
      {/* Header */}
      <MainNav />

      {/* Page Header */}
      <section className="relative h-[300px] overflow-hidden">
        <Image src="/contactusar.jpg" alt="تواصل معنا" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">تواصل معنا</h1>
          <p className="mt-4 max-w-2xl text-lg">
            نحن هنا للإجابة على استفساراتك ومساعدتك في تخطيط رحلتك المثالية إلى تركيا
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>

              {formStatus.success && (
                <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>تم إرسال الرسالة بنجاح!</AlertTitle>
                  <AlertDescription>شكراً لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت ممكن.</AlertDescription>
                </Alert>
              )}

              {formStatus.error?.server && (
                <Alert className="mb-6 bg-red-50 text-red-800 border-red-200">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>حدث خطأ!</AlertTitle>
                  <AlertDescription>{formStatus.error.server[0]}</AlertDescription>
                </Alert>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      الاسم الكامل
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="أدخل اسمك الكامل"
                      className={formStatus.error?.name ? "border-red-500" : ""}
                    />
                    {formStatus.error?.name && <p className="text-sm text-red-500">{formStatus.error.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      البريد الإلكتروني
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      className={formStatus.error?.email ? "border-red-500" : ""}
                    />
                    {formStatus.error?.email && <p className="text-sm text-red-500">{formStatus.error.email[0]}</p>}
                  </div>
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    رقم الهاتف مع النداء الدولي مثال :(يبدأ بـ + أو 00)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="مثال: 905076439961+ أو 00905076439961"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={phoneError ? "border-red-500" : ""}
                  />
                  {phoneError && <p className="text-sm text-red-500">{phoneError}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="package" className="text-sm font-medium">
                    اختر العرض
                  </label>
                  <select
                    id="package"
                    name="package"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={selectedPackage}
                    onChange={(e) => {
                      setSelectedPackage(e.target.value)
                      setIsCustomPackage(e.target.value === "custom")
                    }}
                  >
                    <option value="">-- اختر العرض --</option>
                    <option value="طرابزون 5 ليالي – تجربة الطبيعة الخلابة">
                      طرابزون 5 ليالي – تجربة الطبيعة الخلابة
                    </option>
                    <option value="طرابزون 5 ليالي (فندق + كوخ) – تجربة فريدة بين الطبيعة">
                      طرابزون 5 ليالي (فندق + كوخ) – تجربة فريدة بين الطبيعة
                    </option>
                    <option value="طرابزون وإسطنبول 7 ليالي – مزيج الطبيعة والحضارة">
                      طرابزون وإسطنبول 7 ليالي – مزيج الطبيعة والحضارة
                    </option>
                    <option value="إسطنبول 6 ليالي – رحلة في قلب الحضارة التركية">
                      إسطنبول 6 ليالي – رحلة في قلب الحضارة التركية
                    </option>
                    <option value="custom">عرض مخصص (سنتواصل معك لتصميم رحلتك)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    الموضوع
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="موضوع الرسالة"
                    className={formStatus.error?.subject ? "border-red-500" : ""}
                  />
                  {formStatus.error?.subject && <p className="text-sm text-red-500">{formStatus.error.subject[0]}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="اكتب رسالتك هنا..."
                    className={`min-h-[150px] ${formStatus.error?.message ? "border-red-500" : ""}`}
                  />
                  {formStatus.error?.message && <p className="text-sm text-red-500">{formStatus.error.message[0]}</p>}
                </div>

                {/* CAPTCHA Section */}
                <div className="border rounded-md p-4 bg-gray-50">
                  <div className="text-sm font-medium mb-2">التحقق من أنك لست روبوت</div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-white px-4 py-2 rounded border text-xl font-bold tracking-widest select-none">
                      {captchaValue}
                    </div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="p-2 rounded-md hover:bg-gray-200"
                      aria-label="تحديث رمز التحقق"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                        <path d="M21 3v5h-5" />
                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                        <path d="M3 21v-5h5" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="أدخل الرمز الظاهر أعلاه"
                      value={userCaptchaInput}
                      onChange={(e) => setUserCaptchaInput(e.target.value)}
                      className="max-w-[200px]"
                    />
                    <Button type="button" variant="outline" onClick={verifyCaptcha} disabled={!userCaptchaInput}>
                      تحقق
                    </Button>
                  </div>
                  {isCaptchaVerified && (
                    <div className="mt-2 text-green-600 flex items-center gap-1 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      تم التحقق بنجاح
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={!!isSubmitting || !Boolean(isCaptchaVerified) || (!!phoneNumber && !!phoneError)}
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">العنوان</h3>
                      <p className="text-muted-foreground">mecidiyeköy istanbul</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">أرقام الهاتف</h3>
                      <p className="text-muted-foreground">00905076409961 (واتساب)</p>
                      <p className="text-muted-foreground">00905076439961 (واتساب)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground">Reservation@gorahal.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">ساعات العمل</h3>
                      <p className="text-muted-foreground">الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً</p>
                      <p className="text-muted-foreground">الجمعة - السبت: 10:00 صباحاً - 4:00 مساءً</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">تابعنا على وسائل التواصل الاجتماعي</h2>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="bg-gray-400 text-white p-3 rounded-full cursor-not-allowed opacity-50"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">فيسبوك</span>
                  </Link>

                  <Link
                    href="https://www.instagram.com/gorahaltravel?igsh=bzR0MGI0c2pneGZm"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">انستغرام</span>
                  </Link>

                  <Link
                    href="#"
                    className="bg-gray-400 text-white p-3 rounded-full cursor-not-allowed opacity-50"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">تويتر</span>
                  </Link>

                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-right">
                <h2 className="text-xl font-bold mb-1">العنوان</h2>
                <p className="mb-4 text-sm text-gray-600">mecidiyeköy istanbul</p>
                <div className="rounded-md overflow-hidden w-full h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6015.760606661629!2d28.996925!3d41.07160899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6f83672f8bd%3A0x12c9d57e5a4cc0b8!2zTWVjaWRpeWVrw7Z5LCAzNDM4MSDFnmnFn2xpL8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1745399159793!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">الأسئلة الشائعة</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">كيف يمكنني حجز رحلة؟</h3>
                <p className="text-muted-foreground">
                  يمكنك حجز رحلتك من خلال موقعنا الإلكتروني أو الاتصال بنا مباشرة عبر الهاتف أو البريد الإلكتروني.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">ما هي سياسة الإلغاء؟</h3>
                <p className="text-muted-foreground">
                  يمكن إلغاء الحجز قبل 7 أيام من موعد الرحلة مع استرداد كامل المبلغ. الإلغاء قبل 3 أيام يتم استرداد 50%
                  من المبلغ.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">هل تقدمون خدمات النقل من المطار؟</h3>
                <p className="text-muted-foreground">
                  نعم، نقدم خدمات النقل من وإلى المطار لجميع عملائنا. يرجى إبلاغنا بتفاصيل رحلتك عند الحجز.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">هل تقدمون جولات بلغات مختلفة؟</h3>
                <p className="text-muted-foreground">
                  نعم، نوفر مرشدين سياحيين يتحدثون العربية والإنجليزية والتركية والفرنسية والروسية.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">كم تستغرق مدة معالجة طلب التأشيرة؟</h3>
                <p className="text-muted-foreground">
                  تستغرق معالجة طلب التأشيرة عادة من 3 إلى 5 أيام عمل. نوصي بتقديم الطلب قبل موعد السفر بأسبوعين على
                  الأقل.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">هل يمكنني تخصيص برنامج الرحلة؟</h3>
                <p className="text-muted-foreground">
                  بالتأكيد! نحن نقدم خدمات تخصيص برامج الرحلات حسب رغباتك واحتياجاتك. تواصل معنا لمناقشة التفاصيل.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
