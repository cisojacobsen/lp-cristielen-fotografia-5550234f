import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Entre em contato para discutirmos como posso ajudar a valorizar seu
            negócio através de imagens profissionais
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://wa.me/5551995663129"
              target="_blank"
              className="flex flex-col items-center gap-3 transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Telefone</h3>
              <p className="text-muted-foreground hover:text-primary transition-colors">
                (51) 99566-3129
              </p>
            </a>

            <a
              href="mailto:contato@seuemail.com"
              className="flex flex-col items-center gap-3 transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground hover:text-primary transition-colors">
                contato@cristielensouza.com.br
              </p>
            </a>

            <a
              href="https://www.instagram.com/cristielenfotografia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">Instagram</h3>
              <p className="text-muted-foreground hover:text-primary transition-colors">
                @cristielenfotografia
              </p>
            </a>
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.open("https://wa.me/5551995663129", "_blank")}
          >
            Fale pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
