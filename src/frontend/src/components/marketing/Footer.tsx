import { Mail, MapPin, Heart } from 'lucide-react';
import { SiX, SiLinkedin, SiGithub } from 'react-icons/si';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'drawdownking';

  return (
    <footer id="contact" className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="space-y-4 lg:col-span-2">
              <img
                src="/assets/generated/drawdownking-logo.dim_512x256.png"
                alt="DrawdownKing"
                className="h-10 w-auto"
              />
              <p className="text-muted-foreground max-w-md">
                Professional-grade risk management tools for traders and investors. Master your drawdown strategy and trade with confidence.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <SiX className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#purpose" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#offerings" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>contact@drawdownking.com</span>
                </li>
                <li className="flex items-start space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Global Financial District</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© {currentYear} DrawdownKing. All rights reserved.</p>
              <p className="flex items-center gap-1.5">
                Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
