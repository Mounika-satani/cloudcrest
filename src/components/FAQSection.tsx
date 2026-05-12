import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services does CloudCrest provide?',
    answer:
      'CloudCrest offers tax planning, auditing, bookkeeping, financial statement preparation, business advisory, and compliance services for both individuals and businesses. We also provide specialized services like incorporation, payroll management, GST compliance, and Virtual CFO services.',
  },
  {
    question: 'Do you offer both personal and business tax services?',
    answer:
      'Yes, CloudCrest provides comprehensive tax services for individuals and businesses, ensuring accurate tax filings and maximizing potential deductions. Our team of experts handles everything from ITR filing to complex international tax matters.',
  },
  {
    question: 'Can CloudCrest help me with starting a new business?',
    answer:
      'Absolutely. We offer expert advisory services to guide you through business setup, registration, and financial compliance. Our incorporation services cover Private Limited Companies, LLPs, OPCs, Partnership Firms, and Sole Proprietorships.',
  },
  {
    question: 'How do I schedule an appointment with CloudCrest?',
    answer:
      'You can schedule an appointment by filling out the enquiry form on our website, or contact us directly via email at info@cloudcrest.in or by phone at +91-8977079433. Our team will get back to you within 24 hours.',
  },
  {
    question: 'What is the difference between bookkeeping and accounting?',
    answer:
      'Bookkeeping involves managing day-to-day financial transactions, recording income, expenses, and maintaining financial records. Accounting focuses on summarizing and analyzing this financial data for strategic decision-making, tax planning, and regulatory compliance.',
  },
  {
    question: 'What software platforms do you work with?',
    answer:
      'We are proficient in various accounting software including QuickBooks, Xero, Tally Prime, Zoho Books, SAP, Odoo, Wave, and Microsoft Dynamics. We can work with your existing systems or help you migrate to a more suitable platform.',
  },
];

export const FAQSection = ({ items }: { items?: { question: string; answer: string }[] }) => {
  const activeFaqs = items || faqs;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and how we can
            help your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {activeFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-accent/50 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-accent transition-colors py-5 [&[data-state=open]]:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
