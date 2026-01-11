import lifestyleImage from "@/assets/lifestyle-skincare.jpg";
import { Button } from "./ui/button";

const Philosophy = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-rose-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={lifestyleImage}
                alt="Skincare routine"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-tight mb-8">
              Skin you're
              <br />
              <span className="italic">already in</span>
            </h2>
            <div className="space-y-6 text-charcoal-light leading-relaxed mb-10">
              <p>
                We believe beauty should be effortless, not exhausting. Our formulas 
                are designed to enhance what you already have—because real skin is 
                beautiful skin.
              </p>
              <p>
                Every rosé product is cruelty-free, dermatologist-tested, and made 
                with ingredients you can actually pronounce. No filters needed.
              </p>
            </div>
            <Button variant="elegant" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
