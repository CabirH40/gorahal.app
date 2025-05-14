import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "../components/main-nav"
import { SiteFooter } from "../components/site-footer"

export default function DestinationsPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Header */}
      <MainNav />

      {/* Page Header */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2073&auto=format&fit=crop"
          alt="وجهات سياحية في تركيا"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">وجهات سياحية في تركيا</h1>
          <p className="mt-4 max-w-2xl text-lg">
            اكتشف أجمل المدن والمناطق السياحية في تركيا واستمتع بتجربة سفر لا تُنسى
          </p>
        </div>
      </section>

      {/* Destinations Categories */}
      <section className="container py-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-xl">
              <TabsTrigger value="all">جميع الوجهات</TabsTrigger>
              <TabsTrigger value="cities">المدن</TabsTrigger>
              <TabsTrigger value="nature">الطبيعة</TabsTrigger>
              <TabsTrigger value="beaches">الشواطئ</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            {/* Featured Destinations */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">وجهات مميزة</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" id="prev-destination" aria-label="السابق">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" id="next-destination" aria-label="التالي">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredDestinations.map((destination) => (
                  <Card key={destination.id} className="overflow-hidden">
                    <div className="relative h-60">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                      <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">مميز</Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{destination.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{destination.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-muted-foreground text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>{destination.location}</span>
                      </div>
                      <p className="mt-2 text-sm line-clamp-3">{destination.description}</p>
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
            </div>

            {/* All Destinations */}
            <div>
              <h2 className="text-2xl font-bold mb-6">جميع الوجهات</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allDestinations.map((destination) => (
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
            </div>
          </TabsContent>

          <TabsContent value="cities" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allDestinations
                .filter((destination) => destination.type === "city")
                .map((destination) => (
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
          </TabsContent>

          <TabsContent value="nature" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allDestinations
                .filter((destination) => destination.type === "nature")
                .map((destination) => (
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
          </TabsContent>

          <TabsContent value="beaches" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allDestinations
                .filter((destination) => destination.type === "beach")
                .map((destination) => (
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
          </TabsContent>
        </Tabs>
      </section>

      {/* Travel Tips */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">نصائح للسفر إلى تركيا</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M12 11V3"></path>
                <path d="M17 8h2"></path>
                <path d="M5 8h2"></path>
                <path d="M12 3a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2Z"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">أفضل وقت للزيارة</h3>
            <p className="text-muted-foreground">
              أفضل وقت لزيارة تركيا هو خلال فصلي الربيع (أبريل-مايو) والخريف (سبتمبر-أكتوبر) حيث الطقس معتدل ومناسب
              للتجول واستكشاف المعالم السياحية.
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="font-bold mb-2">العملة والتكاليف</h3>
            <p className="text-muted-foreground">
              العملة الرسمية هي الليرة التركية. تعتبر تركيا وجهة اقتصادية مقارنة بالدول الأوروبية، ويمكنك الاستمتاع
              بإقامة جيدة وطعام رائع بأسعار معقولة.
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M16 22h4a2 2 0 0 0 2-2v-1a5 5 0 0 0-5-5h-1"></path>
                <path d="M12 17h-1a5 5 0 0 0-5 5v1a2 2 0 0 0 2 2h4"></path>
                <path d="M10 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="M18 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="M10 7v3a5 5 0 0 0 10 0V7"></path>
              </svg>
            </div>
            <h3 className="font-bold mb-2">اللغة والتواصل</h3>
            <p className="text-muted-foreground">
              اللغة الرسمية هي التركية، لكن في المناطق السياحية يتحدث الكثيرون الإنجليزية والعربية. من المفيد تعلم بعض
              العبارات التركية البسيطة قبل السفر.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">هل أنت مستعد لاستكشاف تركيا؟</h2>
          <p className="max-w-2xl mx-auto mb-6">
            دعنا نساعدك في تخطيط رحلتك المثالية إلى تركيا. اختر وجهتك المفضلة واستمتع بتجربة سفر لا تُنسى.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                تواصل معنا
              </Button>
            </Link>
            <Link href="/tours">
              <Button variant="outline" size="lg" className="bg-white/10">
                استكشف الجولات السياحية
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

// بيانات الوجهات المميزة
const featuredDestinations = [
  {
    id: 1,
    name: "اسطنبول",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2073&auto=format&fit=crop",
    rating: 4.8,
    location: "شمال غرب تركيا",
    description:
      "مدينة تاريخية تجمع بين الثقافتين الأوروبية والآسيوية، وتضم معالم شهيرة مثل آيا صوفيا والمسجد الأزرق وقصر توبكابي والبازار الكبير. استمتع بجولة بحرية في مضيق البوسفور واكتشف سحر هذه المدينة الفريدة.",
    type: "city",
  },
  {
    id: 2,
    name: "كابادوكيا",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    location: "وسط تركيا",
    description:
      "منطقة فريدة من نوعها تشتهر بتكويناتها الصخرية المميزة ورحلات المناطيد الساخنة. استمتع بمشاهدة شروق الشمس من المنطاد واستكشف المدن والكنائس المحفورة في الصخور والوديان الملونة.",
    type: "nature",
  },
  {
    id: 3,
    name: "أنطاليا",
    image: "/antalya.jpg",
    rating: 4.7,
    location: "جنوب تركيا",
    description:
      "وجهة سياحية ساحلية مشهورة بشواطئها الجميلة ومناظرها الطبيعية الخلابة. استمتع بالاسترخاء على الشواطئ الرملية واستكشف المدينة القديمة (كاليتشي) والشلالات المذهلة والمواقع الأثرية القديمة.",
    type: "beach",
  },
]

// بيانات جميع الوجهات
const allDestinations = [
  {
    id: 1,
    name: "اسطنبول",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2073&auto=format&fit=crop",
    rating: 4.8,
    location: "شمال غرب تركيا",
    description: "مدينة تاريخية تجمع بين الثقافتين الأوروبية والآسيوية، وتضم معالم شهيرة مثل آيا صوفيا والمسجد الأزرق.",
    type: "city",
  },
  {
    id: 2,
    name: "أنطاليا",
    image: "/antalya.jpg",
    rating: 4.7,
    location: "جنوب تركيا",
    description: "وجهة سياحية ساحلية مشهورة بشواطئها الجميلة ومناظرها الطبيعية الخلابة.",
    type: "beach",
  },
  {
    id: 3,
    name: "كابادوكيا",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    location: "وسط تركيا",
    description: "منطقة فريدة من نوعها تشتهر بتكويناتها الصخرية المميزة ورحلات المناطيد الساخنة.",
    type: "nature",
  },
  {
    id: 4,
    name: "بودروم",
    image: "/bodrum.jpg",
    rating: 4.6,
    location: "جنوب غرب تركيا",
    description: "منتجع ساحلي شهير يجذب السياح من جميع أنحاء العالم بشواطئه وحياته الليلية النابضة.",
    type: "beach",
  },
  {
    id: 5,
    name: "طرابزون",
    image: "/trabzon.jpg",
    rating: 4.5,
    location: "شمال شرق تركيا",
    description: "مدينة ساحلية تقع على البحر الأسود، تشتهر بمناظرها الطبيعية الخضراء وبحيرة أوزنجول الشهيرة.",
    type: "nature",
  },
  {
    id: 6,
    name: "فتحية",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    location: "جنوب غرب تركيا",
    description: "وجهة سياحية شهيرة تجمع بين الشواطئ الجميلة والجبال الخضراء، مشهورة بشاطئ أولودينيز والطيران المظلي.",
    type: "beach",
  },
  {
    id: 7,
    name: "أفسس",
    image: "/efse.jpg",
    rating: 4.8,
    location: "غرب تركيا",
    description: "موقع أثري روماني قديم يضم معابد ومسارح ومكتبة سيلسوس الشهيرة، من أهم المواقع التاريخية في تركيا.",
    type: "city",
  },
  {
    id: 8,
    name: "مرسين",
    image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070&auto=format&fit=crop",
    rating: 4.4,
    location: "جنوب تركيا",
    description: "مدينة ساحلية هادئة على البحر المتوسط، تتميز بشواطئها النظيفة وأسعارها المعقولة وأجوائها العائلية.",
    type: "beach",
  },
  {
    id: 9,
    name: "بورصة",
    image: "/bursa.jpg",
    rating: 4.6,
    location: "شمال غرب تركيا",
    description: "مدينة تاريخية تقع على سفح جبل أولوداغ، تشتهر بينابيعها الحارة ومعالمها العثمانية والتزلج في الشتاء.",
    type: "city",
  },
  {
    id: 10,
    name: "أوزنجول",
    image: "/uzungöl.jpg",
    rating: 4.9,
    location: "شمال شرق تركيا",
    description: "بحيرة طبيعية خلابة محاطة بالجبال الخضراء، من أجمل المناطق الطبيعية في تركيا وأكثرها شعبية.",
    type: "nature",
  },
 

]

