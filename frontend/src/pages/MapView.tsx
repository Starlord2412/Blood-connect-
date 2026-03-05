// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { Button } from "@/components/ui/button";
// import  "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { MapPin, Navigation, Phone, Clock, Droplet } from "lucide-react";
// import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from "react-leaflet";










// function ChangeMapView({ center }) {
//   const map = useMap();
//  useEffect(() => {
//     if (center) {          // ✅ important check
//       map.setView(center, 13)
//     }
//   }, [center, map])

//   return null;
// }







// // Mock data for blood banks with coordinates
//  const mockBloodBanks = [
//   {
//     id: "1",
//     name: "District General Hospital Blood Bank",
//     address: "Irwin Chowk, Amravati",
//     phone: "+91 721 2663337",
//     lat: 20.9374,
//     lng: 77.7796,
//     isOpen: true,
//     inventory: { "O-": 8, "O+": 36, "A-": 5, "A+": 28 },
//   },
//   {
//     id: "2",
//     name: "Shri Balaji Blood Bank & Component Lab",
//     address: "Ambapeth, Amravati",
//     phone: "+91 721 2671600",
//     lat: 20.9339,
//     lng: 77.7576,
//     isOpen: true,
//     inventory: { "O-": 10, "O+": 40, "A-": 7, "A+": 30 },
//   },
//   {
//     id: "3",
//     name: "Padmavati Blood Bank",
//     address: "Walcut Compound, Amravati",
//     phone: "+91 721 2677859",
//     lat: 20.9256,
//     lng: 77.7647,
//     isOpen: true,
//     inventory: { "O-": 6, "O+": 25, "A-": 4, "A+": 20 },
//   },
//   {
//     id: "4",
//     name: "Dr. P.D.M.H.C Hospital Blood Bank",
//     address: "Shivaji Nagar, Amravati",
//     phone: "+91 721 2665545",
//     lat: 20.9219,
//     lng: 77.7725,
//     isOpen: true,
//     inventory: { "O-": 9, "O+": 33, "A-": 6, "A+": 24 },
//   },
//   {
//     id: "5",
//     name: "Dr. Bhagwat Blood Bank",
//     address: "Rajapeth, Amravati",
//     phone: "+91 721 2675717",
//     lat: 20.9278,
//     lng: 77.7642,
//     isOpen: false,
//     inventory: { "O-": 4, "O+": 18, "A-": 2, "A+": 14 },
//   }
// ];




// //marker color



// // 🔴 Red Marker
// export const redMarker = new L.Icon({
//   iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// // 🟢 Green Marker
// export const greenMarker = new L.Icon({
//   iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });


// // ⚫ Grey Marker
// export const grayMarker = new L.Icon({
//   iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });

// const getMarkerIcon = (bank) => {
//   if (!bank.isOpen) return grayMarker;
//   if (bank.inventory["O+"] < 10) return redMarker;
//   return greenMarker;
// };



// export default function MapView() {
//   const [userLocation, setUserLocation] = useState(null);
//   const [selectedBank, setSelectedBank] = useState<typeof mockBloodBanks[0] | null>(null);
//   const [locationError, setLocationError] = useState<string | null>(null);

//   useEffect(() => {
  
//    navigator.geolocation.getCurrentPosition((position) => {
//     setUserLocation([
//       position.coords.latitude,
//       position.coords.longitude
//     ]);
//   });
//   }, []);

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="pt-16">
//         <div className="h-[calc(100vh-4rem)] flex">
//           {/* Sidebar */}
//           <div className="w-96 border-r border-border bg-card overflow-y-auto hidden md:block">
//             <div className="p-4 border-b border-border">
//               <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
//                 <MapPin className="w-5 h-5 text-primary" />
//                 Nearby Blood Banks
//               </h2>
//               {locationError && (
//                 <p className="text-sm text-muted-foreground mt-2">{locationError}</p>
//               )}
//             </div>

//             <div className="divide-y divide-border">


//               {mockBloodBanks.map((bank) => ( 
//                 <motion.button
//                   key={bank.id}
//                   onClick={() => setSelectedBank(bank)}
//                   whileHover={{ backgroundColor: "hsl(var(--accent))" }}
//                   className={`w-full text-left p-4 transition-colors cursor-pointer ${
//                     selectedBank?.id === bank.id ? "bg-accent" : ""
//                   }`}
//                 >
//                   <div className="flex items-start justify-between mb-2">
//                     <h3 className="font-semibold text-foreground">{bank.name}</h3>
//                     <span
//                       className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
//                         bank.isOpen
//                           ? "bg-success/10 text-success"
//                           : "bg-muted text-muted-foreground"
//                       }`}
//                     >
//                       <Clock className="w-3 h-3" />
//                       {bank.isOpen ? "Open" : "Closed"}
//                     </span>
//                   </div>
//                   <p className="text-sm text-muted-foreground mb-3">{bank.address}</p>
                  
//                   <div className="flex gap-2 flex-wrap">
//                     {Object.entries(bank.inventory).slice(0, 4).map(([type, units]) => (
//                       <span
//                         key={type}
//                         className={`text-xs px-2 py-1 rounded-full ${
//                           units < 10
//                             ? "bg-destructive/10 text-destructive"
//                             : "bg-primary/10 text-primary"
//                         }`}
//                       >
//                         {type}: {units}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.button>
//               ))} 




//             </div>
//           </div>

//           {/* Map Area */}
//           <div className="flex-1 relative bg-secondary">
//             {/* Map Placeholder */}


// <MapContainer
//       center={userLocation }  // Nagpur
//       zoom={13}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <TileLayer
//         // attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution="&copy; OpenStreetMap contributors"
//       />
     
//   <ChangeMapView center={userLocation} />
// {userLocation && (
//   <Marker position={userLocation}>
//     <Popup>You are here</Popup>
//   </Marker>
// )}

//      {mockBloodBanks.map((bank) => (
//   <Marker key={bank.id} position={[bank.lat, bank.lng]}
//   icon={getMarkerIcon(bank)}
//   eventHandlers={{
//     click: () => setSelectedBank(bank),
//   }}
// >
//     <Tooltip>
//       <b>{bank.name}</b><br />
//       {bank.address}<br />
//       Phone: {bank.phone}<br />
//       O+: {bank.inventory["O+"]} units
//     </Tooltip>
//   </Marker>
// ))}
      
//     </MapContainer>






 
//             {/*
            
//             <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
//               <div className="text-center p-8">
//                 <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
//                 <h3 className="font-display text-xl font-bold text-foreground mb-2">
//                   Interactive Map
//                 </h3>
//                 <p className="text-muted-foreground max-w-md mb-4">
//                   Connect Google Maps or Mapbox API to display nearby blood banks on an interactive map.
//                 </p>
//                 <Button>
//                   <Navigation className="w-4 h-4" />
//                   Get Directions
//                 </Button>
//               </div>
//             </div>
            
//             */}
            

//             {/* Mobile Bank List Toggle */}
//             <div className="md:hidden absolute bottom-4 left-4 right-4">
//               <div className="bg-card rounded-xl shadow-lg p-4 border border-border">
//                 {selectedBank ? (
//                   <div>
//                     <div className="flex items-start justify-between mb-2">
//                       <h3 className="font-semibold text-foreground">{selectedBank.name}</h3>
//                       <button
//                         onClick={() => setSelectedBank(null)}
//                         className="text-muted-foreground hover:text-foreground"
//                       >
//                         ×
//                       </button>
//                     </div>
//                     <p className="text-sm text-muted-foreground mb-3">{selectedBank.address}</p>
//                     <div className="flex gap-2">
//                       <Button size="sm" className="flex-1">
//                         <Navigation className="w-4 h-4" />
//                         Directions
//                       </Button>
//                       <Button size="sm" variant="outline" asChild>
//                         <a href={`tel:${selectedBank.phone}`}>
//                           <Phone className="w-4 h-4" />
//                           Call
//                         </a>
//                       </Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex items-center gap-3">
//                     <Droplet className="w-8 h-8 text-primary" />
//                     <div>
//                       <p className="font-semibold text-foreground">{mockBloodBanks.length} blood banks nearby</p>
//                       <p className="text-sm text-muted-foreground">Tap a marker to see details</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }



































import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, Navigation, Phone, Clock, Droplet, Crosshair, Radio } from "lucide-react";

// ─── Haversine Distance (meters) ────────────────────────────────────────────
function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371000;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── Bearing (degrees) user → bank ──────────────────────────────────────────
function calcBearing(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const toDeg = (r: number) => (r * 180) / Math.PI;
  const dLng = toRad(lng2 - lng1);
  const y = Math.sin(dLng) * Math.cos(toRad(lat2));
  const x =
    Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLng);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

function formatDistance(m: number): string {
  return m >= 1000 ? `${(m / 1000).toFixed(2)} km` : `${Math.round(m)} m`;
}

// ─── Mock Data ───────────────────────────────────────────────────────────────
const mockBloodBanks = [
  {
    id: "1",
    name: "District General Hospital Blood Bank",
    address: "Irwin Chowk, Amravati",
    phone: "+91 721 2663337",
    lat: 20.9374, lng: 77.7796,
    isOpen: true,
    inventory: { "O-": 8, "O+": 36, "A-": 5, "A+": 28 },
  },
  {
    id: "2",
    name: "Shri Balaji Blood Bank & Component Lab",
    address: "Ambapeth, Amravati",
    phone: "+91 721 2671600",
    lat: 20.9339, lng: 77.7576,
    isOpen: true,
    inventory: { "O-": 10, "O+": 40, "A-": 7, "A+": 30 },
  },
  {
    id: "3",
    name: "Padmavati Blood Bank",
    address: "Walcut Compound, Amravati",
    phone: "+91 721 2677859",
    lat: 20.9256, lng: 77.7647,
    isOpen: true,
    inventory: { "O-": 6, "O+": 25, "A-": 4, "A+": 20 },
  },
  {
    id: "4",
    name: "Dr. P.D.M.H.C Hospital Blood Bank",
    address: "Shivaji Nagar, Amravati",
    phone: "+91 721 2665545",
    lat: 20.9219, lng: 77.7725,
    isOpen: true,
    inventory: { "O-": 9, "O+": 33, "A-": 6, "A+": 24 },
  },
  {
    id: "5",
    name: "Dr. Bhagwat Blood Bank",
    address: "Rajapeth, Amravati",
    phone: "+91 721 2675717",
    lat: 20.9278, lng: 77.7642,
    isOpen: false,
    inventory: { "O-": 4, "O+": 18, "A-": 2, "A+": 14 },
  },
];

type Bank = typeof mockBloodBanks[0];
type NearestBank = Bank & { distance: number; bearing: number };

// ─── Leaflet Icon factories ───────────────────────────────────────────────────
const makeIcon = (color: string) =>
  new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
  });

const ICONS = {
  red:   makeIcon("red"),
  green: makeIcon("green"),
  grey:  makeIcon("grey"),
  gold:  makeIcon("gold"),
};

function getBankIcon(bank: Bank, isNearest: boolean): L.Icon {
  if (isNearest) return ICONS.gold;
  if (!bank.isOpen) return ICONS.grey;
  if (bank.inventory["O+"] < 10) return ICONS.red;
  return ICONS.green;
}

// ─── Pulsing Live Dot ─────────────────────────────────────────────────────────
function LiveDot() {
  return (
    <span className="relative flex h-2.5 w-2.5 mr-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
    </span>
  );
}

// ─── Animated direction arrow ─────────────────────────────────────────────────
function DirectionArrow({ degrees }: { degrees: number }) {
  return (
    <motion.div
      animate={{ rotate: degrees }}
      transition={{ type: "spring", stiffness: 80, damping: 14 }}
      className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 shrink-0"
    >
      <Navigation className="w-7 h-7 text-primary" />
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MapView() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef          = useRef<L.Map | null>(null);
  const userMarkerRef   = useRef<L.Marker | null>(null);
  const bankMarkersRef  = useRef<Map<string, L.Marker>>(new Map());
  const routeLineRef    = useRef<L.Polyline | null>(null);
  const nearestCircleRef = useRef<L.Circle | null>(null);
  const watchIdRef      = useRef<number | null>(null);

  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [nearestBank, setNearestBank]   = useState<NearestBank | null>(null);
  const [deviceHeading, setDeviceHeading] = useState(0);
  const [lastUpdated, setLastUpdated]   = useState<Date | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [mapReady, setMapReady]         = useState(false);

  // ── 1. Init Leaflet map (once) ──────────────────────────────────────────
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [20.9374, 77.7796],
      zoom: 14,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    mapRef.current = map;
    setMapReady(true);

    return () => { map.remove(); mapRef.current = null; };
  }, []);

  // ── 2. Add blood bank markers (once map is ready) ───────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return;
    const map = mapRef.current;

    mockBloodBanks.forEach((bank) => {
      const marker = L.marker([bank.lat, bank.lng], { icon: ICONS.green })
        .addTo(map)
        .bindPopup(`
          <div style="min-width:180px;font-family:sans-serif">
            <b style="font-size:13px">${bank.name}</b><br/>
            <span style="color:#6b7280;font-size:12px">${bank.address}</span><br/>
            <span style="font-size:12px">📞 ${bank.phone}</span><br/>
            <span style="font-size:12px">🩸 O+: ${bank.inventory["O+"]} units</span><br/>
            <span style="font-size:12px">${bank.isOpen ? "🟢 Open" : "🔴 Closed"}</span>
          </div>
        `);
      bankMarkersRef.current.set(bank.id, marker);
    });
  }, [mapReady]);

  // ── 3. Recalc nearest + update map decorations ──────────────────────────
  const recalcNearest = useCallback((lat: number, lng: number) => {
    let minDist = Infinity;
    let best: NearestBank | null = null;

    for (const bank of mockBloodBanks) {
      const dist = haversineDistance(lat, lng, bank.lat, bank.lng);
      if (dist < minDist) {
        minDist = dist;
        best = { ...bank, distance: dist, bearing: calcBearing(lat, lng, bank.lat, bank.lng) };
      }
    }

    setNearestBank(best);
    setLastUpdated(new Date());

    const map = mapRef.current;
    if (!map || !best) return;

    // Update icons + tooltips on all markers
    mockBloodBanks.forEach((bank) => {
      const marker = bankMarkersRef.current.get(bank.id);
      if (!marker) return;
      const isNearest = bank.id === best!.id;
      marker.setIcon(getBankIcon(bank, isNearest));
      marker.unbindTooltip();
      if (isNearest) {
        marker.bindTooltip(
          `⭐ NEAREST · ${formatDistance(best!.distance)}`,
          { permanent: true, direction: "top", offset: [0, -42] }
        ).openTooltip();
      }
    });

    // Dashed route line: user → nearest bank
    routeLineRef.current?.remove();
    routeLineRef.current = L.polyline(
      [[lat, lng], [best.lat, best.lng]],
      { color: "#ef4444", dashArray: "8 6", weight: 2.5, opacity: 0.85 }
    ).addTo(map);

    // Highlight circle around nearest bank
    nearestCircleRef.current?.remove();
    nearestCircleRef.current = L.circle([best.lat, best.lng], {
      radius: 80,
      color: "#f59e0b",
      fillColor: "#fbbf24",
      fillOpacity: 0.15,
      weight: 2,
      dashArray: "5 5",
    }).addTo(map);
  }, []);

  // ── 4. GPS watchPosition — real-time, ~1 s ─────────────────────────────
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, heading } = pos.coords;
        const coords: [number, number] = [latitude, longitude];
        setUserLocation(coords);
        if (heading != null) setDeviceHeading(heading);

        const map = mapRef.current;
        if (!map) return;

        // Pulsing blue dot for user
        if (!userMarkerRef.current) {
          const userIcon = L.divIcon({
            className: "",
            html: `
              <div style="position:relative;width:20px;height:20px">
                <div style="
                  position:absolute;inset:0;border-radius:50%;
                  background:#3b82f6;opacity:0.3;
                  animation:userPing 1.2s cubic-bezier(0,0,0.2,1) infinite;
                  transform:scale(1.8)
                "></div>
                <div style="
                  position:absolute;inset:0;border-radius:50%;
                  background:#2563eb;border:3px solid white;
                  box-shadow:0 2px 8px rgba(37,99,235,0.5)
                "></div>
              </div>
              <style>
                @keyframes userPing {
                  75%,100%{transform:scale(2.8);opacity:0}
                }
              </style>
            `,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          });
          userMarkerRef.current = L.marker(coords, { icon: userIcon, zIndexOffset: 1000 })
            .addTo(map)
            .bindPopup("📍 You are here");
          map.setView(coords, 14);
        } else {
          userMarkerRef.current.setLatLng(coords);
        }

        recalcNearest(latitude, longitude);
      },
      () => setLocationError("Location access denied. Please enable GPS."),
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 15000 }
    );

    return () => {
      if (watchIdRef.current !== null)
        navigator.geolocation.clearWatch(watchIdRef.current);
    };
  }, [mapReady, recalcNearest]);

  const arrowDeg = nearestBank ? nearestBank.bearing - deviceHeading : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="h-[calc(100vh-4rem)] flex">

          {/* ── Sidebar ── */}
          <div className="w-96 border-r border-border bg-card hidden md:flex flex-col overflow-y-auto">

            <div className="p-4 border-b border-border flex items-center gap-2 shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-foreground">Nearest Blood Bank</h2>
              <div className="ml-auto flex items-center text-xs text-muted-foreground">
                <LiveDot />Live
              </div>
            </div>

            {locationError && (
              <div className="p-3 bg-destructive/10 text-destructive text-sm border-b border-border">
                {locationError}
              </div>
            )}

            {nearestBank ? (
              <div className="p-4 flex flex-col gap-4">

                {/* Distance + Arrow */}
                <div className="flex items-center gap-4 p-4 rounded-xl border border-primary/20 bg-primary/5">
                  <DirectionArrow degrees={arrowDeg} />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">Distance</p>
                    <p className="text-2xl font-bold text-primary tabular-nums">
                      {formatDistance(nearestBank.distance)}
                    </p>
                    {lastUpdated && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Updated {lastUpdated.toLocaleTimeString()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bank details */}
                <div className="rounded-xl border border-border bg-background p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-foreground leading-tight">{nearestBank.name}</h3>
                    <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                      nearestBank.isOpen
                        ? "bg-success/10 text-success"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <Clock className="w-3 h-3" />
                      {nearestBank.isOpen ? "Open" : "Closed"}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">{nearestBank.address}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> {nearestBank.phone}
                  </p>

                  {/* Inventory */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Blood Inventory</p>
                    <div className="grid grid-cols-4 gap-2">
                      {Object.entries(nearestBank.inventory).map(([type, units]) => (
                        <div key={type} className={`text-center rounded-lg py-2 ${
                          units < 10 ? "bg-destructive/10" : "bg-primary/10"
                        }`}>
                          <p className={`text-xs font-bold ${units < 10 ? "text-destructive" : "text-primary"}`}>{type}</p>
                          <p className={`text-sm font-semibold ${units < 10 ? "text-destructive" : "text-foreground"}`}>{units}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-2 pt-1">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps/dir/?api=1&destination=${nearestBank.lat},${nearestBank.lng}`,
                          "_blank"
                        )
                      }
                    >
                      <Navigation className="w-4 h-4 mr-1" />
                      Directions
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={`tel:${nearestBank.phone}`}>
                        <Phone className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* GPS coords */}
                {userLocation && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground px-1">
                    <Crosshair className="w-3.5 h-3.5 shrink-0" />
                    {userLocation[0].toFixed(5)}, {userLocation[1].toFixed(5)}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-3">
                <Radio className="w-10 h-10 text-muted-foreground animate-pulse" />
                <p className="font-medium text-foreground">Acquiring GPS…</p>
                <p className="text-sm text-muted-foreground">Allow location access to find the nearest blood bank.</p>
              </div>
            )}
          </div>

          {/* ── Map ── */}
          <div className="flex-1 relative">
            {/* Pure Leaflet mount point */}
            <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />

            {/* Mobile bottom card */}
            <div className="md:hidden absolute bottom-4 left-4 right-4 z-[1000]">
              <div className="bg-card rounded-xl shadow-lg p-4 border border-border">
                {nearestBank ? (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <LiveDot />
                      <span className="text-xs text-muted-foreground">Nearest Blood Bank</span>
                      <span className="ml-auto text-primary font-bold tabular-nums">
                        {formatDistance(nearestBank.distance)}
                      </span>
                    </div>
                    <p className="font-semibold text-foreground text-sm">{nearestBank.name}</p>
                    <p className="text-xs text-muted-foreground mb-3">{nearestBank.address}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps/dir/?api=1&destination=${nearestBank.lat},${nearestBank.lng}`,
                            "_blank"
                          )
                        }
                      >
                        <Navigation className="w-4 h-4 mr-1" />
                        Directions
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`tel:${nearestBank.phone}`}>
                          <Phone className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Droplet className="w-8 h-8 text-primary animate-pulse" />
                    <p className="text-sm text-muted-foreground">Acquiring GPS location…</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
