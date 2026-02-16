import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Bell, Calculator, Database, FileText, Zap } from 'lucide-react';

export function OfferingsSection() {
  const offerings = [
    {
      icon: Calculator,
      title: 'Drawdown Calculator',
      description: 'Calculate maximum drawdown, recovery time, and risk metrics with precision. Understand your portfolio\'s vulnerability to market downturns.',
      badge: 'Core Tool',
      color: 'text-chart-1'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Visualize drawdown patterns over time with interactive charts. Identify trends and correlations that impact your trading performance.',
      badge: 'Analytics',
      color: 'text-chart-2'
    },
    {
      icon: Bell,
      title: 'Risk Alerts',
      description: 'Set custom thresholds and receive real-time notifications when your drawdown approaches critical levels. Stay proactive, not reactive.',
      badge: 'Monitoring',
      color: 'text-chart-3'
    },
    {
      icon: Database,
      title: 'Historical Data',
      description: 'Access comprehensive historical drawdown data across multiple timeframes. Learn from past market cycles and stress-test your strategies.',
      badge: 'Data',
      color: 'text-chart-4'
    },
    {
      icon: FileText,
      title: 'Custom Reports',
      description: 'Generate detailed risk reports tailored to your portfolio. Share insights with stakeholders or use them to refine your investment thesis.',
      badge: 'Reporting',
      color: 'text-chart-5'
    },
    {
      icon: Zap,
      title: 'Real-time Tracking',
      description: 'Monitor your drawdown metrics in real-time as markets move. Make informed decisions with up-to-the-second risk intelligence.',
      badge: 'Live',
      color: 'text-chart-1'
    }
  ];

  return (
    <section id="offerings" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-balance">
              Powerful Tools for Risk Mastery
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Everything you need to understand, monitor, and optimize your drawdown performance in one comprehensive platform.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 ${offering.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {offering.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {offering.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-lg font-medium">Ready to take control of your risk?</p>
              <p className="text-muted-foreground max-w-md">
                Join traders and investors who trust DrawdownKing to protect their capital and optimize their performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
