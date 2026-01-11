import { Button } from "./ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: string;
  isNew?: boolean;
}

const ProductCard = ({ image, name, category, price, isNew }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-cream mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isNew && (
          <span className="absolute top-4 left-4 bg-foreground text-background text-xs tracking-widest uppercase px-3 py-1.5">
            New
          </span>
        )}
        
        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <Button variant="hero" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick Add
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p className="text-xs text-muted-foreground tracking-wide uppercase">{category}</p>
        <h3 className="font-serif text-lg">{name}</h3>
        <p className="text-sm font-medium">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
