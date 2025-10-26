
import { MapPin } from "lucide-react";

const MapView = () => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden border border-border">
          {/* Map background with realistic city layout */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-sky-100">
            {/* Streets - horizontal */}
            <div className="absolute top-[20%] left-0 right-0 h-[3px] bg-gray-300/60" />
            <div className="absolute top-[40%] left-0 right-0 h-[3px] bg-gray-300/60" />
            <div className="absolute top-[60%] left-0 right-0 h-[3px] bg-gray-300/60" />
            <div className="absolute top-[80%] left-0 right-0 h-[3px] bg-gray-300/60" />
            
            {/* Streets - vertical */}
            <div className="absolute left-[25%] top-0 bottom-0 w-[3px] bg-gray-300/60" />
            <div className="absolute left-[50%] top-0 bottom-0 w-[3px] bg-gray-300/60" />
            <div className="absolute left-[75%] top-0 bottom-0 w-[3px] bg-gray-300/60" />
            
            {/* Parks/green areas */}
            <div className="absolute top-[25%] left-[10%] w-[15%] h-[15%] bg-green-300/40 rounded-lg" />
            <div className="absolute bottom-[15%] right-[20%] w-[12%] h-[12%] bg-green-300/40 rounded-lg" />
            
            {/* Building blocks */}
            <div className="absolute top-[22%] left-[28%] w-[8%] h-[8%] bg-gray-200/50 rounded" />
            <div className="absolute top-[42%] left-[53%] w-[10%] h-[10%] bg-gray-200/50 rounded" />
            <div className="absolute top-[62%] left-[30%] w-[7%] h-[7%] bg-gray-200/50 rounded" />
            <div className="absolute top-[15%] right-[15%] w-[9%] h-[9%] bg-gray-200/50 rounded" />
          </div>
          
          {/* Location pins - CRAS units */}
          <div className="absolute top-[30%] left-[35%]">
            <MapPin className="h-10 w-10 text-accent drop-shadow-lg animate-bounce" fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold bg-card px-2 py-1 rounded shadow-sm">
              CRAS Jardim
            </span>
          </div>
          <div className="absolute top-[55%] left-[55%]">
            <MapPin className="h-10 w-10 text-accent drop-shadow-lg" fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold bg-card px-2 py-1 rounded shadow-sm">
              CRAS Centro
            </span>
          </div>
          <div className="absolute bottom-[25%] right-[28%]">
            <MapPin className="h-10 w-10 text-accent drop-shadow-lg" fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold bg-card px-2 py-1 rounded shadow-sm">
              CRAS Vila Nova
            </span>
          </div>

          <div className="absolute top-4 left-4 bg-card px-3 py-2 rounded-md shadow-md text-sm text-muted-foreground">
            Mapa interativo (integração disponível)
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
