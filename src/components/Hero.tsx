import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroFood})`,
          filter: "brightness(0.4)",
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Fotografia que
          <span className="block text-primary mt-2">Desperta Sabores</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transformo pratos em arte visual que conecta e inspira
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("portfolio")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
          >
            Ver Portfólio
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contato")}
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
