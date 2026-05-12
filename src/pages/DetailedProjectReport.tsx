import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FAQSection } from '@/components/FAQSection';
import { FileBarChart, Search, BarChart3, Shield, Globe } from 'lucide-react';

const services = [
  {
    title: 'Technical Feasibility',
    icon: Search,
    points: [
      'Assessment of project infrastructure, resources, and technical requirements.',
      'Analysis of operational workflows and technology integration.',
    ],
  },
  {
    title: 'Market Feasibility',
    icon: Globe,
    points: [
      'Comprehensive market research to assess demand, competition, and target audience.',
      'Identification of market trends and growth opportunities.',
    ],
  },
  {
    title: 'Financial Feasibility',
    icon: BarChart3,
    points: [
      'Detailed project costing, revenue projections, and ROI analysis.',
      'Preparation of financial models, cash flow statements, and break-even analysis.',
    ],
  },
  {
    title: 'Economic & Social Impact',
    icon: FileBarChart,
    points: [
      'Evaluation of the project\'s impact on local communities and overall economic development.',
      'Highlighting alignment with government initiatives and policies, if applicable.',
    ],
  },
  {
    title: 'Compliance & Risk Assessment',
    icon: Shield,
    points: [
      'Identification of regulatory requirements and compliance strategies.',
      'Comprehensive risk analysis with mitigation plans.',
    ],
  },
];

const dprFaqs = [
  {
    question: 'What is a Detailed Project Report (DPR), and how can Cloudcrest assist in preparing it?',
    answer: 'A Detailed Project Report (DPR) is a comprehensive document that outlines the project\'s objectives, financial projections, technical details, and execution strategy. Cloudcrest helps in preparing a tailored DPR by analysing the project’s scope, conducting feasibility studies, and ensuring compliance with regulatory requirements. Our expertise ensures that the DPR is well-structured, persuasive, and aligned with investor expectations, increasing the likelihood of securing funding and successful project implementation.',
  },
  {
    question: 'How long does it take to prepare a DPR?',
    answer: 'The time required to prepare a Detailed Project Report (DPR) depends on the complexity and scale of the project. Typically, it can take anywhere from 2 to 4 weeks to gather data, conduct analysis, and finalize the report. Cloudcrest ensures a timely and efficient process, with regular updates to keep you informed at each stage of preparation.',
  },
  {
    question: 'Can the DPR be used to attract investors or secure funding?',
    answer: 'Yes, a Detailed Project Report (DPR) is a crucial tool for attracting investors and securing funding. It provides a clear, structured presentation of the project\'s feasibility, financial viability, and potential returns, making it easier for investors to assess the opportunity. Cloudcrest ensures the DPR is crafted to highlight key factors that appeal to investors, such as risk management, projected profits, and growth potential.',
  },
  {
    question: 'What information do you need from us to create the DPR?',
    answer: 'To create a Detailed Project Report (DPR), we need comprehensive information about the project, including its objectives, scope, and timeline. We also require financial data such as budgets, cost estimates, and projected revenue, along with any market research or industry analysis relevant to the project. Additionally, details on regulatory requirements, technical specifications, and resource requirements will help ensure the DPR is well-rounded and accurate.',
  },
  {
    question: 'How do you handle revisions or updates to the DPR?',
    answer: 'We handle revisions or updates to the Detailed Project Report (DPR) through a collaborative approach, ensuring that all feedback is carefully reviewed and incorporated. Clients can request changes at any stage, and we provide regular updates to ensure the DPR aligns with evolving project goals. Cloudcrest guarantees a flexible process, making sure that the final report reflects the most accurate and relevant information for your project’s success.',
  },
];

const DetailedProjectReport = () => {
  return (
    <ServicePageLayout
      title="Feasibility Report / Detailed Project Report (DPR)"
      subtitle="Your Strategic Partner for Fundraising and Bank Loan Approvals"
      description="In today's competitive business environment, a well-prepared Feasibility Report or Detailed Project Report (DPR) is crucial for securing funding and obtaining approvals for bank loans. At Cloudcrest, we specialize in crafting comprehensive and meticulously analysed reports that highlight your project's potential, ensuring stakeholders gain confidence in your vision."
      secondaryDescription="A Feasibility Report or DPR is a structured document that evaluates the viability of a proposed project. It includes in-depth analyses of technical, financial, operational, and market aspects, providing a clear roadmap for implementation and demonstrating the project's profitability and sustainability."
      servicesTitle="Our Expertise in Feasibility Reports/DPR"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Expert Team: A team of seasoned professionals with expertise in finance, market research, and project management.' },
        { text: 'Customized Reports: Tailored solutions to suit the requirements of banks, investors, or stakeholders.' },
        { text: 'Proven Track Record: Extensive experience in preparing DPRs for diverse industries and project scales.' },
        { text: 'End-to-End Support: From data collection to report submission and follow-ups with financial institutions, we handle it all.' },
      ]}
      whyChooseDescription="At Cloudcrest, we are committed to helping you achieve your business goals by delivering reports that demonstrate your project's potential. Whether you're raising funds, seeking bank loans, or planning a new venture, our reports are designed to make an impactful impression on stakeholders."
      bottomSections={
        <FAQSection items={dprFaqs} />
      }
    />
  );
};

export default DetailedProjectReport;
