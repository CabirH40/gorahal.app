"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MainNav } from "../../components/main-nav"
import { SiteFooter } from "../../components/site-footer"
import dynamic from "next/dynamic"

// Importar el componente del mapa de forma dinámica con SSR desactivado
const MapComponent = dynamic(() => import("../../components/map-component"), {
  loading: () => (
    <div className="h-[600px] w-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-lg">جاري تحميل الخريطة...</p>
      </div>
    </div>
  ),
  ssr: false,
})

// Datos de los destinos para el mapa
const mapDestinations = [
  {
    id: 1,
    name: "اسطنبول",
    position: [41.0082, 28.9784],
    description: "مدينة تاريخية تجمع بين الثقافتين الأوروبية والآسيوية",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "أنطاليا",
    position: [36.8969, 30.7133],
    description: "وجهة سياحية ساحلية مشهورة بشواطئها الجميلة",
    image: "https://images.unsplash.com/photo-1688728489454-3b52e347e6fb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "كابادوكيا",
    position: [38.6431, 34.8307],
    description: "منطقة فريدة تشتهر بتكويناتها الصخرية ورحلات المناطيد",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "بودروم",
    position: [37.0343, 27.4305],
    description: "منتجع ساحلي شهير يجذب السياح من جميع أنحاء العالم",
    image: "https://images.unsplash.com/photo-1600240644455-fd509322a816?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "طرابزون",
    position: [41.0027, 39.7168],
    description: "مدينة ساحلية تقع على البحر الأسود، تشتهر بمناظرها الطبيعية",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=2073&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "فتحية",
    position: [36.621, 29.112],
    description: "وجهة سياحية تجمع بين الشواطئ الجميلة والجبال الخضراء",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "أفسس",
    position: [37.9398, 27.3419],
    description: "موقع أثري روماني قديم يضم معابد ومسارح ومكتبة سيلسوس",
    image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "مرسين",
    position: [36.8121, 34.6415],
    description: "مدينة ساحلية هادئة على البحر المتوسط",
    image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "بورصة",
    position: [40.1885, 29.061],
    description: "مدينة تاريخية تقع على سفح جبل أولوداغ",
    image: "https://images.unsplash.com/photo-1673169452865-8d1a1d5b3d09?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "أوزنجول",
    position: [40.6952, 40.2997],
    description: "بحيرة طبيعية خلابة محاطة بالجبال الخضراء",
    image: "https://images.unsplash.com/photo-1622819584099-e04e752cc6e7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "باموكالي",
    position: [37.9137, 29.1187],
    description: "موقع طبيعي فريد يتكون من مدرجات بيضاء من الحجر الجيري",
    image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "أنقرة",
    position: [39.9334, 32.8597],
    description: "العاصمة التركية، تضم متاحف مهمة ومعالم حديثة",
    image: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?q=80&w=2071&auto=format&fit=crop",
  },
]

export default function InteractiveMapPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Header */}
      <MainNav />

      {/* Page Header */}
      <section className="relative h-[200px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
          alt="خريطة تركيا التفاعلية"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">خريطة تركيا التفاعلية</h1>
          <p className="mt-4 max-w-2xl text-lg">استكشف أجمل الوجهات السياحية في تركيا على الخريطة التفاعلية</p>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="container py-8">
        <Card className="p-4 mb-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">استكشف وجهات تركيا السياحية</h2>
            <p className="text-muted-foreground">انقر على العلامات في الخريطة لمعرفة المزيد عن كل وجهة</p>
          </div>

          <MapComponent destinations={mapDestinations} />
        </Card>

        {/* Destinations List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">قائمة الوجهات السياحية</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mapDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{destination.description}</p>
                  <Link href={`/destinations/${destination.id}`}>
                    <Button variant="link" className="p-0 h-auto mt-2">
                      عرض التفاصيل
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

