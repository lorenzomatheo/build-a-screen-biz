
import { Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface LocationCardProps {
  name: string;
  address: string;
  distance: string;
  hours: string;
}

const LocationCard = ({ name, address, distance, hours }: LocationCardProps) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">{name}</h2>
            <p className="text-foreground mb-2">{address}</p>
            <p className="text-lg font-semibold text-foreground mb-2">{distance}</p>
            <p className="text-muted-foreground mb-6">{hours}</p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone className="h-5 w-5" />
                Ligar agora
              </Button>
              <Button variant="outline" className="gap-2">
                <ExternalLink className="h-5 w-5" />
                Ver no Google Maps
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LocationCard;
