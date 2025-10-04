const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Fotografia de Gastronomia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
