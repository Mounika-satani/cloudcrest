import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FAQSection } from '@/components/FAQSection';
import { Calculator, Shield, Receipt, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Salary Computation and Processing',
    icon: Calculator,
    points: [
      'Salary computation ensures accurate calculation of employee wages, including deductions for taxes, benefits, and overtime.',
      'Processing salaries on time maintains employee satisfaction, ensures compliance with labor laws, and supports smooth business operations.',
    ],
  },
  {
    title: 'Statutory Compliance (PF, ESI, TDS)',
    icon: Shield,
    points: [
      'Managing PF, ESI, and TDS by ensuring accurate calculation, deductions, and timely filing of returns.',
      'Assist with registration, maintaining employee accounts, and ensuring adherence to relevant labour laws to avoid penalties.',
    ],
  },
  {
    title: 'Managing Employee Reimbursements & Benefits',
    icon: Receipt,
    points: [
      'Ensures timely processing of claims for work-related expenses, such as travel or office supplies, in compliance with company policies.',
      'Administering employee benefits, like health insurance or retirement plans, ensures employees receive the agreed-upon perks.',
    ],
  },
  {
    title: 'Payroll Tax Filings & Year-End Reporting',
    icon: FileText,
    points: [
      'Handling payroll tax filings involves calculating and submitting taxes like income tax, social security to the appropriate authorities on time.',
      'Year-end reporting includes generating forms like Form 16, summarizing employee earnings and taxes.',
    ],
  },
  {
    title: 'Attendance and Leave Management Integration',
    icon: Clock,
    points: [
      'Automates the tracking of employee working hours, attendance, and leave balances for accurate payroll processing.',
      'Ensures compliance with company policies and labor laws, streamlining the approval process for leave requests.',
    ],
  },
];

const benefitItems = [
  { title: 'Time Savings', desc: 'Free up your valuable time by outsourcing payroll tasks.' },
  { title: 'Cost Efficiency', desc: 'Reduce overhead costs associated with in-house payroll management.' },
  { title: 'Error-Free Payroll', desc: 'Minimize errors and avoid penalties with our meticulous processes.' },
  { title: 'Employee Satisfaction', desc: 'Timely and accurate payroll fosters trust and satisfaction among employees.' },
  { title: 'Regulatory Compliance', desc: 'Stay up-to-date with evolving labour laws and tax regulations.' },
];

const payrollFaqs = [
  {
    question: 'What is payroll management?',
    answer: 'Payroll management is the process of handling all aspects related to the compensation of employees in an organization. It involves calculating salaries, wages, bonuses, and deductions, ensuring compliance with tax regulations and labour laws, and maintaining accurate records of employee earnings and withholdings.',
  },
  {
    question: 'Why should I outsource payroll management?',
    answer: 'Outsourcing payroll management allows businesses to save time, reduce errors, and ensure compliance with complex tax regulations and labour laws. It eliminates the administrative burden of handling payroll in-house, freeing up resources to focus on core operations. Outsourced payroll providers offer expertise, accuracy, and efficiency, reducing the risk of penalties due to non-compliance or errors. Additionally, they provide access to advanced tools and technologies, enabling seamless payroll processing and enhanced employee satisfaction.',
  },
  {
    question: 'When does PF and ESI Applicable for my Business?',
    answer: 'PF (Provident Fund) is applicable if you have 20 or more employees and if they are earning up to ₹15,000 per month, while ESI applies if you have 10 or more employees and they earn ₹21,000 or less. Both ensure social security benefits like retirement savings and medical coverage.',
  },
  {
    question: 'What services that u offer in payroll Management?',
    answer: 'At CloudCrest, we offer a full range of payroll management services, including salary calculations, tax deductions, statutory compliance, employee benefits management, payslip generation, and timely disbursements. We also handle PF/ESI contributions, payroll reports, and ensure adherence to local labour laws and tax regulations.',
  },
  {
    question: 'Why Cloudcrest for Payroll Management?',
    answer: 'At Cloudcrest, we provide efficient payroll management tailored to your business needs. Our expert team ensures timely and accurate processing, full tax compliance, and confidentiality. With cloud-based solutions, you can access payroll data anytime, anywhere, while we handle the complexities so you can focus on growth.',
  },
];

const PayrollManagement = () => {
  return (
    <ServicePageLayout
      title="Payroll Management Services"
      subtitle="Streamline Payroll, Empower Your Workforce"
      description="Managing payroll can be time-consuming and complex, but it's a critical function for any business. At Cloudcrest, we take the hassle out of payroll management, ensuring accuracy, compliance, and timely disbursement to keep your team motivated and to run your business operations efficiently."
      servicesTitle="Our Payroll Services Include"
      services={services}
      whyChooseTitle="Why Cloudcrest Stands Out"
      whyChooseItems={[
        { text: 'We understand that payroll is more than just disbursing salaries—it\'s about ensuring employee satisfaction and regulatory compliance.' },
        { text: 'Our dedicated team and state-of-the-art systems make payroll management stress-free.' },
        { text: 'Let us handle your payroll so you can focus on what matters most—your business growth.' },
      ]}
      whyChooseDescription="At Cloudcrest, we understand that payroll is more than just disbursing salaries—it's about ensuring employee satisfaction and regulatory compliance. Our dedicated team and state-of-the-art systems make payroll management stress-free, allowing you to focus on growing your business."
      additionalSections={
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-3xl font-bold text-foreground">
                Benefits of Our Payroll Solutions
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefitItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
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
        <FAQSection items={payrollFaqs} />
      }
    />
  );
};

export default PayrollManagement;
