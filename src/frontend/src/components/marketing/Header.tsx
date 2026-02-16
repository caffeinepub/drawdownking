import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from './scrollToSection';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'purpose' },
    { label: 'Offerings', target: 'offerings' },
    { label: 'Contact', target: 'contact' }
  ];

  const handleNavClick = (target: string) => {
    scrollToSection(target);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            aria-label="DrawdownKing home"
          >
            <img
              src="/assets/generated/drawdownking-logo.dim_512x256.png"
              alt="DrawdownKing"
              className="h-8 md:h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.target}
                variant="ghost"
                onClick={() => handleNavClick(link.target)}
                className="text-foreground/80 hover:text-foreground hover:bg-accent/50"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Button
                  key={link.target}
                  variant="ghost"
                  onClick={() => handleNavClick(link.target)}
                  className="justify-start text-foreground/80 hover:text-foreground hover:bg-accent/50"
                >
                  {link.label}
                </Button>
              ))}
              <Button
                onClick={() => handleNavClick('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
