import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FAQSection } from '@/components/FAQSection';
import { Gavel, Receipt, FileText, Shield } from 'lucide-react';

const services = [
  {
    title: 'Income Tax Representation',
    icon: Gavel,
    points: [
      'Assistance in responding to notices under various sections of the Income Tax Act, such as Section 143(1), Section 148, or Section 139(9).',
      'Preparation and filing of responses to queries raised during scrutiny assessments or reassessments.',
      'Representation before the Assessing Officer, Commissioner of Income Tax (Appeals), and other authorities.',
      'Advisory on mitigating risks and ensuring compliance with tax provisions.',
    ],
  },
  {
    title: 'GST Representation',
    icon: Receipt,
    points: [
      'Handling notices for mismatches in GST returns, late filing, or discrepancies flagged by authorities.',
      'Assistance in responding to inquiries under GST provisions, including input tax credit (ITC) mismatches and reverse charge mechanism issues.',
      'Representation during departmental audits, investigations, or assessments.',
      'Advisory on resolving disputes and filing appeals before appellate authorities.',
    ],
  },
  {
    title: 'Notice Management Services',
    icon: FileText,
    points: [
      'Analysis and interpretation of the notice or communication to determine its implications.',
      'Drafting detailed and accurate replies supported by necessary documentation.',
      'Coordination with tax authorities to ensure smooth handling of the case.',
    ],
  },
  {
    title: 'Other Representations',
    icon: Shield,
    points: [
      'Representing clients during tax assessments, surveys, or hearings.',
      'Assistance in seeking clarifications or advance rulings on complex tax matters.',
      'Support in filing appeals and pursuing litigation where required.',
    ],
  },
];

const representationFaqs = [
  {
    question: 'What is the scope of Tax Representation services?',
    answer: 'Cloudcrest provides comprehensive tax representation services, including assistance with tax filings, audits, disputes, and compliance with local and international tax laws. We help reduce tax liabilities, ensure regulatory compliance, and represent your interests in case of audits or disputes with tax authorities.',
  },
  {
    question: 'Can Cloudcrest represent us in tax disputes?',
    answer: 'Yes, Cloudcrest has extensive experience representing clients with tax disputes. We ensure that your rights are protected, handle negotiations, and work towards favourable resolutions, minimizing the risk of penalties and fines.',
  },
  {
    question: 'Can you Handle the Tax Appeals?',
    answer: 'Yes, we specialize in handling tax appeals with expertise and professionalism. Our team ensures thorough preparation, accurate documentation, and strong representation before tax authorities to safeguard your interests. Trust us to navigate the complexities of the appeals process and achieve favourable outcomes.',
  },
  {
    question: 'What are the consequences of Depositing the cash into my bank account?',
    answer: 'Depositing cash into your bank account can attract scrutiny from tax authorities, especially if the amount exceeds prescribed limits. Such deposits may trigger reporting under the Annual Information Statement (AIS) and require you to justify the source of funds. Failure to provide proper documentation can lead to penalties, inquiries, or legal consequences.',
  },
  {
    question: 'Can Cloudcrest assist in structuring our business to optimize tax efficiency?',
    answer: 'Yes, Cloudcrest provides expert tax advisory services to help structure your business in a tax-efficient manner. We analyse your business model and recommend strategies to minimize tax burdens while ensuring full compliance with applicable tax laws.',
  },
];

const TaxRepresentation = () => {
  return (
    <ServicePageLayout
      title="Tax Representation Services"
      subtitle="Expert Guidance for Resolving Tax Notices and Representations"
      description="Receiving a tax notice or communication from the tax authorities can be overwhelming. At Cloudcrest, we provide professional tax representation services to ensure that your responses are accurate, timely, and effective. Whether it's for income tax or GST matters, we stand by your side, representing you before the authorities and safeguarding your interests."
      secondaryDescription="Our experienced team specializes in handling notices, inquiries, and assessments, ensuring compliance and minimizing potential liabilities."
      servicesTitle="Our Tax Representation Services"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest for Tax Representation?"
      whyChooseItems={[
        { text: 'Deep Expertise: Extensive knowledge of Income Tax and GST laws, rules, and procedures.' },
        { text: 'Tailored Approach: Solutions customized to address the specific notice or representation requirements of each client.' },
        { text: 'Comprehensive Support: From notice interpretation to representation at various forums, we handle it all.' },
        { text: 'Proactive Guidance: Focused on resolving issues efficiently while ensuring compliance and avoiding future disputes.' },
      ]}
      whyChooseDescription="Facing a tax notice or representation requirement? Don't let it disrupt your operations. Our dedicated team of tax experts is here to manage your compliance and representation needs with professionalism and precision."
      bottomSections={
        <FAQSection items={representationFaqs} />
      }
    />
  );
};

export default TaxRepresentation;
