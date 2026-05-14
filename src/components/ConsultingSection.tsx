import { motion } from 'framer-motion';
import { Gavel, LineChart, FileBarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const consultingServices = [
  {
    icon: Gavel,
    title: 'Tax Representation Services',
    description:
      'Receiving a tax notice can be overwhelming. We provide professional tax representation services to ensure that your responses are accurate, timely, and effective.',
    features: ['Income Tax Representation', 'GST Representation', 'Appeals & Disputes'],
  },
  {
    icon: LineChart,
    title: 'Virtual CFO Services',
    description:
      'Not every organization requires a full-time CFO. We offer Virtual CFO Services, providing businesses with access to senior-level financial expertise on a flexible basis.',
    features: ['Financial Strategy', 'Cash Flow Management', 'Investor Relations'],
  },
  {
    icon: FileBarChart,
    title: 'Feasibility Reports (DPR)',
    description:
      'A well-prepared Feasibility Report is crucial for securing funding. We specialize in crafting comprehensive reports that highlight your project potential.',
    features: ['Bank Loan DPR', 'Investment Analysis', 'Market Research'],
  },
];

export const ConsultingSection = () => {
  return (
    <section id="consulting" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Strategic Advisory
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Consulting Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert guidance to navigate complex business challenges and drive
            strategic growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {consultingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 py-5 bg-secondary/50 border-t border-border">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-8 md:p-12 text-center"
          style={{ background: 'var(--gradient-primary)' }}
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Get Personalized Attention!
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Your Accounting & Bookkeeping Partner for life. Let's discuss how we
            can help your business grow.
          </p>
          <Button variant="hero" size="xl" onClick={() => window.location.href = '/contact-us'}>
            Schedule A Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
