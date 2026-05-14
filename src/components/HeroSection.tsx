import { motion } from 'framer-motion';
import { Check, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const features = [
  'Customized Fee Structure',
  'Effortless Onboarding',
  'Personalized Client Engagement',
  'Strategic Advisory Services',
  'Dedicated Client Support',
  'Digital Transformation of Financial Records'
];

export const HeroSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
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
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          phone: formData.phone,
          email: formData.email || "no-reply@cloudcrest.in",
          message: formData.message,
          subject: `Call Back Request from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Request Sent!',
          description: "We'll call you back shortly.",
        });
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
      } else {
        toast({
          title: 'Error',
          description: 'Could not send your request. Please try again.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Could not send your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-accent/20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-[15%] w-32 h-32 rounded-full bg-accent/15 blur-2xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted by 100+ Businesses
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unlocking Business Potential with{' '}
              <span className="text-accent">Precision Accounting.</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Your trusted Virtual business Partner for Streamlined Financial bookkeeping, Compliance, and Business Advisory. Focus on What Matters Most, While We Manage the Financial Complexities


            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-foreground" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+918977079433">
                <Button variant="hero" size="xl" className="group">
                  Schedule a Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="tel:+918977079433">
                <Button variant="hero-outline" size="xl">
                  <Phone className="w-5 h-5" />
                  +91-8977079433
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-accent rounded-2xl p-8 shadow-2xl">
              <h2 className="font-display text-2xl font-bold text-accent-foreground mb-6">
                Quick Enquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="First Name"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
                  />
                  <Input
                    name="Last Name"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
                  />
                </div>

                <Input
                  name="Phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
                />

                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
                />

                <Textarea
                  name="message"
                  placeholder="Message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60 resize-none"
                />

                <Button
                  type="submit"
                  variant="outline"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent font-bold"
                >
                  {isSubmitting ? 'Sending...' : 'Request Call Back'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
