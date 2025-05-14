import Image from "next/image"
import { MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "./components/main-nav"
import { SiteFooter } from "./components/site-footer"

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Header */}
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop"
          alt="منظر طبيعي لتركيا"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">اكتشف جمال تركيا</h1>
          <p className="mt-4 max-w-2xl text-lg">استمتع برحلة لا تُنسى في واحدة من أجمل الوجهات السياحية في العالم</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                تواصل معنا
              </Button>
            </Link>
            <Link href="/tours">
              <Button variant="outline" size="lg" className="bg-white/10">
                اكتشف المزيد من العروض
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">الوجهات الشهيرة</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" id="prev-destination" aria-label="السابق">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" id="next-destination" aria-label="التالي">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{destination.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{destination.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2 text-muted-foreground text-sm">
                  <MapPin className="h-3 w-3" />
                  <span>{destination.location}</span>
                </div>
                <p className="mt-2 text-sm line-clamp-2">{destination.description}</p>

                {/* ✅ زر عرض التفاصيل المرتبط بالـ id */}
                <Link href={`/destinations/${destination.id}`}>
                  <Button variant="link" className="p-0 h-auto mt-2">
                    عرض التفاصيل
                    <ChevronLeft className="h-3 w-3 mr-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

          ))}
        </div>
      </section>

      {/* Featured Tour */}
      <section className="bg-muted py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2069&auto=format&fit=crop"
                alt="جولة مميزة في اسطنبول"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">جولة مميزة في اسطنبول</h2>
              <p className="text-muted-foreground">
                استكشف جمال اسطنبول التاريخية مع جولتنا المميزة التي تأخذك في رحلة عبر الزمن لاكتشاف المعالم الأثرية
                والثقافية الرائعة في هذه المدينة الساحرة.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>زيارة آيا صوفيا والمسجد الأزرق</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>جولة في قصر توبكابي</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>رحلة بحرية في مضيق البوسفور</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>تجربة تسوق في البازار الكبير</span>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-2xl font-bold">$599</span>
                  <span className="text-muted-foreground"> / للشخص</span>
                </div>
                <Link href="/contact">
                  <Button>احجز الآن</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold text-center mb-8">ماذا يقول عملاؤنا</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                  />
                ))}
              </div>
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src="/user-icon-svgrepo-com.svg"
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

// بيانات الوجهات
const destinations = [
  {
    id: 1,
    name: "اسطنبول",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2073&auto=format&fit=crop",
    rating: 4.8,
    location: "شمال غرب تركيا",
    description: "مدينة تاريخية تجمع بين الثقافتين الأوروبية والآسيوية، وتضم معالم شهيرة مثل آيا صوفيا والمسجد الأزرق.",
  },
  {
    id: 3,
    name: "أنطاليا",
    image: "/antalya.jpg",
    rating: 4.7,
    location: "جنوب تركيا",
    description: "وجهة سياحية ساحلية مشهورة بشواطئها الجميلة ومناظرها الطبيعية الخلابة.",
  },
  {
    id: 2,
    name: "كابادوكيا",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    location: "وسط تركيا",
    description: "منطقة فريدة من نوعها تشتهر بتكويناتها الصخرية المميزة ورحلات المناطيد الساخنة.",
  },
  {
    id: 4,
    name: "بودروم",
    image: "/bodrum.jpg",
    rating: 4.6,
    location: "جنوب غرب تركيا",
    description: "منتجع ساحلي شهير يجذب السياح من جميع أنحاء العالم بشواطئه وحياته الليلية النابضة.",
  },
]

// بيانات التقييمات
const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "مساء الخير اختي مرح وصلنا بالسلامة الحمدلله شكرا على البرامج الحلوة استمتعنا لآخر درجة السفرة كانت موفقة الحمدلله وانتم ماشاءالله عليكم متعاونين وما قصرتم معانا فرصة سعيدة والله يوفقكم دايما 🩵",
    name: "عبد الرحمن العسيري",
    location: "السعودية",
  },
  {
    id: 2,
    rating: 5,
    text: "Salam 🌸 kenet 7abe bas eshkerkon 3a khadametkon 3anjad kan kel shi kteer 7elo w mawaqe3 l hotels kan jeddan khayar mwaffa2 3anjad w labbaytoona w se3dtoona bi kel shi thank u 3anjad kteer w ya3teekon alf 3afye 🌸",
    name: "سيرين كنجو",
    location: "لبنان",
  },
  {
    id: 3,
    rating: 4,
    text: "بودي ان نتقدم لكي بخالص الشكر والتقدير على الاهتمام البالغ الذي قوبلنا وعلى المعلومات الوفيرة وعلى البرامج التي كانت بفضل من الله ومنك شخصيا برامج تركت الكثير في نفوسنا وذكريات جميلة عن مدينة طرابزون ولزنجول وكافة المناطق السياحية التي زرناها ، داعين الله سبحانه وتعالي ان يوفقك ويسعدك والوصول الى اعلي المناصبوالشكر موصول للسائق الذي كان ونعم السائق المثالي والانساني قبل ان يكون مهني تحياتي له والجميع على امل ان نلتقي في القريب العاجل مع تحيات ام وابو فواز",
    name: "ابو فواز",
    location: "السعودية",
  },
]

