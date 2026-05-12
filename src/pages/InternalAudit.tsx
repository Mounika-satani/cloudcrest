import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FAQSection } from '@/components/FAQSection';
import { Shield, Search, Monitor, FileCheck, Leaf, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Internal and Management Audit',
    icon: Search,
    points: ['Comprehensive assessment of internal controls and operational processes.'],
  },
  {
    title: 'Enterprise Risk Management (ERM)',
    icon: Shield,
    points: ['Identifying, evaluating, and mitigating risks to achieve strategic objectives.'],
  },
  {
    title: 'Techno-Commercial and Concurrent Review',
    icon: Monitor,
    points: ['Ensuring optimal alignment of technological and operational processes.'],
  },
  {
    title: 'Due Diligence Reviews',
    icon: FileCheck,
    points: ['Assessing financial, operational, and compliance risks during mergers and acquisitions.'],
  },
  {
    title: 'IT Risk and Advisory',
    icon: Monitor,
    points: ['Identifying vulnerabilities in IT systems and suggesting robust cybersecurity solutions.'],
  },
  {
    title: 'Compliance Review',
    icon: Scale,
    points: ['Ensuring adherence to regulatory requirements and internal policies.'],
  },
  {
    title: 'Carbon & Sustainability Risk Advisory',
    icon: Leaf,
    points: ['Guiding businesses on managing environmental risks and sustainability compliance.'],
  },
];

const methodologies = [
  'Standard Operating Procedures (SOPs): Establishing clear processes for consistency and efficiency.',
  'Client-Specific Toolkits: Supporting multi-location engagements with tailored solutions.',
  'Data Analytics Tools: Utilizing CAATs like ACL and IDEA for precise sampling and analytics.',
  'Research-Based Checklists: Ensuring thorough evaluations aligned with industry standards.',
  'Customized Reporting: Delivering actionable insights to various management levels.',
];

const helpItems = [
  'Critical Evaluation of Internal Controls: Identifying gaps and recommending improvements.',
  'Operational Reviews: Providing constructive feedback to optimize performance.',
  'Cost Reduction & Revenue Optimization: Identifying opportunities to enhance financial efficiency.',
  'System and Procedure Evaluation: Reviewing IT and operational systems for improvements.',
  'Risk Assessment & Mitigation: Identifying risks and suggesting mitigation strategies.',
  'Regulatory Compliance: Ensuring adherence to legal and operational guidelines.',
  'Corporate Governance Support: Assisting with governance requirements under the Companies Act, 2013.',
];

const auditFaqs = [
  {
    question: 'What is Internal Audit?',
    answer: 'Internal audit is an independent evaluation process within a company that assesses the effectiveness of its internal controls, risk management, and governance processes. The goal is to ensure that the organization’s operations are efficient, compliant with regulations, and free from fraud or errors, helping management make informed decisions.',
  },
  {
    question: 'Is it mandate to get the Internal Audit done?',
    answer: 'Internal audit is mandatory for certain companies, such as those meeting specific turnover or net worth criteria, as per regulatory requirements. For others, while it may not be legally required, conducting an internal audit is highly recommended to ensure operational efficiency, identify risks, and maintain compliance with laws and regulations.',
  },
  {
    question: 'How does Cloudcrest ensure that the recommended actions from internal audits are properly implemented and followed through by the organization?',
    answer: 'We work closely with your team to ensure that audit recommendations are actionable, and we provide ongoing support through implementation plans, monitoring, and follow-ups to ensure effective execution.',
  },
  {
    question: 'What are the key benefits of utilizing Cloudcrest\'s Internal Audit & Risk Management services for our organization?',
    answer: 'Cloudcrest’s services provide comprehensive risk mitigation, improved compliance, enhanced operational efficiency, and timely identification of vulnerabilities, helping your organization achieve its strategic goals while minimizing risks.',
  },
  {
    question: 'Can Cloudcrest help in preparing for external audits or regulatory reviews?',
    answer: 'Yes, we assist in preparing for external audits and regulatory reviews by ensuring your internal processes are compliant, documenting necessary controls, and providing guidance to streamline the process and reduce the risk of non-compliance.',
  },
];

const InternalAudit = () => {
  return (
    <ServicePageLayout
      title="Internal Audit & Risk Management"
      subtitle="Tailored Expertise to Minimize Risks and Maximize Returns"
      description="In today's dynamic business landscape, organizations face numerous challenges such as the global banking crisis, cybercrime, shifting market dynamics, and heightened stakeholder accountability. Identifying risks and implementing effective responses early is critical to safeguarding your organization's success."
      secondaryDescription="At Cloudcrest, we specialize in providing comprehensive Internal Audit and Risk Management solutions designed to enhance operational efficiency, ensure regulatory compliance, and fortify corporate governance."
      servicesTitle="Our Internal Audit & Risk Management Services"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Expertise in serving diverse industries and geographies.' },
        { text: 'Advanced methodologies and tools for accurate analysis.' },
        { text: 'Proactive guidance to navigate regulatory and operational challenges.' },
        { text: 'Commitment to enhancing governance, compliance, and efficiency.' },
      ]}
      whyChooseDescription="Partner with us to build a resilient organisation that thrives amidst uncertainty. Contact us today to learn how our Internal Audit and Risk Management services can drive your business forward."
      additionalSections={
        <>
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Methodologies and Tools</h2>
                  <ul className="space-y-3">
                    {methodologies.map((m, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">How Cloudcrest Can Help</h2>
                  <ul className="space-y-3">
                    {helpItems.map((h, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </>
      }
      bottomSections={
        <FAQSection items={auditFaqs} />
      }
    />
  );
};

export default InternalAudit;
