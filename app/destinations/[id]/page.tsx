import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Star, ArrowLeft, Clock, Users, Camera, Landmark, Utensils, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "../../components/main-nav"
import { SiteFooter } from "../../components/site-footer"

// Combinar todos los destinos en un solo array
const destinations = [
  // Destinos destacados con información completa
  {
    id: 1,
    name: "اسطنبول",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2073&auto=format&fit=crop",
    rating: 4.8,
    location: "شمال غرب تركيا",
    description:
      "مدينة تاريخية تجمع بين الثقافتين الأوروبية والآسيوية، وتضم معالم شهيرة مثل آيا صوفيا والمسجد الأزرق وقصر توبكابي والبازار الكبير. استمتع بجولة بحرية في مضيق البوسفور واكتشف سحر هذه المدينة الفريدة.",
    type: "city",
    longDescription: `
      اسطنبول هي أكبر مدينة في تركيا وتعتبر مركزاً ثقافياً واقتصادياً للبلاد. تقع المدينة على مضيق البوسفور الذي يفصل بين قارتي آسيا وأوروبا، مما يجعلها المدينة الوحيدة في العالم التي تمتد عبر قارتين.

      تتميز اسطنبول بتاريخها العريق الذي يمتد لأكثر من 2500 عام، حيث كانت عاصمة للإمبراطوريات الرومانية والبيزنطية والعثمانية. هذا التاريخ الغني انعكس على معالمها المعمارية الفريدة التي تجمع بين الطرازين الشرقي والغربي.

      من أبرز معالم اسطنبول آيا صوفيا، وهي كنيسة تحولت إلى مسجد ثم متحف وأخيراً عادت مسجداً، والمسجد الأزرق المشهور بقبابه الست ومآذنه الست، وقصر توبكابي الذي كان مقر إقامة السلاطين العثمانيين لقرون، والبازار الكبير الذي يعد من أقدم وأكبر الأسواق المغطاة في العالم.

      تشتهر المدينة أيضاً بمطبخها المتنوع الذي يجمع بين النكهات التركية والشرقية والمتوسطية، ومقاهيها التقليدية، وحماماتها التركية، وجولاتها البحرية في مضيق البوسفور التي توفر إطلالات بانورامية على المدينة.
    `,
    attractions: [
      {
        name: "آيا صوفيا",
        description:
          "معلم تاريخي فريد كان كنيسة ثم تحول إلى مسجد ثم متحف وأخيراً عاد مسجداً، يتميز بقبته الضخمة وزخارفه البيزنطية والإسلامية.",
        image: "/ayasofya.jpg",
      },
      {
        name: "المسجد الأزرق",
        description:
          "أحد أشهر المساجد في العالم، يتميز بقبابه الست ومآذنه الست والبلاط الأزرق الذي يزين جدرانه الداخلية.",
        image: "/mavicami.webp",
      },
      {
        name: "قصر توبكابي",
        description: "قصر عثماني كان مقر إقامة السلاطين العثمانيين لقرون، يضم مجموعة من المباني والحدائق والمتاحف.",
        image: "/topkapı.jpg",
      },
      {
        name: "البازار الكبير",
        description:
          "أحد أكبر وأقدم الأسواق المغطاة في العالم، يضم أكثر من 4000 متجر تبيع السجاد والمجوهرات والتوابل والحلويات والهدايا التذكارية.",
        image: "/bazar.jpg",
      },
    ],
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
    longDescription: `
      كابادوكيا هي منطقة تاريخية وجيولوجية فريدة تقع في وسط تركيا، وتشتهر بتكويناتها الصخرية الغريبة التي تشبه المداخن والتي تكونت نتيجة لعوامل التعرية على مدى ملايين السنين.

      تعتبر كابادوكيا واحدة من أكثر الوجهات السياحية شهرة في تركيا، حيث تجذب الزوار من جميع أنحاء العالم للاستمتاع برحلات المناطيد الساخنة التي توفر إطلالات بانورامية مذهلة على المناظر الطبيعية الخلابة، خاصة عند شروق الشمس.

      تضم المنطقة العديد من المدن والكنائس المحفورة في الصخور، والتي تعود إلى العصور الوسطى عندما استخدمها المسيحيون الأوائل كملاجئ للهروب من الاضطهاد. كما تشتهر المنطقة بمدنها الجوفية التي كانت تستخدم كملاجئ للسكان المحليين خلال فترات الغزو.

      يمكن للزوار الإقامة في فنادق فريدة محفورة في الصخور، واستكشاف الوديان الملونة مثل وادي الحب ووادي الحمام، والاستمتاع بالمأكولات التركية التقليدية في المطاعم المحلية.
    `,
    attractions: [
      {
        name: "رحلات المناطيد الساخنة",
        description: "تجربة لا تنسى لمشاهدة شروق الشمس فوق التكوينات الصخرية الفريدة من منظور جوي.",
        image: "/Kapadokya.jpg",
      },
      {
        name: "متحف جورمي المفتوح",
        description: "موقع تراث عالمي لليونسكو يضم كنائس ومساكن محفورة في الصخور تعود للقرن العاشر والحادي عشر.",
        image: "/muzeçorim.jpg",
      },
      {
        name: "مدينة درينكويو الجوفية",
        description: "مدينة تحت الأرض تتكون من عدة طوابق وممرات محفورة في الصخر، استخدمت كملجأ للسكان قديماً.",
        image: "/derinkoy.jpg",
      },
      {
        name: "وادي الحب",
        description: "وادي مشهور بتكويناته الصخرية الفريدة التي تشبه المداخن، مثالي للمشي وركوب الدراجات.",
        image: "/sevgivadisi.jpg",
      },
    ],
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
    longDescription: `
      أنطاليا هي مدينة ساحلية تقع على الساحل الجنوبي لتركيا المطل على البحر المتوسط، وتعتبر عاصمة السياحة التركية ووجهة سياحية شهيرة على مدار العام.

      تتميز أنطاليا بشواطئها الرملية الجميلة ومياهها الزرقاء الصافية، مما يجعلها وجهة مثالية لعشاق الشمس والبحر. كما تضم المدينة العديد من المنتجعات الفاخرة والفنادق التي توفر خدمات متميزة للسياح.

      تشتهر المدينة بمدينتها القديمة (كاليتشي) التي تضم شوارع ضيقة متعرجة ومباني تاريخية وأسواق تقليدية. كما تحتوي على العديد من المواقع الأثرية مثل بوابة هادريان الرومانية ومسرح أسبندوس القديم.

      تحيط بأنطاليا مناظر طبيعية خلابة، بما في ذلك جبال طوروس المهيبة والشلالات المذهلة مثل شلالات دودن وكورشونلو. كما تعتبر المدينة نقطة انطلاق مثالية لاستكشاف المواقع الأثرية القريبة مثل بيرجي وفاسيليس.
    `,
    attractions: [
      {
        name: "كاليتشي (المدينة القديمة)",
        description: "مدينة تاريخية تضم شوارع ضيقة متعرجة ومباني عثمانية قديمة ومرفأ تاريخي جميل.",
        image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6e33?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "شاطئ كونيالتي",
        description: "شاطئ رملي جميل يمتد على طول الساحل، مثالي للاستجمام والسباحة والرياضات المائية.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "شلالات دودن",
        description: "مجموعة من الشلالات الطبيعية الخلابة التي تتدفق مباشرة إلى البحر المتوسط.",
        image: "https://images.unsplash.com/photo-1470093014438-2eed9a57239f?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "مسرح أسبندوس",
        description: "أحد أفضل المسارح الرومانية المحفوظة في العالم، يعود تاريخه إلى القرن الثاني الميلادي.",
        image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop",
      },
    ],
  },
  {
    id: 4,
    name: "بودروم",
    image: "/bodrum.jpg",
    rating: 4.6,
    location: "جنوب غرب تركيا",
    description: "منتجع ساحلي شهير يجذب السياح من جميع أنحاء العالم بشواطئه وحياته الليلية النابضة.",
    type: "beach",
    longDescription: `
      بودروم هي مدينة ساحلية تقع في جنوب غرب تركيا على ساحل بحر إيجة. كانت تعرف قديماً باسم هاليكارناسوس، وهي موطن لأحد عجائب الدنيا السبع القديمة - ضريح موسولوس.

      تشتهر بودروم اليوم بكونها منتجعاً سياحياً راقياً يجذب الزوار من جميع أنحاء العالم. تتميز المدينة بشواطئها الرملية البيضاء ومياهها الفيروزية الصافية، مما يجعلها وجهة مثالية لعشاق الشمس والبحر.

      تضم المدينة مرفأً للقوارب واليخوت الفاخرة، وقلعة القديس بطرس التي تعود للقرن الخامس عشر، ومتحف الآثار تحت الماء الفريد من نوعه. كما تشتهر بودروم بحياتها الليلية النابضة ومطاعمها المتنوعة التي تقدم أشهى المأكولات البحرية والتركية.

      تعتبر بودروم أيضاً نقطة انطلاق مثالية للرحلات البحرية على طول الساحل التركي، حيث يمكن للزوار استكشاف الخلجان والجزر القريبة ذات المياه الصافية والمناظر الطبيعية الخلابة.
    `,
    attractions: [
      {
        name: "قلعة القديس بطرس",
        description: "قلعة تاريخية تعود للقرن الخامس عشر، تضم متحف الآثار تحت الماء الفريد من نوعه.",
        image: "/BodrumCastlesoutheast.jpg",
      },
      {
        name: "شاطئ بيتيز",
        description: "أحد أجمل شواطئ بودروم، يتميز برماله البيضاء ومياهه الفيروزية الصافية.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "مرفأ اليخوت",
        description: "مرفأ عصري يضم العديد من اليخوت الفاخرة، محاط بالمطاعم والمقاهي والمتاجر.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
      },
      {
        name: "المسرح القديم",
        description: "مسرح يوناني قديم يعود تاريخه إلى القرن الرابع قبل الميلاد، يوفر إطلالات رائعة على المدينة.",
        image: "/bodrumMer.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "طرابزون",
    image: "/trabzon.jpg",
    rating: 4.5,
    location: "شمال شرق تركيا",
    description: "مدينة ساحلية تقع على البحر الأسود، تشتهر بمناظرها الطبيعية الخضراء وبحيرة أوزنجول الشهيرة.",
    type: "nature",
    longDescription: `
      طرابزون هي مدينة ساحلية تقع في شمال شرق تركيا على ساحل البحر الأسود. تتميز المنطقة بطبيعتها الخضراء الخلابة وجبالها المرتفعة وبحيراتها الساحرة.

      تعتبر طرابزون وجهة سياحية شهيرة للزوار من الشرق الأوسط بشكل خاص، حيث يأتون للاستمتاع بمناخها المعتدل ومناظرها الطبيعية الخضراء التي تختلف تماماً عن المناطق الصحراوية.

      من أبرز معالم المنطقة بحيرة أوزنجول الشهيرة التي تقع على ارتفاع 1250 متراً فوق مستوى سطح البحر، وتحيط بها الغابات والجبال الخضراء. كما تشتهر المنطقة بهضبة آيدر ودير سوميلا المعلق على جانب الجبل.

      تتميز طرابزون أيضاً بمطبخها المحلي الغني بالأطباق البحرية والجبلية، وبالحرف اليدوية التقليدية مثل النسيج والفضيات.
    `,
    attractions: [
      {
        name: "بحيرة أوزنجول",
        description: "بحيرة طبيعية خلابة تقع على ارتفاع 1250 متراً، محاطة بالغابات والجبال الخضراء.",
        image: "/uzungöl.jpg",
      },
      {
        name: "هضبة آيدر",
        description: "منطقة جبلية خضراء تشتهر بمروجها الخضراء وشلالاتها وينابيعها الحارة.",
        image: "/trabzonağdır.jpg",
      },
      {
        name: "دير سوميلا",
        description: "دير أرثوذكسي يوناني قديم معلق على جانب جبل، يعود تاريخه إلى القرن الرابع الميلادي.",
        image: "/trabzonDeiyer.jpg",
      },
      {
        name: "قلعة طرابزون",
        description: "قلعة بيزنطية تقع في وسط المدينة، توفر إطلالات بانورامية على البحر الأسود والمدينة.",
        image: "/trabzokale.jpeg",
      },
    ],
  },
  {
    id: 6,
    name: "فتحية",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop",
    rating: 4.7,
    location: "جنوب غرب تركيا",
    description: "وجهة سياحية شهيرة تجمع بين الشواطئ الجميلة والجبال الخضراء، مشهورة بشاطئ أولودينيز والطيران المظلي.",
    type: "beach",
    longDescription: `
      فتحية هي مدينة ساحلية تقع في جنوب غرب تركيا على ساحل البحر المتوسط. تجمع المدينة بين جمال الشواطئ الرملية البيضاء والجبال الخضراء المرتفعة، مما يجعلها وجهة مثالية لمحبي الطبيعة والاسترخاء.

      تشتهر فتحية بشاطئ أولودينيز الذي يعتبر من أجمل الشواطئ في العالم، حيث يتميز بمياهه الفيروزية الصافية ورماله البيضاء. كما تعد المدينة من أفضل الأماكن لممارسة رياضة الطيران المظلي، حيث يمكن للزوار الانطلاق من قمة جبل بابا داغ والتحليق فوق المناظر الطبيعية الخلابة.

      تضم المنطقة العديد من المعالم التاريخية مثل المدينة القديمة (كايكوي) والمقابر الليكية المنحوتة في الصخر. كما توفر فتحية فرصاً رائعة للرحلات البحرية لاستكشاف الجزر والخلجان القريبة، بما في ذلك الجزيرة الزرقاء وخليج الفراشة.

      تتميز فتحية أيضاً بأسواقها التقليدية ومطاعمها التي تقدم أشهى المأكولات البحرية والتركية، مما يجعلها وجهة متكاملة للسياح الباحثين عن تجربة سفر متنوعة.
    `,
    attractions: [
      {
        name: "شاطئ أولودينيز",
        description: "أحد أجمل الشواطئ في العالم، يتميز بمياهه الفيروزية الصافية ورماله البيضاء والبحيرة الزرقاء.",
        image: "/fethiyeDeniz.jpg",
      },
      {
        name: "جبل بابا داغ",
        description: "موقع شهير للطيران المظلي، يوفر إطلالات بانورامية مذهلة على المنطقة.",
        image: "/FethiyeBabadag.jpg",
      },
      {
        name: "المقابر الليكية",
        description: "مقابر تاريخية منحوتة في الصخر تعود إلى الحضارة الليكية القديمة.",
        image: "/fethiyeMezar.jpg",
      },
      {
        name: "خليج الفراشة",
        description: "خليج طبيعي خلاب يمكن الوصول إليه فقط عن طريق البحر، يتميز بمياهه الصافية ورماله البيضاء.",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  // Destinos adicionales con información básica
  {
    id: 7,
    name: "أفسس",
    image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05?q=80&w=2069&auto=format&fit=crop",
    rating: 4.8,
    location: "غرب تركيا",
    description: "موقع أثري روماني قديم يضم معابد ومسارح ومكتبة سيلسوس الشهيرة، من أهم المواقع التاريخية في تركيا.",
    type: "city",
    longDescription: `
      أفسس هي مدينة أثرية قديمة تقع في غرب تركيا، وتعتبر من أهم وأفضل المواقع الأثرية المحفوظة في منطقة البحر المتوسط. كانت أفسس في العصور القديمة ميناءً تجارياً مهماً ومركزاً ثقافياً بارزاً في آسيا الصغرى.

      تضم المدينة العديد من المعالم الأثرية المذهلة، أبرزها مكتبة سيلسوس التي تعد من أجمل المباني في العالم القديم، والمسرح الكبير الذي يتسع لأكثر من 25 ألف متفرج، ومعبد أرتميس الذي كان أحد عجائب الدنيا السبع القديمة.

      تعكس آثار أفسس تاريخاً غنياً يمتد عبر الحضارات اليونانية والرومانية والبيزنطية، وتوفر للزوار فرصة فريدة للسير في شوارع رصفت قبل آلاف السنين والاستمتاع بمشاهدة المباني والنقوش والتماثيل التي تعود إلى العصور القديمة.

      تقع أفسس بالقرب من مدينة سلجوق الحديثة، وهي وجهة سياحية شهيرة تجذب مئات الآلاف من الزوار سنوياً للاستمتاع باستكشاف هذا الكنز التاريخي الفريد.
    `,
    attractions: [
      {
        name: "مكتبة سيلسوس",
        description: "مبنى روماني مذهل يعود للقرن الثاني الميلادي، كان يضم أكثر من 12 ألف مخطوطة.",
        image: "/efse.jpg",
      },
      {
        name: "المسرح الكبير",
        description: "مسرح روماني ضخم يتسع لأكثر من 25 ألف متفرج، كان يستخدم للعروض المسرحية والاجتماعات.",
        image: "/efse2.webp",
      },
      {
        name: "شارع كوريتس",
        description: "شارع رخامي رئيسي مرصوف بالحجارة القديمة، كان مركزاً للحياة التجارية والاجتماعية.",
        image: "/efes3.webp",
      },
      {
        name: "معبد هادريان",
        description: "معبد روماني جميل مخصص للإمبراطور هادريان، يتميز بنقوشه وزخارفه المعمارية الرائعة.",
        image: "/efes4.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "مرسين",
    image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070&auto=format&fit=crop",
    rating: 4.4,
    location: "جنوب تركيا",
    description: "مدينة ساحلية هادئة على البحر المتوسط، تتميز بشواطئها النظيفة وأسعارها المعقولة وأجوائها العائلية.",
    type: "beach",
    longDescription: `
      مرسين هي مدينة ساحلية تقع على ساحل البحر المتوسط في جنوب تركيا. تعتبر من المدن الساحلية الهادئة التي لم تشهد بعد الازدحام السياحي الكبير، مما يجعلها وجهة مثالية للباحثين عن الاسترخاء بعيداً عن صخب المنتجعات السياحية الشهيرة.

      تتميز مرسين بشواطئها النظيفة ومياهها الصافية وأسعارها المعقولة مقارنة بالوجهات السياحية الأخرى في تركيا. كما تشتهر المدينة بأجوائها العائلية وكورنيشها الجميل الذي يمتد على طول الساحل.

      تضم المنطقة العديد من المواقع التاريخية والأثرية مثل مدينة سولي الأثرية وكهوف الجنة والجحيم. كما تشتهر مرسين بمطبخها المحلي الغني بالمأكولات البحرية والأطباق التركية التقليدية.

      تعتبر مرسين أيضاً بوابة للعديد من المواقع السياحية القريبة مثل طرسوس مسقط رأس القديس بولس، وأضنة المشهورة بكبابها اللذيذ، مما يجعلها نقطة انطلاق مثالية لاستكشاف جنوب تركيا.
    `,
    attractions: [
      {
        name: "كورنيش مرسين",
        description: "ممشى ساحلي جميل يمتد على طول الساحل، مثالي للمشي وركوب الدراجات والاستمتاع بإطلالات البحر.",
        image: "/mersinkur.jpg",
      },
      {
        name: "مدينة سولي الأثرية",
        description: "موقع أثري يعود للعصر الروماني، يضم أعمدة وبقايا معابد ومسرح قديم.",
        image: "/şamıs.jpg",
      },
      {
        name: "كهوف الجنة والجحيم",
        description: "تكوينات جيولوجية فريدة تضم كهوفاً عميقة وبئراً طبيعية، مرتبطة بأساطير قديمة.",
        image: "/cene.jpg",
      },
      {
        name: "شاطئ كيزكالسي",
        description: "شاطئ رملي جميل بالقرب من مرسين، يتميز بمياهه الصافية وقلعته التاريخية في البحر.",
        image: "/Kizkalesi.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "بورصة",
    image: "/bursa.jpg",
    rating: 4.6,
    location: "شمال غرب تركيا",
    description: "مدينة تاريخية تقع على سفح جبل أولوداغ، تشتهر بينابيعها الحارة ومعالمها العثمانية والتزلج في الشتاء.",
    type: "city",
    longDescription: `
      بورصة هي مدينة تاريخية تقع في شمال غرب تركيا على سفح جبل أولوداغ. كانت أول عاصمة للإمبراطورية العثمانية قبل فتح القسطنطينية، وتضم العديد من المعالم التاريخية والمباني العثمانية الرائعة.

      تشتهر بورصة بينابيعها الحارة وحماماتها التقليدية التي تعود إلى العصر العثماني، والتي تجذب الزوار للاستمتاع بخصائصها العلاجية. كما تعتبر المدينة وجهة شهيرة للتزلج في فصل الشتاء، حيث يقصد السياح جبل أولوداغ للاستمتاع برياضات الثلج.

      تضم المدينة العديد من المساجد التاريخية مثل المسجد الكبير والمسجد الأخضر، بالإضافة إلى الأسواق التقليدية مثل سوق الحرير. كما تشتهر بورصة بمطبخها المحلي المميز، خاصة كباب إسكندر الشهير الذي نشأ في هذه المدينة.

      تتميز بورصة أيضاً بطبيعتها الخضراء الخلابة، حيث تحيط بها الغابات والحدائق والمتنزهات، مما يجعلها وجهة مثالية لمحبي الطبيعة والاسترخاء بعيداً عن صخب المدن الكبيرة.
    `,
    attractions: [
      {
        name: "المسجد الأخضر",
        description: "مسجد عثماني تاريخي يتميز ببلاطه الأخضر وزخارفه الإسلامية الرائعة.",
        image: "/Iznik_Yeşil_Camii_7.JPG",
      },
      {
        name: "جبل أولوداغ",
        description: "جبل مرتفع يعتبر من أشهر مناطق التزلج في تركيا، يوفر مناظر طبيعية خلابة على مدار العام.",
        image: "/uludağ.jpg",
      },
      {
        name: "سوق الحرير",
        description: "سوق تاريخي يعود للعصر العثماني، كان محطة رئيسية على طريق الحرير.",
        image: "/harirCarşı.jpg",
      },
      {
        name: "الحمامات الحرارية",
        description: "حمامات تقليدية تستمد مياهها من الينابيع الحارة، تشتهر بخصائصها العلاجية.",
        image: "/bursaHamam.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "أوزنجول",
    image: "/uzungöl.jpg",
    rating: 4.9,
    location: "شمال شرق تركيا",
    description: "بحيرة طبيعية خلابة محاطة بالجبال الخضراء، من أجمل المناطق الطبيعية في تركيا وأكثرها شعبية.",
    type: "nature",
    longDescription: `
      أوزنجول هي بحيرة طبيعية خلابة تقع في منطقة طرابزون شمال شرق تركيا، على ارتفاع 1250 متراً فوق مستوى سطح البحر. تحيط بالبحيرة الجبال المغطاة بالغابات الخضراء الكثيفة، مما يخلق منظراً طبيعياً ساحراً يشبه اللوحات الفنية.

      أصبحت أوزنجول في السنوات الأخيرة من أكثر الوجهات السياحية شعبية في تركيا، خاصة بين السياح العرب الذين يأتون للاستمتاع بجمال الطبيعة والمناخ المعتدل والضباب الصباحي الذي يغطي البحيرة والجبال المحيطة بها.

      تتميز المنطقة بالمنازل الخشبية التقليدية التي تنتشر حول البحيرة وعلى سفوح الجبال، والتي تحولت العديد منها إلى فنادق ومطاعم تقدم المأكولات المحلية اللذيذة. كما توفر المنطقة فرصاً رائعة للمشي وركوب الخيل واستكشاف الطبيعة.

      يمكن للزوار الاستمتاع بجولة حول البحيرة، أو تسلق الجبال المحيطة للحصول على إطلالات بانورامية مذهلة، أو زيارة الشلالات والينابيع القريبة، أو ببساطة الاسترخاء والاستمتاع بالهدوء والسكينة وسط الطبيعة الخلابة.
    `,
    attractions: [
      {
        name: "بحيرة أوزنجول",
        description: "بحيرة طبيعية خلابة محاطة بالجبال والغابات الخضراء، توفر مناظر ساحرة خاصة في الصباح الباكر.",
        image: "/uzungöl.jpg",
      },
      {
        name: "قرية أوزنجول",
        description: "قرية تقليدية تضم منازل خشبية جميلة ومطاعم تقدم المأكولات المحلية اللذيذة.",
        image: "/trabzon.jpg",
      },
      {
        name: "مسار المشي حول البحيرة",
        description: "مسار طبيعي يحيط بالبحيرة، مثالي للمشي والاستمتاع بالمناظر الطبيعية الخلابة.",
        image: "/trabzon.jpg",
      },
      {
        name: "مرتفعات كارستر",
        description: "منطقة مرتفعة قريبة من أوزنجول، توفر إطلالات بانورامية مذهلة على البحيرة والمنطقة المحيطة.",
        image: "/kars.jpg",
      },
    ],
  },

 
]

export default function DestinationPage({ params }: { params: { id: string } }) {
  // Convertir el ID a número
  const destinationId = Number.parseInt(params.id, 10)

  // Buscar el destino en el array
  const destination = destinations.find((d) => d.id === destinationId)

  // Si no se encuentra el destino, mostrar página 404
  if (!destination) {
    return notFound()
  }

  // Seleccionar destinos similares
  const similarDestinations = destinations
    .filter((d) => d.type === destination.type && d.id !== destination.id)
    .slice(0, 3)

  return (
    <div dir="rtl" className="min-h-screen bg-white">
      {/* Header */}
      <MainNav />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{destination.name}</h1>
          <div className="flex items-center gap-2 mt-4">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">{destination.location}</span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-lg">{destination.rating} / 5</span>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mt-6">
        <Link href="/destinations">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            العودة إلى الوجهات
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <section className="container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">نبذة عن {destination.name}</h2>
              <p className="text-muted-foreground whitespace-pre-line">{destination.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">أبرز المعالم</h2>
              <div className="grid gap-6">
                {destination.attractions?.map((attraction, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid md:grid-cols-3">
                      <div className="relative h-full min-h-[200px]">
                        <Image
                          src={attraction.image || "/placeholder.svg"}
                          alt={attraction.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <h3 className="font-bold text-lg mb-2">{attraction.name}</h3>
                        <p className="text-muted-foreground">{attraction.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">معلومات سريعة</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">أفضل وقت للزيارة</h4>
                    <p className="text-sm text-muted-foreground">
                      {destination.type === "beach"
                        ? "من مايو إلى أكتوبر للاستمتاع بالطقس الدافئ والشواطئ"
                        : destination.type === "nature"
                          ? "الربيع والخريف للاستمتاع بالطقس المعتدل والمناظر الطبيعية"
                          : "على مدار العام، مع تفضيل الربيع والخريف لتجنب الازدحام"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">مناسب لـ</h4>
                    <p className="text-sm text-muted-foreground">
                      {destination.type === "beach"
                        ? "العائلات، الأزواج، محبي الشواطئ والاسترخاء"
                        : destination.type === "nature"
                          ? "محبي المغامرة، عشاق الطبيعة، المصورين"
                          : "محبي التاريخ والثقافة، المتسوقين، عشاق الطعام"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Camera className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">أماكن التصوير</h4>
                    <p className="text-sm text-muted-foreground">
                      {destination.attractions
                        ?.map((a) => a.name)
                        .slice(0, 2)
                        .join("، ")}{" "}
                      وغيرها من المعالم الشهيرة
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Landmark className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">المعالم الرئيسية</h4>
                    <p className="text-sm text-muted-foreground">
                      {destination.attractions?.map((a) => a.name).join("، ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Utensils className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium">المأكولات المحلية</h4>
                    <p className="text-sm text-muted-foreground">
                      {destination.id === 1
                        ? "الكباب التركي، البوريك، البقلاوة، الشاي التركي"
                        : destination.id === 2
                          ? "تيستي كباب، جوزلمة، الحلويات التركية التقليدية"
                          : "المأكولات البحرية الطازجة، الكباب، الحلويات التركية"}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">استكشف المزيد</h3>
              <div className="space-y-4">
                <Link href="/contact">
                  <Button className="w-full">حجز جولة سياحية</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    عرض الفنادق القريبة
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Similar Destinations */}
      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">وجهات مشابهة قد تعجبك</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarDestinations.map((destination) => (
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
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

