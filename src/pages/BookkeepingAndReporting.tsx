import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FAQSection } from '@/components/FAQSection';
import { BookOpen, CreditCard, BarChart3, Wallet, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Recording Daily Financial Transactions',
    icon: BookOpen,
    points: [
      'Recording daily financial transactions ensures accurate tracking of income and expenses.',
      'It helps in making informed decisions by providing a clear picture of financial health.',
    ],
  },
  {
    title: 'Managing Accounts Payable and Receivable',
    icon: CreditCard,
    points: [
      'Managing accounts payable ensures timely payments to suppliers, avoiding late fees and maintaining good relationships.',
      'Managing accounts receivable helps track money owed, improving cash flow and reducing the risk of bad debts.',
    ],
  },
  {
    title: 'Bank and Credit Card Reconciliations',
    icon: BarChart3,
    points: [
      'Help ensure that your financial records match with bank statements, identifying any discrepancies.',
      'Provide an opportunity to spot errors, fraud, or unauthorized transactions, ensuring accurate financial reporting.',
    ],
  },
  {
    title: 'Payroll Processing and Expense Tracking',
    icon: Wallet,
    points: [
      'Payroll processing ensures employees are paid accurately and on time, maintaining compliance with tax regulations.',
      'Expense tracking helps monitor spending, stay within budget, and identify areas for cost savings.',
    ],
  },
  {
    title: 'Inventory and Asset Management',
    icon: Package,
    points: [
      'Inventory management helps track stock levels, reduce overstocking or stockouts, and improve order fulfillment.',
      'Asset management ensures proper tracking of company assets, aiding in maintenance, depreciation, and efficient resource utilization.',
    ],
  },
];

const reportingItems = [
  'Profit and loss statements',
  'Balance sheets',
  'Cash flow reports',
  'Budgeting and forecasting',
  'Customized financial dashboards',
];

const benefits = [
  'Streamlined financial processes',
  'Reduced administrative burden',
  'Improved decision-making with real-time data',
  'Audit-ready financial records',
];

const bookkeepingFaqs = [
  {
    question: 'What is bookkeeping, and why is it essential for my business?',
    answer: 'Bookkeeping is the process of recording, organizing, and managing your business\'s financial transactions. It ensures that your financial records are accurate and up-to-date, helping you make informed decisions, maintain compliance with tax laws, and prepare for audits or financial reviews.',
  },
  {
    question: 'What type of services includes in bookkeeping?',
    answer: 'CloudCrest provides a comprehensive range of bookkeeping services, including transaction recording, bank and credit card reconciliations, inventory management, Purchase and sales recording, accounts payable and receivable management, and financial reporting. Our goal is to ensure your financial data is accurate and actionable.',
  },
  {
    question: 'Does the Difference between Receipts and Payments is my Profit?',
    answer: 'No, the difference between receipts and payments is not your profit because receipts do not only include income; they also include loans, advances, and capital inflows. Similarly, payments do not only represent expenses; they may include asset purchases, loan repayments, and other non-expense cash outflows. Therefore, profit cannot be determined simply by the difference between receipts and payments, as they reflect cash movement rather than actual income and expenses.',
  },
  {
    question: 'How does CloudCrest handle reporting for my business?',
    answer: 'We deliver customized financial reports, including profit and loss statements, balance sheets, and cash flow & funds flow statements, Accounts Receivables and payables Statements to provide insights into your business’s performance. Our team ensures these reports are easy to understand and available on demand, empowering you to make informed financial decisions.',
  },
  {
    question: 'What makes CloudCrest\'s bookkeeping and reporting services unique?',
    answer: 'We provide inhouse and virtual accounting services as per requirement of the clients. Our approach includes use of advanced technology and tools for efficient bookkeeping. Opting for latest bookkeeping software ensures your financial data is always secure, accessible, and up-to-date. Additionally, our team of experts works closely with you to tailor our services to your unique business needs.',
  },
];

const BookkeepingAndReporting = () => {
  return (
    <ServicePageLayout
      title="Bookkeeping & Reporting"
      subtitle="Effortless Financial Management for Your Business"
      description="Accurate and efficient bookkeeping is the cornerstone of any successful business. At Cloudcrest, we provide comprehensive bookkeeping and reporting solutions tailored to meet the unique needs of businesses across industries."
      servicesTitle="Our Bookkeeping Services Include"
      services={services}
      whyChooseTitle="Benefits of Our Bookkeeping & Reporting Services"
      whyChooseItems={benefits.map(b => ({ text: b }))}
      whyChooseDescription="Timely and insightful reporting is key to understanding your business's financial health. Our tailored reporting services provide a clear picture of your company's performance, helping you make data-driven decisions."
      additionalSections={
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Enhanced Reporting for Better Decisions
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {reportingItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      }
      bottomSections={
        <FAQSection items={bookkeepingFaqs} />
      }
    />
  );
};

export default BookkeepingAndReporting;
