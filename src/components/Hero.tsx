import { Button } from "./ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Natural beauty"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-xl lg:max-w-2xl">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-charcoal-light mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Skin First. Makeup Second.
          </p>
          
          <h1 
            className="font-serif text-5xl lg:text-7xl xl:text-8xl leading-[0.9] mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Beauty in
            <br />
            <span className="italic text-rose">simplicity</span>
          </h1>

          <p 
            className="text-lg lg:text-xl text-charcoal-light leading-relaxed mb-10 max-w-md animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Effortless skincare and makeup essentials designed for your real life. 
            Because you're already beautiful.
          </p>

          <div 
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl">
              Shop Skincare
            </Button>
            <Button variant="hero-outline" size="xl">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
