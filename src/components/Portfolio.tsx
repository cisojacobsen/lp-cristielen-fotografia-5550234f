import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  const images = [
    { src: portfolio1, alt: "Burger gourmet com queijo derretido" },
    { src: portfolio2, alt: "Sobremesa elegante" },
    { src: portfolio3, alt: "Café com latte art" },
    { src: portfolio4, alt: "Prato de sushi" },
    { src: portfolio5, alt: "Massa italiana" },
    { src: portfolio6, alt: "Coquetel tropical" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfólio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes em fotografia gastronômica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95 border-0">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-6 w-6 text-white" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
          {selectedImage && (
            <div className="flex items-center justify-center w-full h-full p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
