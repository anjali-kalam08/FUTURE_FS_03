import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Shop: ["Skincare", "Makeup", "Body", "Sets", "Gift Cards"],
    Help: ["FAQ", "Shipping", "Returns", "Contact Us"],
    Company: ["About Us", "Careers", "Press", "Sustainability"],
  };

  return (
    <footer className="bg-foreground text-background py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="font-serif text-3xl mb-6">rosé</h3>
            <p className="text-background/70 max-w-xs mb-8 leading-relaxed">
              Beauty essentials for the skin you're already in. 
              Cruelty-free, dermatologist-tested, made with care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-widest uppercase mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 rosé beauty. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
