import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FAQSection } from '@/components/FAQSection';
import { Globe, Building2, Users, FileText, Gavel, Briefcase, Scale } from 'lucide-react';

const services = [
  {
    title: 'Tax Strategy and Planning',
    icon: Globe,
    points: [
      'Developing effective taxation strategies for corporates and non-corporates, including maximizing benefits from tax holidays and incentives.',
    ],
  },
  {
    title: 'Business Setup & Investment Advisory',
    icon: Building2,
    points: [
      'Guidance on taxation and exchange control regulations for setting up businesses in India or abroad.',
    ],
  },
  {
    title: 'Employee Tax Efficiency',
    icon: Users,
    points: [
      'Reviewing and optimizing employee compensation structures for tax efficiency.',
    ],
  },
  {
    title: 'Withholding Tax Advisory',
    icon: FileText,
    points: [
      'Assistance with withholding tax compliance and securing advance rulings on international tax matters.',
    ],
  },
  {
    title: 'Tax Representation',
    icon: Gavel,
    points: [
      'Representation before tax and judicial authorities during assessments, appeals, and handling income tax search, seizure, and survey cases.',
    ],
  },
  {
    title: 'Expatriate Taxation',
    icon: Briefcase,
    points: [
      'Specialized advisory services for expatriates to ensure compliance with Indian and international tax laws.',
    ],
  },
  {
    title: 'Corporate Structuring & Transaction Advisory',
    icon: Scale,
    points: [
      'Advising on corporate restructuring and transactions to minimize tax incidence effectively.',
    ],
  },
];

const taxFaqs = [
  {
    question: 'What specific taxation services does Cloudcrest Firm offer?',
    answer: 'At Cloudcrest, we offer a wide range of tax services, including tax preparation for Corporates and Non-corporates, tax planning to minimize liabilities, and expert advice on navigating complex tax matters. Whether you\'re looking to file your taxes or need guidance on long-term tax strategies, we provide tailored solutions to meet your needs.',
  },
  {
    question: 'Can you help with international tax issues and cross-border taxation?',
    answer: 'Yes, we specialize in international tax services, offering solutions for cross-border taxation, transfer pricing, and navigating tax treaties. Whether you’re expanding your business globally or dealing with international income, we help you manage tax responsibilities across different jurisdictions.',
  },
  {
    question: 'Does Cloudcrest Provides the Tax Representation Service?',
    answer: 'Yes, Cloudcrest offers tax representation services, acting on your behalf in dealings with tax authorities. We handle communications, resolve disputes, and ensure your tax filings are accurate and compliant. Our expert team supports you in managing audits, assessments, and notices to minimize risks and penalties.',
  },
  {
    question: 'How is residential status relevant for the levy of income tax?',
    answer: 'Residential status determines the scope of an individual\'s or entity’s taxable income in India. A resident is taxed on global income, while a non-resident is only taxed on income earned within India. The status depends on the duration of stay in India during a financial year, impacting tax liabilities and exemptions.',
  },
  {
    question: 'What are the tax implications for NRIs renting out property in India?',
    answer: 'NRIs renting out property in India are subject to tax on rental income. The income is taxed under the head "Income from House Property" at applicable rates, after deductions like municipal taxes and 30% standard deduction. Additionally, NRIs may be required to pay tax at source (TDS) on the rent received, and they can claim tax relief through double taxation avoidance agreements (DTAA) if applicable.',
  },
  {
    question: 'How do you ensure compliance with changing tax laws and regulations?',
    answer: 'Our team is constantly monitoring changes in tax laws, using advanced tools and software to stay up-to-date. We also work closely with tax experts and regularly attend training to ensure that your tax filings and strategies are fully compliant with current regulations.',
  },
];

const TaxDomesticInternational = () => {
  return (
    <ServicePageLayout
      title="Tax – Domestic and International"
      subtitle="Navigating Tax Challenges with Expertise"
      description="In today's globalized economy, businesses operate in an environment of complex and evolving tax regulations. Whether you're a multinational corporation managing diverse tax rules or a domestic business looking to optimize compliance, Cloudcrest is here to simplify your tax challenges."
      secondaryDescription="Our team offers in-depth knowledge of Indian and international tax laws, providing seamless advisory and compliance solutions tailored to your needs. We provide a full spectrum of tax services covering Direct Tax, Indirect Tax, and Transfer Pricing."
      servicesTitle="Our Services Include"
      services={services}
      whyChooseTitle="Why Choose Cloudcrest?"
      whyChooseItems={[
        { text: 'Expert advisory across all taxation domains.' },
        { text: 'Practical, actionable solutions tailored to your business needs.' },
        { text: 'Regular interaction with tax authorities to stay ahead of regulatory changes.' },
        { text: 'We support multinational and Indian companies, expatriates, and resident and non-resident Indians.' },
      ]}
      whyChooseDescription="Cloudcrest is committed to helping you navigate complex tax landscapes with ease and confidence. Contact us today to learn how we can support your business with end-to-end taxation solutions."
      bottomSections={
        <FAQSection items={taxFaqs} />
      }
    />
  );
};

export default TaxDomesticInternational;
