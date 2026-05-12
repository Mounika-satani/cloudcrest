import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FAQSection } from '@/components/FAQSection';
import { LineChart, Wallet, BarChart3, Shield, Scissors, Briefcase, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Financial Planning & Strategy',
    icon: LineChart,
    points: [
      'Development of tailored financial strategies to align with your business goals.',
      'Budgeting, forecasting, and financial modelling to guide business growth.',
    ],
  },
  {
    title: 'Cash Flow Management',
    icon: Wallet,
    points: [
      'Monitoring and optimizing cash flow to ensure liquidity and operational efficiency.',
      'Implementing systems to manage working capital effectively.',
    ],
  },
  {
    title: 'Financial Reporting & Analysis',
    icon: BarChart3,
    points: [
      'Preparation of accurate and timely financial reports.',
      'Analysis of key financial metrics to assess performance and identify improvement areas.',
    ],
  },
  {
    title: 'Compliance & Risk Management',
    icon: Shield,
    points: [
      'Ensuring adherence to tax, regulatory, and statutory requirements.',
      'Identifying financial risks and implementing risk mitigation strategies.',
    ],
  },
  {
    title: 'Cost Optimization',
    icon: Scissors,
    points: [
      'Analysing expenses and recommending cost-reduction measures.',
      'Streamlining processes for operational efficiency.',
    ],
  },
  {
    title: 'Fundraising & Investor Relations',
    icon: Briefcase,
    points: [
      'Assisting in raising funds, including debt and equity financing.',
      'Preparing investor-ready financial reports and presentations.',
    ],
  },
  {
    title: 'Technology Integration',
    icon: Monitor,
    points: [
      'Implementing financial tools and ERP systems to enhance financial management.',
      'Training teams on digital solutions for seamless operations.',
    ],
  },
];

const beneficiaries = [
  { title: 'Startups', desc: 'Establish robust financial systems and attract investors with professional reporting.' },
  { title: 'SMEs', desc: 'Optimize financial operations and scale efficiently.' },
  { title: 'Growing Businesses', desc: 'Navigate complex financial landscapes with strategic support.' },
];

const cfoFaqs = [
  {
    question: 'What does Cloudcrest’s Virtual CFO service include, and how can it benefit our business?',
    answer: 'Cloudcrest’s Virtual CFO service offers strategic financial guidance, expert analysis, and streamlined financial management tailored to your business needs. From budgeting and forecasting to cash flow optimization and compliance, we ensure your company stays financially healthy and growth-focused. With our service, you gain the expertise of a seasoned CFO without the cost of a full-time hire, empowering your business to achieve its financial goals.',
  },
  {
    question: 'How often will we communicate and receive updates?',
    answer: 'We ensure regular communication tailored to your business needs, with updates provided weekly, bi-weekly, or monthly, depending on the agreed schedule. In addition, we offer real-time insights and support via email or calls for urgent matters. This proactive approach ensures you are always informed and confident in your financial decisions.',
  },
  {
    question: 'Can you help us with fundraising or investor relations?',
    answer: 'Yes, we can assist with fundraising and investor relations by preparing detailed financial projections, business plans, and pitch decks that resonate with potential investors. Our team also helps in identifying suitable funding opportunities, negotiating terms, and maintaining transparent communication with stakeholders. We ensure your business is well-positioned to attract and secure the capital it needs for growth.',
  },
  {
    question: 'What is the cost structure for Virtual CFO services?',
    answer: 'The cost structure for Virtual CFO services typically depends on the scope of work, the complexity of your business, and the level of involvement required. We offer flexible pricing models, such as a monthly retainer, hourly rates, or project-based fees, ensuring that you only pay for the services you need. We provide transparent pricing, with no hidden costs, and tailor the structure to align with your business’s financial goals and budget.',
  },
  {
    question: 'How does Cloudcrest’s Virtual CFO service integrate with our existing financial team or processes?',
    answer: 'Cloudcrest’s Virtual CFO service seamlessly integrates with your existing financial team or processes by providing strategic oversight, guidance, and expertise. We work alongside your internal staff, offering support and filling any gaps in financial management while ensuring that all operations are aligned with best practices and your company\'s financial objectives.',
  },
];

const VirtualCFO = () => {
  return (
    <ServicePageLayout
      title="Virtual CFO Services"
      subtitle="Strategic Financial Expertise Without the Overhead"
      description="Managing the financial health of a business is critical to its success, yet not every organization requires a full-time Chief Financial Officer (CFO). At Cloudcrest, we offer Virtual CFO Services, providing businesses with access to senior-level financial expertise on a flexible and cost-effective basis."
      secondaryDescription="Our Virtual CFO services are designed to support startups, small and medium enterprises (SMEs), and growing businesses in making informed financial decisions, optimizing operations, and achieving strategic goals."
      servicesTitle="What We Offer"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest as Your Virtual CFO?"
      whyChooseItems={[
        { text: 'Expert Guidance: Leverage the experience of seasoned financial professionals to make smarter decisions.' },
        { text: 'Scalable Services: Flexible solutions tailored to your business size and needs.' },
        { text: 'Cost-Effective: Access CFO-level expertise without the expense of a full-time executive.' },
        { text: 'Strategic Insights: Focused on driving growth, improving profitability, and ensuring compliance.' },
        { text: 'Global Perspective: Expertise in handling domestic and international financial operations.' },
      ]}
      whyChooseDescription="Our Virtual CFO services empower you to focus on your core business while we handle the financial complexities. Partner with us to drive growth, enhance profitability, and stay ahead in a competitive market."
      additionalSections={
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">Who Can Benefit?</h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {beneficiaries.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border text-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      }
      bottomSections={
        <FAQSection items={cfoFaqs} />
      }
    />
  );
};

export default VirtualCFO;
