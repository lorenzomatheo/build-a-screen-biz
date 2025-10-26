import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { BenefitCard } from "@/components/BenefitCard";
import { GraduationCap, Home, Bus } from "lucide-react";
import { QuickFAQ } from "@/components/QuickFAQ";
import { getRecommendedBenefits, Benefit, getAllUniqueTags } from "@/lib/api";
import { TagSearch } from "@/components/TagSearch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CrasMapDialog from "@/pages/CrasMapDialog";

const Dashboard = () => {
  const location = useLocation();
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = getAllUniqueTags();

  useEffect(() => {
    const fetchBenefits = async () => {
      setLoading(true);
      const recommendedBenefits = await getRecommendedBenefits(location.state?.answers || {});

      const filteredBenefits = recommendedBenefits.filter(benefit => {
        if (selectedTags.length === 0) return true;
        return benefit.badges.some(badge => selectedTags.includes(badge.label));
      });

      setBenefits(filteredBenefits);
      setLoading(false);
    };

    fetchBenefits();
  }, [location.state?.answers, selectedTags]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-12 h-12" />;
      case "Home":
        return <Home className="w-12 h-12" />;
      case "Bus":
        return <Bus className="w-12 h-12" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="w-12 h-12 rounded-full bg-primary flex-shrink-0" />

            {/* User Actions */}
            <div className="flex items-center gap-3">
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Descubra oportunidades e benefícios que fazem sentido para você
              </h1>
              <p className="text-lg text-muted-foreground">
                A plataforma analisa su pe fil e mostra o que está disponível agora.
              </p>

              {/* Progress */}
              <div className="space-y-2">
                <Progress value={80} className="h-2" />
                <p className="text-sm font-medium text-foreground">Perfil 80% completo</p>
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Recomendações para você</h2>
              <TagSearch tags={allTags} selectedTags={selectedTags} onTagClick={handleTagClick} />

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <BenefitCard.Skeleton />
                  <BenefitCard.Skeleton />
                  <BenefitCard.Skeleton />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <BenefitCard
                      key={benefit.id}
                      icon={renderIcon(benefit.icon)}
                      iconColor={benefit.iconColor as any}
                      title={benefit.title}
                      description={benefit.description}
                      badges={benefit.badges.map(badge => ({...badge, variant: badge.variant as any}))}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Alertas */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Prazos a alertas</h3>
              <div className="space-y-3">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-semibold text-foreground">Renovação do ProNu</p>
                  <p className="text-sm text-muted-foreground mt-1">5 dias restantes</p>
                </div>
              </div>
            </div>

            {/* Atalhos */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Atalhos úteis</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-primary hover:text-primary">
                  Documentos
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start text-primary hover:text-primary">
                      Mapa CRAS
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle>Mapa de unidades CRAS</DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto">
                      <CrasMapDialog />
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="ghost" className="w-full justify-start text-primary hover:text-primary">
                  Ajuda
                </Button>
              </div>
            </div>

            {/* Quick FAQ */}
            <QuickFAQ />
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Dashboard;
