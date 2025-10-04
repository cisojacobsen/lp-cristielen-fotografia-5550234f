const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mim</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Com mais de 10 anos de experiência em fotografia gastronômica, transformo pratos em
              obras de arte visuais que despertam emoções e estimulam os sentidos.
            </p>
            <p>
              Meu trabalho é guiado pela paixão em capturar a essência de cada prato, destacando
              texturas, cores e detalhes que fazem da gastronomia uma experiência única.
            </p>
            <p>
              Atendo restaurantes, cafés, confeitarias e marcas do setor alimentício, oferecendo
              imagens profissionais que valorizam seus produtos e fortalecem sua presença digital.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">Projetos Realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
