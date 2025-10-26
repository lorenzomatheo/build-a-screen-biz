
import { MapPin, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location:", position.coords);
          // Implement location handling here
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Digite seu endereço ou CEP"
            className="pl-10 h-12"
          />
        </div>
        <Button
          variant="outline"
          className="h-12 gap-2 whitespace-nowrap"
          onClick={handleUseLocation}
        >
          <Navigation className="h-5 w-5" />
          Usar minha localização
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
