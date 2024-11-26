"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from 'next/image';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const locations = [
  { name: "Indonesia", coordinates: [-2.4833, 117.8902], code: "ID" },
  { name: "Benin", coordinates: [9.3077, 2.3158], code: "BJ" },
  { name: "Thailand", coordinates: [15.8700, 100.9925], code: "TH" },
  { name: "Brunei", coordinates: [4.5353, 114.7277], code: "BN" },
  { name: "Timor-Leste", coordinates: [-8.8742, 125.7275], code: "TL" },
  { name: "Pakistan", coordinates: [30.3753, 69.3451], code: "PK" },
  { name: "Bangladesh", coordinates: [23.6850, 90.3563], code: "BD" },
  { name: "Egypt", coordinates: [26.8206, 30.8025], code: "EG" },
  { name: "France", coordinates: [46.2276, 2.2137], code: "FR" },
  { name: "Morocco", coordinates: [31.7917, -7.0926], code: "MA" },
  { name: "Myanmar", coordinates: [21.9162, 95.9560], code: "MM" },
  { name: "UAE", coordinates: [23.4241, 53.8478], code: "AE" },
  { name: "Burkina Faso", coordinates: [12.2383, -1.5616], code: "BF" },
  { name: "South Africa", coordinates: [-30.5595, 22.9375], code: "ZA" },
  { name: "Vietnam", coordinates: [14.0583, 108.2772], code: "VN" }
];

const MapComponent = () => {
  // Center on Sri Lanka's coordinates
  const mapCenter = [7.8731, 80.7718];
  const defaultZoom = 2.8; // Keeping the same zoom level for good visibility

  return (
    <MapContainer
      center={mapCenter as [number, number]}
      zoom={defaultZoom}
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
      maxBounds={[[-45, -30], [90, 180]]} // Keeping the same bounds to include all countries
      minZoom={2.5}
      maxZoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        bounds={[[-45, -30], [90, 180]]}
      />
      {locations.map((location) => (
        <Marker 
          key={location.name} 
          position={location.coordinates as [number, number]}
        >
          <Popup>
            <div className="flex items-center gap-2">
              <Image
                src={`https://flagcdn.com/24x18/${location.code.toLowerCase()}.png`}
                alt={`${location.name} flag`}
                width={24}
                height={18}
                className="w-4 h-3"
              />
              <span>{location.name}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default function WorldMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="world-map" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-600 dark:text-purple-400">
          Global Business Development Portfolio
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-8">
          Over the past 25 years at STE, I have established strong international partnerships across Asia, Africa, and Europe. 
          This map highlights countries where I have developed business relationships through proposals, tenders, business collaborations, and product field trials.
        </p>
        
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
          {isMounted && <MapComponent />}
        </div>

        {/* Country Flags Section */}
        <div className="w-full max-w-[980px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {locations.map((location) => (
            <div 
              key={location.name}
              className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <Image
                src={`https://flagcdn.com/48x36/${location.code.toLowerCase()}.png`}
                alt={`${location.name} flag`}
                width={48}
                height={36}
                className="w-8 h-6 object-cover rounded"
              />
              <span className="text-sm font-medium">{location.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
