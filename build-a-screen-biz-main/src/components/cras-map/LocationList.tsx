
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Location {
  name: string;
  distance: string;
  info: string;
}

const LocationList = () => {
  const locations: Location[] = [
    {
      name: "CRAS Centro",
      distance: "1,2 km",
      info: "Atendimento até 17 h",
    },
    {
      name: "CRAS Vila Nova",
      distance: "3,8 km",
      info: "Aceita agendamento online",
    },
    {
      name: "CRAS São José",
      distance: "4,5 km",
      info: "Ver detalhes",
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-16">
      <div className="max-w-6xl mx-auto space-y-4">
        {locations.map((location, index) => (
          <Card
            key={index}
            className="cursor-pointer transition-all hover:shadow-md"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {location.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {location.distance}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{location.info}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground hidden sm:inline">
                    {location.distance}
                  </span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LocationList;
