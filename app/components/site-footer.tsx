"use client"
import React from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Logo } from "./logo"

export function SiteFooter() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-5">
          {/* العمود 1: شعار + وصف */}
          <div>
            <Logo className="mb-4" />
            <p className="text-muted-foreground">
              نقدم لك أفضل تجارب السفر والسياحة في تركيا مع خدمات متميزة وأسعار تنافسية.
            </p>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">الرئيسية</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-foreground">الوجهات</Link></li>
              <li><Link href="/tours" className="text-muted-foreground hover:text-foreground">الجولات</Link></li>
              <li><Link href="/hotels" className="text-muted-foreground hover:text-foreground">الفنادق</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* العمود 3: وجهات مشهورة */}
          <div>
            <h3 className="font-semibold mb-4">الوجهات الشهيرة</h3>
            <ul className="space-y-2">
              <li><Link href="/destinations" className="text-muted-foreground hover:text-foreground">اسطنبول</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-foreground">أنطاليا</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-foreground">كابادوكيا</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-foreground">بودروم</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-foreground">طرابزون</Link></li>
            </ul>
          </div>

          {/* العمود 4: معلومات التواصل */}
          <div>
            <h3 className="font-semibold mb-4">تواصل معنا</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>mecidiyeköy istanbul</p>
              <p className="text-muted-foreground">
                البريد الإلكتروني:{" "}
                <a
                  href="mailto:Reservation@GoRahal.com"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText("Reservation@GoRahal.com");
                    window.location.href = "mailto:Reservation@GoRahal.com";
                  }}
                  className="text-primary underline hover:text-blue-600 transition cursor-pointer"
                >
                  Reservation@GoRahal.com
                </a>
              </p>
              <p className="text-muted-foreground">
                الهاتف:{" "}
                <span
                  onClick={() => navigator.clipboard.writeText("00905076409961")}
                  className="text-primary underline hover:text-blue-600 transition cursor-pointer"
                >
                  00905076409961
                </span>
              </p>

            </address>
          </div>

          {/* العمود 5: الترخيص */}
          <div>
            <h3 className="font-semibold mb-4">الترخيص</h3>
            <p className="text-muted-foreground text-sm">
              منظمة تورساب للسياحة<br />
              <span dir="rtl" style={{ unicodeBidi: "embed" }}>
              © TÜRSAB Birliği
              </span><br />
              رقم: 12835
            </p>

          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2025 Go Rahal . جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
