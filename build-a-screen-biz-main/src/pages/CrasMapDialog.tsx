
import HeroSection from "@/components/cras-map/HeroSection";
import SearchBar from "@/components/cras-map/SearchBar";
import MapView from "@/components/cras-map/MapView";
import LocationCard from "@/components/cras-map/LocationCard";
import LocationList from "@/components/cras-map/LocationList";
import Footer from "@/components/cras-map/Footer";

const CrasMapDialog = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <SearchBar />
        <MapView />
        <LocationCard
          name="CRAS Jardim América"
          address="R: das Acácias, 123, Jardim América"
          distance="2,5 km"
          hours="Atendimento: 08 h - 17 h"
        />
        <LocationList />
      </main>
      <Footer />
    </div>
  );
};

export default CrasMapDialog;
