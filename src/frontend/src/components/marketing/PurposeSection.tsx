import { Shield, Target, LineChart } from 'lucide-react';

export function PurposeSection() {
  return (
    <section id="purpose" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-balance">
              Why DrawdownKing Exists
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              In the world of trading and investing, managing drawdowns is the difference between sustainable success and catastrophic failure. We built DrawdownKing to give you the edge.
            </p>
          </div>

          {/* Purpose Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Protect Capital</h3>
              <p className="text-muted-foreground">
                Understanding your maximum drawdown helps you preserve capital during volatile market conditions and avoid devastating losses.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Optimize Strategy</h3>
              <p className="text-muted-foreground">
                Analyze historical drawdown patterns to refine your trading strategy and improve risk-adjusted returns over time.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl">Build Confidence</h3>
              <p className="text-muted-foreground">
                Make informed decisions backed by data-driven insights into your risk exposure and recovery potential.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-card border rounded-lg p-8 md:p-12 shadow-soft">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DrawdownKing was created to democratize sophisticated risk management tools that were once available only to institutional investors. We believe every trader deserves access to professional-grade analytics that illuminate the true nature of their portfolio risk and empower them to trade with confidence and discipline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
