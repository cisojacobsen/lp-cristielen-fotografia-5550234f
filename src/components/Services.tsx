import { Camera, Image, Utensils } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Fotografia de Pratos",
      description:
        "Fotos profissionais de alta qualidade que destacam a beleza e os detalhes dos seus pratos.",
    },
    {
      icon: Utensils,
      title: "Conteúdo para Redes Sociais",
      description:
        "Criação de conteúdo visual otimizado para Instagram, Facebook e outras plataformas digitais.",
    },
    {
      icon: Image,
      title: "Sessões Personalizadas",
      description:
        "Sessões fotográficas customizadas para cardápios, websites e materiais de marketing.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviços</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas em fotografia gastronômica para valorizar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card hover:bg-secondary transition-colors duration-300 group"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
