import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from './scrollToSection';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/drawdownking-hero-illustration.dim_1600x900.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>Master Your Drawdown Strategy</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-balance">
            Reign Over Your
            <span className="block text-primary mt-2">Risk Management</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            DrawdownKing empowers traders and investors to understand, analyze, and optimize their drawdown performance. Take control of your risk with precision tools built for financial excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('offerings')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-base px-8"
            >
              Explore Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('purpose')}
              className="border-2 text-base px-8"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">Real-time</div>
              <div className="text-sm text-muted-foreground">Analytics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
