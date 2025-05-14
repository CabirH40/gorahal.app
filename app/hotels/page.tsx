import Image from "next/image"
import { MapPin, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "../components/main-nav"
import { SiteFooter } from "../components/site-footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function HotelsPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Header */}
      <MainNav />

      {/* Page Header */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
          alt="فنادق تركيا"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">فنادق تركيا</h1>
          <p className="mt-4 max-w-2xl text-lg">اكتشف أفضل الفنادق والمنتجعات في تركيا بأسعار تنافسية وخدمات متميزة</p>
        </div>
      </section>

      {/* Hotels Listing */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">الفنادق المتاحة</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">ترتيب حسب:</span>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="الأكثر توصية" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">الأكثر توصية</SelectItem>
                <SelectItem value="rating">التقييم</SelectItem>
                <SelectItem value="popularity">الأكثر شعبية</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {hotel.discount && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    خصم {hotel.discount}%
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{hotel.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{hotel.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2 text-muted-foreground text-sm">
                  <MapPin className="h-3 w-3" />
                  <span>{hotel.location}</span>
                </div>
                <p className="mt-2 text-sm line-clamp-2">{hotel.description}</p>
                <div className="flex items-center justify-end mt-4">
                  <Link href="/contact">
                    <Button size="sm">احجز الآن</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">فنادق مميزة</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src="/forsizon.avif"
                    alt="فندق فورسيزونز اسطنبول"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">فندق فورسيزونز اسطنبول</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.9</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>البوسفور، اسطنبول</span>
                    </div>
                    <p className="mt-4 text-sm">
                      فندق فاخر يقع على ضفاف مضيق البوسفور، يوفر إطلالات خلابة وخدمات استثنائية مع مطاعم عالمية المستوى
                      وسبا فاخر.
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-end">
                      <Link href="/contact">
                        <Button>احجز الآن</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src="/maris.avif"
                    alt="منتجع ماريس كابادوكيا"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">منتجع ماريس كابادوكيا</h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-muted-foreground text-sm">
                      <MapPin className="h-3 w-3" />
                      <span>أورجوب، كابادوكيا</span>
                    </div>
                    <p className="mt-4 text-sm">
                      منتجع فريد محفور في الصخر يوفر تجربة إقامة استثنائية في كهوف فاخرة مع إطلالات بانورامية على
                      المناطيد الملونة.
                    </p>
                  </div>
                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-end">
                      <Link href="/contact">
                        <Button>احجز الآن</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold text-center mb-8">لماذا تحجز معنا؟</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="text-center p-6">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">أفضل الأسعار</h3>
            <p className="text-sm text-muted-foreground">
              نضمن لك أفضل الأسعار التنافسية مع خيارات متنوعة تناسب ميزانيتك
            </p>
          </Card>
          <Card className="text-center p-6">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">دعم على مدار الساعة</h3>
            <p className="text-sm text-muted-foreground">
              فريق خدمة العملاء متاح 24/7 للإجابة على استفساراتك وتقديم المساعدة
            </p>
          </Card>
          <Card className="text-center p-6">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">مرونة في الحجز</h3>
            <p className="text-sm text-muted-foreground">
              سياسات إلغاء مرنة وخيارات تعديل الحجز لراحتك وضمان تجربة سفر خالية من المتاعب
            </p>
          </Card>
          <Card className="text-center p-6">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                <path d="m14.5 9-5 5"></path>
                <path d="m9.5 9 5 5"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">حجز آمن</h3>
            <p className="text-sm text-muted-foreground">
              نظام حجز آمن ومشفر يحمي بياناتك الشخصية وتفاصيل الدفع الخاصة بك
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

// بيانات الفنادق
const hotels = [
  {
    id: 1,
    name: "فندق ذا مارمرة تقسيم",
    image: "/zemarmara.avif",
    rating: 4.7,
    location: "تقسيم، اسطنبول",
    description: "فندق فاخر في قلب اسطنبول، يوفر إطلالات رائعة على المدينة مع خدمات متميزة وغرف أنيقة.",
    discount: 15,
  },
  {
    id: 2,
    name: "فندق كونراد اسطنبول البوسفور",
    image: "/konrad.avif",
    rating: 4.9,
    location: "بشكتاش، اسطنبول",
    description: "فندق راقي يطل على مضيق البوسفور، يقدم تجربة إقامة فاخرة مع مرافق عصرية ومطاعم متنوعة.",
  },
  {
    id: 3,
    name: "فندق ريكسوس بريميوم بودروم",
    image: "/reksos.avif",
    rating: 4.8,
    location: "بودروم",
    description: "منتجع شاطئي فاخر يوفر إقامة شاملة مع مسابح متعددة ومطاعم متنوعة وأنشطة ترفيهية.",
    discount: 10,
  },
  {
    id: 4,
    name: "فندق سوما كيف كابادوكيا",
    image: "/suma.avif",
    rating: 4.6,
    location: "نيفشهير، كابادوكيا",
    description: "فندق كهفي فريد محفور في الصخر، يوفر تجربة إقامة استثنائية مع إطلالات على المناطيد الملونة.",
  },
  {
    id: 5,
    name: "فندق ديديمان أنطاليا",
    image: "/dediman.avif",
    rating: 4.5,
    location: "لارا، أنطاليا",
    description: "منتجع ساحلي فاخر مع شاطئ خاص ومسابح متعددة وخيارات طعام متنوعة ومرافق ترفيهية.",
    discount: 20,
  },
  {
    id: 6,
    name: "فندق هيلتون اسطنبول البوسفور",
    image: "/şişli.avif",
    rating: 4.7,
    location: "شيشلي، اسطنبول",
    description: "فندق عصري يقع في منطقة راقية من اسطنبول، يوفر غرف أنيقة ومطاعم متنوعة ومركز للياقة البدنية.",
  },
]

