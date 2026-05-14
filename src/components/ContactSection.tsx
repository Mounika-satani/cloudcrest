import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value:
      "Level 4, N Heights, Plot No 38, Phase 2, Siddiq Nagar, HITEC City, Hyderabad, Telangana 500081",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91-8977079433",
    href: "tel:+918977079433",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@cloudcrest.in",
    href: "mailto:info@cloudcrest.in",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "68b5884a-5f88-485f-aafb-887b8e693bc4",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          subject: formData.subject || "Website Contact Form",
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-24 md:py-32"
      style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-4 backdrop-blur-md border border-accent/20">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Ready to transform your business finances? Get in touch with our
            team of experts today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-accent/40 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('https') ? '_blank' : undefined}
                        rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                        className="text-white font-medium hover:text-accent transition-colors text-sm md:text-base">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm md:text-base leading-snug">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Company Info */}
            <div className="p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mail className="w-24 h-24 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4 relative z-10">
                Cloudcrest Business Management LLP
              </h3>
              <p className="text-white/60 text-base leading-relaxed relative z-10">
                A leading firm specializing in virtual accounting, payroll, and
                taxation services. We excel in delivering financial advisory
                solutions that ensure full statutory compliance, prompt service,
                and maximum client satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100">
              <h3 className="font-display text-3xl font-bold text-[#0F172A] mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0F172A] px-1">Your Name</label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-slate-50 border-none h-12 rounded-xl focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0F172A] px-1">Email Address</label>
                    <Input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-slate-50 border-none h-12 rounded-xl focus-visible:ring-accent"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0F172A] px-1">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-slate-50 border-none h-12 rounded-xl focus-visible:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0F172A] px-1">Subject</label>
                    <Input
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="bg-slate-50 border-none h-12 rounded-xl focus-visible:ring-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0F172A] px-1">Your Message</label>
                  <Textarea
                    required
                    placeholder="Tell us about your business needs..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="resize-none bg-slate-50 border-none rounded-2xl focus-visible:ring-accent"
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-2xl shadow-xl shadow-accent/20 group text-lg font-bold">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
