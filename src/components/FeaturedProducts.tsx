import ProductCard from "./ProductCard";
import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productLips from "@/assets/product-lips.jpg";

const products = [
  {
    image: productSerum,
    name: "Glow Serum",
    category: "Skincare",
    price: "$38",
    isNew: true,
  },
  {
    image: productCream,
    name: "Cloud Moisturizer",
    category: "Skincare",
    price: "$42",
    isNew: false,
  },
  {
    image: productLips,
    name: "Petal Lip Duo",
    category: "Makeup",
    price: "$28",
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="skincare" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated for You
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-6">
            Bestsellers
          </h2>
          <p className="text-charcoal-light max-w-md mx-auto">
            Our most-loved formulas, designed for effortless beauty routines.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm tracking-wide uppercase font-medium border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity"
          >
            View All Products
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
