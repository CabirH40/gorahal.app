"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// تعريف نوع البيانات للوجهات السياحية
interface MapComponentProps {
  destinations: {
    id: number;
    name: string;
    position: [number, number];
    description: string;
    image: string;
  }[];
}

const MapComponent = ({ destinations }: MapComponentProps) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<any>(null); // الاحتفاظ بمرجع الخريطة

  useEffect(() => {
    const loadMap = async () => {
      try {
        const L = await import("leaflet");
        await import("leaflet/dist/leaflet.css");

        // إصلاح مشكلة الأيقونات
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
          shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        });

        // التحقق من عدم إنشاء خريطة مكررة
        if (mapRef.current) return;

        // إنشاء الخريطة
        const map = L.map("map").setView([39.0, 35.0], 6);
        mapRef.current = map;

        // إضافة الطبقة الأساسية
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // إضافة العلامات للوجهات
        destinations.forEach((destination) => {
          const marker = L.marker(destination.position).addTo(map);

          // إنشاء محتوى الـ popup
          const popupContent = document.createElement("div");
          popupContent.innerHTML = `
            <div class="w-[200px]">
              <div class="relative h-[100px] w-full mb-2">
                <img src="${destination.image || "/placeholder.svg"}" alt="${destination.name}" 
                     class="object-cover rounded-md w-full h-full" />
              </div>
              <h3 class="font-bold text-lg">${destination.name}</h3>
              <p class="text-sm mb-2">${destination.description}</p>
              <a href="/destinations/${destination.id}" class="bg-blue-600 text-white px-3 py-1 rounded text-sm w-full block text-center">
                عرض التفاصيل
              </a>
            </div>
          `;
          marker.bindPopup(popupContent);
        });

        setMapLoaded(true);
      } catch (error) {
        console.error("خطأ أثناء تحميل الخريطة:", error);
      }
    };

    loadMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // تنظيف الخريطة عند التفريغ
        mapRef.current = null;
      }
    };
  }, [destinations]);

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden">
      {!mapLoaded && (
        <div className="h-full w-full flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="mt-4 text-lg">جاري تحميل الخريطة...</p>
          </div>
        </div>
      )}
      <div id="map" className="h-full w-full" style={{ display: mapLoaded ? "block" : "none" }}></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false }); // تعطيل SSR
