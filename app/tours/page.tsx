import Image from "next/image"
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  CheckCircle,
  Star,
  Plane,
  Car,
  Home,
  DollarSign,
  Utensils,
  Map,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "../components/main-nav"
import { SiteFooter } from "../components/site-footer"

export default function ToursPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Header */}
      <MainNav />

      {/* Page Header */}
      <section className="relative h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2069&auto=format&fit=crop"
          alt="جولات سياحية في تركيا"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">جولات سياحية في تركيا</h1>
          <p className="mt-4 max-w-2xl text-lg">
            اكتشف أفضل العروض السياحية المصممة خصيصاً لتمنحك تجربة سفر لا تُنسى في تركيا
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">عروض سياحية مميزة</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اخترنا لك مجموعة من أفضل العروض السياحية التي تناسب مختلف الاحتياجات والميزانيات، مع خدمات متكاملة وتجارب
            فريدة
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-xl">
              <TabsTrigger value="all">جميع العروض</TabsTrigger>
              <TabsTrigger value="trabzon">طرابزون</TabsTrigger>
              <TabsTrigger value="istanbul">اسطنبول</TabsTrigger>
              <TabsTrigger value="mixed">عروض مشتركة</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            {/* Package 1 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/trabzon.jpg"
                    alt="طرابزون - تجربة الطبيعة الخلابة"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">عرض 1</Badge>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">طرابزون 5 ليالي – تجربة الطبيعة الخلابة</h3>
                        <Badge variant="outline" className="text-primary">
                          الأكثر طلباً
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>طرابزون، تركيا</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>5 ليالي</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>مناسب للعائلات</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        عرض مميز يأخذك في رحلة استكشافية لأجمل المناطق الطبيعية في طرابزون، حيث الجبال الخضراء والبحيرات
                        الساحرة والشلالات المتدفقة.
                      </p>

                      {/* Nuevos iconos de características */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Plane className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">رحلة طيران</span>
                          <span className="text-xs text-gray-500">ذهاب وإياب</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Car className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">نقل خاص</span>
                          <span className="text-xs text-gray-500">من وإلى المطار</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Home className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">فندق 5 نجوم</span>
                          <span className="text-xs text-gray-500">إقامة فاخرة</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Utensils className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">وجبة إفطار</span>
                          <span className="text-xs text-gray-500">بوفيه مفتوح</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Map className="h-5 w-5 text-primary" />
                          الرحلات: 4 رحلات مميزة إلى:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">أوزونغول:</span> بحيرة طبيعية ساحرة بين الجبال، مثالية للمشي
                              والتقاط الصور والاستمتاع بالأجواء الريفية.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">آيدر:</span> وادٍ جبلي مليء بالشلالات وينابيع المياه الحارة،
                              مع جلسات شاي تركي رائعة.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">همسي كوي:</span> قرية مشهورة بمناظرها الخضراء وحلوياتها
                              اللذيذة، مثل الأرز بالحليب.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">حيدر نبي:</span> هضبة مرتفعة بارتفاع 1600 متر، توفر إطلالات
                              بانورامية مذهلة وجلسات شواء لا تُنسى.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                            <Home className="h-4 w-4 text-primary" />
                            الإقامة: فندق 4 أو 5 نجوم
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Car className="h-4 w-4 text-primary" />
                            الخدمات: يشمل الاستقبال والتوصيل من وإلى المطار
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">السعر يبدأ من</div>
                            <div className="text-2xl font-bold text-primary flex items-center">
                              <DollarSign className="h-5 w-5" />
                              599
                            </div>
                          </div>
                          <Link href="/contact">
                            <Button>احجز الآن</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Package 2 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/trabzongecegonuz.png"
                    alt="طرابزون - تجربة فريدة بين الطبيعة"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">عرض 2</Badge>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">طرابزون 5 ليالي (فندق + كوخ) – تجربة فريدة بين الطبيعة</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>طرابزون، تركيا</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>5 ليالي</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>مناسب للأزواج والمغامرين</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        تجربة فريدة تجمع بين رفاهية الفنادق وسحر الأكواخ الجبلية، حيث تستيقظ على أصوات الطبيعة بعيدًا عن
                        صخب المدن.
                      </p>

                      {/* Nuevos iconos de características */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Plane className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">رحلة طيران</span>
                          <span className="text-xs text-gray-500">ذهاب وإياب</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Car className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">نقل خاص</span>
                          <span className="text-xs text-gray-500">طوال الرحلة</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Home className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">إقامة مزدوجة</span>
                          <span className="text-xs text-gray-500">فندق + كوخ</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Utensils className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">وجبات</span>
                          <span className="text-xs text-gray-500">إفطار + عشاء</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Map className="h-5 w-5 text-primary" />
                          الرحلات: 3 رحلات مميزة إلى:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">أوزونغول:</span> المشي حول البحيرة والاستمتاع بمشهد الضباب
                              فوق الماء.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">آيدر:</span> تجربة الاستحمام في المياه الكبريتية الحارة
                              والجلوس في المقاهي الجبلية.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">همسي كوي:</span> تناول الأطعمة المحلية في وسط الطبيعة
                              الخضراء.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                            <Home className="h-4 w-4 text-primary" />
                            الإقامة: 4 أو 5 نجوم + إقامة ليلة في كوخ ريفي
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Car className="h-4 w-4 text-primary" />
                            الخدمات: يشمل النقل من وإلى المطار والكوخ
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">السعر يبدأ من</div>
                            <div className="text-2xl font-bold text-primary flex items-center">
                              <DollarSign className="h-5 w-5" />
                              649
                            </div>
                          </div>
                          <Link href="/contact">
                            <Button>احجز الآن</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Package 3 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2073&auto=format&fit=crop"
                    alt="طرابزون وإسطنبول - مزيج الطبيعة والحضارة"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">عرض 3</Badge>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">طرابزون وإسطنبول 7 ليالي – مزيج الطبيعة والحضارة</h3>
                        <Badge variant="outline" className="text-primary">
                          الأفضل قيمة
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>طرابزون وإسطنبول، تركيا</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>7 ليالي</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>مناسب للعائلات ومحبي الثقافة</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        عرض متكامل يجمع بين الطبيعة الساحرة في الشمال التركي والتاريخ العريق في إسطنبول، مما يضمن لك
                        تجربة متكاملة وممتعة.
                      </p>
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold">الرحلات: 5 جولات متنوعة بين الطبيعة والتاريخ:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">أوزونغول:</span> الاستمتاع بجمال البحيرة والضباب الصباحي.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">آيدر:</span> التنقل بين الشلالات والأنهار مع جلسات شاي تركي
                              تقليدي.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جزيرة الأميرات:</span> رحلة بالقارب إلى جزر خالية من
                              السيارات، مثالية لركوب الدراجات والتجول وسط الطبيعة.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جولة إسطنبول (1):</span> زيارة آيا صوفيا، المسجد الأزرق،
                              السوق المسقوف، والبازار المصري.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جولة إسطنبول (2):</span> استكشاف قصر دولمة بهجة، برج غلطة،
                              والمشي في شارع الاستقلال.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            الإقامة: 4 أو 5 نجوم في طرابزون + 4 أو 5 نجوم في إسطنبول
                          </div>
                          <div className="text-sm text-muted-foreground">
                            الخدمات: يشمل النقل من وإلى المطار في كلا المدينتين
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">السعر يبدأ من</div>
                            <div className="text-2xl font-bold text-primary">$899</div>
                          </div>
                          <Link href="/contact">
                            <Button>احجز الآن</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Package 4 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2134&auto=format&fit=crop"
                    alt="إسطنبول - رحلة في قلب الحضارة التركية"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">عرض 4</Badge>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">إسطنبول 6 ليالي – رحلة في قلب الحضارة التركية</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>إسطنبول، تركيا</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>6 ليالي</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>مناسب لمحبي التاريخ والثقافة</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        عرض مثالي لمحبي المدن النابضة بالحياة، تمنحك فرصة استكشاف إسطنبول بكل تفاصيلها، من أسواقها
                        القديمة إلى معالمها الحديثة.
                      </p>
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold">الرحلات: 4 جولات لاستكشاف المدينة وما حولها:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جزيرة الأميرات:</span> جولة بالقارب وزيارة الجزيرة الهادئة
                              بعيدًا عن ضوضاء المدينة.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جولة إسطنبول الأوروبية:</span> زيارة المعالم التاريخية
                              الشهيرة مثل آيا صوفيا، السلطان أحمد، والتسوق في السوق المسقوف.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جولة إسطنبول الآسيوية:</span> زيارة تل العرائس، برج الفتاة،
                              ومناطق الفاتح وكاديكوي.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">صبنجة ومعشوقية:</span> رحلة خارج إسطنبول لاكتشاف البحيرات
                              والشلالات مع أنشطة ترفيهية مثل التجديف وركوب الدراجات الرباعية.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">الإقامة: فندق 4 أو 5 نجوم في إسطنبول</div>
                          <div className="text-sm text-muted-foreground">الخدمات: يشمل النقل من وإلى المطار</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">السعر يبدأ من</div>
                            <div className="text-2xl font-bold text-primary">$749</div>
                          </div>
                          <Link href="/contact">
                            <Button>احجز الآن</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="trabzon" className="space-y-8">
            {/* Package 1 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=2073&auto=format&fit=crop"
                    alt="طرابزون - تجربة الطبيعة الخلابة"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">عرض 1</Badge>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">طرابزون 5 ليالي – تجربة الطبيعة الخلابة</h3>
                        <Badge variant="outline" className="text-primary">
                          الأكثر طلباً
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>طرابزون، تركيا</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>5 ليالي</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>مناسب للعائلات</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        عرض مميز يأخذك في رحلة استكشافية لأجمل المناطق الطبيعية في طرابزون، حيث الجبال الخضراء والبحيرات
                        الساحرة والشلالات المتدفقة.
                      </p>

                      {/* Nuevos iconos de características */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Plane className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">رحلة طيران</span>
                          <span className="text-xs text-gray-500">ذهاب وإياب</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Car className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">نقل خاص</span>
                          <span className="text-xs text-gray-500">من وإلى المطار</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Home className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">فندق 5 نجوم</span>
                          <span className="text-xs text-gray-500">إقامة فاخرة</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-primary/10 p-2 rounded-full mb-2">
                            <Utensils className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium">وجبة إفطار</span>
                          <span className="text-xs text-gray-500">بوفيه مفتوح</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Map className="h-5 w-5 text-primary" />
                          الرحلات: 4 رحلات مميزة إلى:
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">أوزونغول:</span> بحيرة طبيعية ساحرة بين الجبال، مثالية للمشي
                              والتقاط الصور والاستمتاع بالأجواء الريفية.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">آيدر:</span> وادٍ جبلي مليء بالشلالات وينابيع المياه الحارة،
                              مع جلسات شاي تركي رائعة.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">همسي كوي:</span> قرية مشهورة بمناظرها الخضراء وحلوياتها
                              اللذيذة، مثل الأرز بالحليب.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">حيدر نبي:</span> هضبة مرتفعة بارتفاع 1600 متر، توفر إطلالات
                              بانورامية مذهلة وجلسات شواء لا تُنسى.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                            <Home className="h-4 w-4 text-primary" />
                            الإقامة: فندق 4 أو 5 نجوم
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Car className="h-4 w-4 text-primary" />
                            الخدمات: يشمل الاستقبال والتوصيل من وإلى المطار
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">السعر يبدأ من</div>
                            <div className="text-2xl font-bold text-primary flex items-center">
                              <DollarSign className="h-5 w-5" />
                              599
                            </div>
                          </div>
                          <Link href="/contact">
                            <Button>احجز الآن</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>


          </TabsContent>

          <TabsContent value="istanbul" className="space-y-8">
            {/* Package 4 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=2134&auto=format&fit=crop"
                    alt="إسطنبول - رحلة في قلب الحضارة التركية"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">عرض 4</Badge>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">إسطنبول 6 ليالي – رحلة في قلب الحضارة التركية</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>إسطنبول، تركيا</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>6 ليالي</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>مناسب لمحبي التاريخ والثقافة</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        عرض مثالي لمحبي المدن النابضة بالحياة، تمنحك فرصة استكشاف إسطنبول بكل تفاصيلها، من أسواقها
                        القديمة إلى معالمها الحديثة.
                      </p>
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold">الرحلات: 4 جولات لاستكشاف المدينة وما حولها:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جزيرة الأميرات:</span> جولة بالقارب وزيارة الجزيرة الهادئة
                              بعيدًا عن ضوضاء المدينة.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جولة إسطنبول الأوروبية:</span> زيارة المعالم التاريخية
                              الشهيرة مثل آيا صوفيا، السلطان أحمد، والتسوق في السوق المسقوف.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جولة إسطنبول الآسيوية:</span> زيارة تل العرائس، برج الفتاة،
                              ومناطق الفاتح وكاديكوي.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">صبنجة ومعشوقية:</span> رحلة خارج إسطنبول لاكتشاف البحيرات
                              والشلالات مع أنشطة ترفيهية مثل التجديف وركوب الدراجات الرباعية.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">الإقامة: فندق 4 أو 5 نجوم في إسطنبول</div>
                          <div className="text-sm text-muted-foreground">الخدمات: يشمل النقل من وإلى المطار</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">السعر يبدأ من</div>
                            <div className="text-2xl font-bold text-primary">$749</div>
                          </div>
                          <Link href="/contact">
                            <Button>احجز الآن</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="mixed" className="space-y-8">
            {/* Package 3 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2073&auto=format&fit=crop"
                    alt="طرابزون وإسطنبول - مزيج الطبيعة والحضارة"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">عرض 3</Badge>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">طرابزون وإسطنبول 7 ليالي – مزيج الطبيعة والحضارة</h3>
                        <Badge variant="outline" className="text-primary">
                          الأفضل قيمة
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>طرابزون وإسطنبول، تركيا</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>7 ليالي</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span>مناسب للعائلات ومحبي الثقافة</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        عرض متكامل يجمع بين الطبيعة الساحرة في الشمال التركي والتاريخ العريق في إسطنبول، مما يضمن لك
                        تجربة متكاملة وممتعة.
                      </p>
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold">الرحلات: 5 جولات متنوعة بين الطبيعة والتاريخ:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">أوزونغول:</span> الاستمتاع بجمال البحيرة والضباب الصباحي.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">آيدر:</span> التنقل بين الشلالات والأنهار مع جلسات شاي تركي
                              تقليدي.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جزيرة الأميرات:</span> رحلة بالقارب إلى جزر خالية من
                              السيارات، مثالية لركوب الدراجات والتجول وسط الطبيعة.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جولة إسطنبول (1):</span> زيارة آيا صوفيا، المسجد الأزرق،
                              السوق المسقوف، والبازار المصري.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">جولة إسطنبول (2):</span> استكشاف قصر دولمة بهجة، برج غلطة،
                              والمشي في شارع الاستقلال.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            الإقامة: 4 أو 5 نجوم في طرابزون + 4 أو 5 نجوم في إسطنبول
                          </div>
                          <div className="text-sm text-muted-foreground">
                            الخدمات: يشمل النقل من وإلى المطار في كلا المدينتين
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">السعر يبدأ من</div>
                            <div className="text-2xl font-bold text-primary">$899</div>
                          </div>
                          <Link href="/contact">
                            <Button>احجز الآن</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">لماذا تختار رحال ترافل؟</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">خبرة أكثر من 10 سنوات</h3>
              <p className="text-sm text-muted-foreground">
                نتمتع بخبرة واسعة في مجال السياحة التركية ونعرف أفضل الأماكن والتجارب
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">مرشدون محترفون</h3>
              <p className="text-sm text-muted-foreground">
                فريق من المرشدين السياحيين المتحدثين باللغة العربية ذوي خبرة عالية
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
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">عروض مخصصة</h3>
              <p className="text-sm text-muted-foreground">
                نقدم عروض سياحية يمكن تخصيصها حسب رغباتك واحتياجاتك الخاصة
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
              <h3 className="font-semibold mb-2">دعم على مدار الساعة</h3>
              <p className="text-sm text-muted-foreground">
                فريق خدمة العملاء متاح 24/7 للإجابة على استفساراتك وتقديم المساعدة
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}


      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">احجز رحلتك الآن واستمتع بتجربة سفر لا تُنسى</h2>
          <p className="max-w-2xl mx-auto mb-6">
            نحن هنا لمساعدتك في تخطيط رحلتك المثالية إلى تركيا. تواصل معنا اليوم للحصول على استشارة مجانية.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

