import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FAQSection } from '@/components/FAQSection';
import { BookOpen, Globe, BarChart3, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Ind AS Transition Services',
    icon: BookOpen,
    points: [
      'Comprehensive analysis and implementation of Ind AS for first-time adopters.',
      'Ensuring seamless integration of new standards into existing accounting frameworks.',
    ],
  },
  {
    title: 'Compliance with Global Standards',
    icon: Globe,
    points: [
      'Assistance in adhering to IFRS for businesses operating across international markets.',
      'Aligning accounting practices with global requirements for cross-border transactions.',
    ],
  },
  {
    title: 'Strategic Financial Reporting',
    icon: BarChart3,
    points: [
      'Preparing financial statements that meet Ind AS, IFRS, and other global standards.',
      'Enhancing transparency and accuracy in financial reporting for investors and stakeholders.',
    ],
  },
  {
    title: 'Advisory for International Growth',
    icon: Briefcase,
    points: [
      'Support for businesses in cross-border acquisitions, joint ventures, and global fundraising.',
      'Guidance on integrating international debt finance and equity markets into your strategy.',
    ],
  },
];

const indAsFaqs = [
  {
    question: 'What is Ind AS advisory services?',
    answer: 'Ind AS (Indian Accounting Standards) advisory services assist businesses in interpreting and implementing these standards, which are based on International Financial Reporting Standards (IFRS). These services help companies navigate the complexities of Ind AS, ensuring accurate financial reporting and compliance. They offer guidance on various aspects, including accounting policies, financial statement preparation, and disclosures. Ultimately, these services contribute to improved transparency and investor confidence in the financial health of businesses.',
  },
  {
    question: 'Does Ind As is Applicable for My business?',
    answer: 'Ind AS (Indian Accounting Standards) is applicable to companies based on their size, nature, and other criteria. If your business is a listed company or in certain sectors like banking or insurance, or if it meets specific financial reporting requirements, Ind AS will govern your accounting practices, ensuring transparency and consistency in financial reporting.',
  },
  {
    question: 'If a holding company is Ind AS compliant, is it mandatory for its subsidiary company to also follow Ind AS?',
    answer: 'Yes, if a holding company is compliant with Ind AS, its subsidiary company is also required to follow Ind AS, unless the subsidiary is a small company or falls under exceptions specified by the regulatory authorities. This ensures consistency in the financial reporting of the entire group.',
  },
  {
    question: 'How can your Ind AS advisory services help in improving financial reporting and decision-making?',
    answer: 'By aligning financial reporting with Ind AS, our advisory services help businesses present a clearer, more accurate picture of their financial health. This transparency builds trust with stakeholders and supports better decision-making by providing relevant, timely, and precise financial data. Additionally, we help identify opportunities for cost savings, improved profitability, and more effective risk management, empowering businesses to make data-driven decisions that drive growth and long-term success.',
  },
];

const IndASAdvisory = () => {
  return (
    <ServicePageLayout
      title="IndAS Advisory"
      subtitle="Empowering Your Business with World-Class Accounting Standards"
      description="As global capital markets become increasingly integrated, businesses are seizing opportunities for international growth. Expanding across borders may involve strategic moves such as cross-border acquisitions, joint ventures, raising international debt finance, collaborating with private equity firms, or securing capital through equity markets in India or abroad."
      secondaryDescription="At Cloudcrest, we bring a unique blend of global expertise and local knowledge to help businesses adapt seamlessly to the evolving accounting landscape."
      servicesTitle="How Cloudcrest Can Help"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Proven expertise in Ind AS conversion for over 100 companies.' },
        { text: 'Deep understanding of global and local accounting standards.' },
        { text: 'Tailored solutions for businesses seeking international expansion.' },
        { text: 'Commitment to ensuring compliance, accuracy, and stakeholder confidence.' },
      ]}
      whyChooseDescription="Whether you are adopting Ind AS, aligning with IFRS, or navigating the complexities of international accounting, Cloudcrest is your trusted partner. Contact us today to learn how we can help your business achieve accounting excellence and global growth."
      bottomSections={
        <FAQSection items={indAsFaqs} />
      }
    />
  );
};

export default IndASAdvisory;
