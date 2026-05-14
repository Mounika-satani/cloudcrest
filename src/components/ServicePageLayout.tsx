import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ServiceItem {
  title: string;
  points: string[];
  icon?: LucideIcon;
}

interface WhyChooseItem {
  text: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  description: string;
  secondaryDescription?: string;
  servicesTitle: string;
  services: ServiceItem[];
  whyChooseTitle?: string;
  whyChooseItems?: WhyChooseItem[];
  whyChooseDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  additionalSections?: React.ReactNode;
  bottomSections?: React.ReactNode;
}

export const ServicePageLayout = ({
  title,
  subtitle,
  heroImage,
  description,
  secondaryDescription,
  servicesTitle,
  services,
  whyChooseTitle = 'Why Choose CloudCrest?',
  whyChooseItems = [],
  whyChooseDescription,
  ctaTitle = 'Let Us Simplify for You',
  ctaDescription = 'Contact us to know more about our services',
  additionalSections,
  bottomSections,
}: ServicePageLayoutProps) => {
  const { toast } = useToast();
  const [callbackForm, setCallbackForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: "68b5884a-5f88-485f-aafb-887b8e693bc4",
          name: callbackForm.name,
          phone: callbackForm.phone,
          email: callbackForm.email,
          message: callbackForm.message || 'No message provided',
          subject: `Call Back Request from ${callbackForm.name}`,
        }),
      });

      if (response.ok) {
        toast({ title: 'Request Sent!', description: "We'll call you back shortly." });
        setSubmitted(true);
        setCallbackForm({ name: '', phone: '', email: '', message: '' });
      } else {
        toast({ title: 'Error', description: 'Could not send your request. Please try again.', variant: 'destructive' });
      }
    } catch {
      toast({ title: 'Error', description: 'Could not send your request. Please try again.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
                {title}
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-6">
                {subtitle}
              </p>
              <Link to="/contact-us">
                <Button variant="hero" size="xl" className="group">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            {heroImage && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={heroImage}
                  alt={title}
                  className="rounded-2xl shadow-2xl w-full max-h-[400px] object-cover"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              {description}
            </p>
            {secondaryDescription && (
              <p className="text-muted-foreground text-lg leading-relaxed">
                {secondaryDescription}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {servicesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {service.icon && (
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {additionalSections}

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Call CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  {ctaTitle}
                </h3>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  {ctaDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+918977079433">
                    <Button variant="hero" size="xl" className="group">
                      <Phone className="w-5 h-5" />
                      Call Now: +91-8977079433
                    </Button>
                  </a>
                  <Link to="/contact-us">
                    <Button variant="hero-outline" size="xl">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Request a Call Back Form */}
              <div className="p-8 md:p-12 bg-white/10 backdrop-blur-sm">
                <h4 className="font-display text-2xl font-bold text-primary-foreground mb-6">
                  Request a Call Back
                </h4>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle2 className="w-12 h-12 text-accent mb-4" />
                    <p className="text-primary-foreground font-semibold text-lg">Thank you! We'll call you back shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        required
                        placeholder="Your Name"
                        value={callbackForm.name}
                        onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                        className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 h-11"
                      />
                      <Input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        value={callbackForm.phone}
                        onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                        className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 h-11"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={callbackForm.email}
                      onChange={(e) => setCallbackForm({ ...callbackForm, email: e.target.value })}
                      className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 h-11"
                    />
                    <Input
                      placeholder="Brief message (optional)"
                      value={callbackForm.message}
                      onChange={(e) => setCallbackForm({ ...callbackForm, message: e.target.value })}
                      className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 h-11"
                    />
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full font-bold"
                    >
                      {isSubmitting ? 'Sending...' : 'Request Call Back'}
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      {whyChooseItems.length > 0 && (
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {whyChooseTitle}
                </h2>
                <ul className="space-y-4">
                  {whyChooseItems.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              {whyChooseDescription && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {whyChooseDescription}
                  </p>
                  <Link to="/contact-us" className="mt-6 inline-block">
                    <Button variant="accent" size="lg">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {bottomSections}
      <Footer />
    </div>
  );
};
