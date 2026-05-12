import { useState } from "react";
import { motion } from "framer-motion";
import alokaImg from "../assets/workswith/Aloka Educational and Welfare Society.png";
import celzeneImg from "../assets/workswith/Celzene IT services Pvt Ltd.png";
import highOnLoveImg from "../assets/workswith/High On Love Films LLP.png";
import immitricsImg from "../assets/workswith/Immitrics Overseas Consultancy LLP.png";
import klrDigitechImg from "../assets/workswith/KLR DIGITECH PRIVATE LIMITED.png";
import oxygentaImg from "../assets/workswith/Oxygenta Pharmaceuticals Limited.png";
import pascalcaseImg from "../assets/workswith/Pascalcase Software Private Limited.png";
import prajayImg from "../assets/workswith/Prajay Megapolis Flat Owners Mutually Aided Cooperative Society.png";
import pulsebridgeImg from "../assets/workswith/Pulsebridge Health Care Pvt Ltd.png";
import sanchiImg from "../assets/workswith/Sanchi Educational and Welfare Society.png";
import towerCloudImg from "../assets/workswith/Tower Cloud Private Limited.png";
import tristarImg from "../assets/workswith/Tristar Global Academy Pvt Ltd.png";
import vasathiImg from "../assets/workswith/Vasathi Anandi.png";
import vijayaVarahiImg from "../assets/workswith/Vijaya Varahi Technologies Private Limited.png";
import vistaImg from "../assets/workswith/Vista Pharmaceuticals Limited.png";
import weiterEdgeImg from "../assets/workswith/WEITER EDGE PRIVATE LIMITED.png";
import wildblueImg from "../assets/workswith/Wildblue Digital LLP.png";
import xbatteryImg from "../assets/workswith/Xbattery Energy Private Limited.png";

const teamMembers = [
  {
    name: "Mr. Mahesh Dosa",
    credentials: "FCA(ICAI), Dip. Ind AS , B.Com",
    description:
      "Corporate Advisor | Ind AS Compliance | Financial Reporting & Valuation",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Mr-Mahesh-Dosa.png",
  },
  {
    name: "Mrs. Lavanya Nichang",
    credentials: "ACA(ICAI), B.Com",
    description:
      "Corporate Advisor, services in the field of financial planning and analysis",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Lavanya-Nichang-1.png",
  },
  {
    name: "Mr. Suneel Jagatha",
    credentials: "ACA(ICAI), Dip.IFRS(UK), B.com",
    description:
      "Services in the field of Finance Accounting, Taxation compliances and representation services",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Suneel-Jagatha.png",
  },
  {
    name: "Mr. Vikram Reddy Jakka",
    credentials: "ACA(ICAI), B.com",
    description: "Services in the field of Management and Business Consultancy",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Vikram-Reddy-Jakka.png",
  },
  {
    name: "Mr. Naresh Gaikoti",
    credentials: "MBA(Finance), B.com, CA-Intermediate",
    description:
      "Services in the field of accounting, GST Advisory and compliance services",
    photo:
      "https://cloudcrest.in/wp-content/uploads/2025/03/Naresh-Gaikoti.png",
  },
  {
    name: "Shivani Bung",
    credentials: "CS (ICSI), L.L.M Osmania University, B.com",
    description:
      "Expert in corporate governance, compliance management, and regulatory frameworks with extensive experience in SEBI regulations, company incorporations, secretarial audits, and regulatory filings.",
    photo: "https://cloudcrest.in/wp-content/uploads/2025/03/Shivani.png",
  },
];

const softwareLogos = [
  {
    name: "Tally Prime",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Tally-Prime.png",
  },
  {
    name: "QuickBooks",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Qb.png",
  },
  {
    name: "Zoho",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Zoho.png",
  },
  {
    name: "Microsoft",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Microsoft.png",
  },
  {
    name: "Xero",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Xero.png",
  },
  {
    name: "Marg ERP",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/marvg.png",
  },
  {
    name: "SAP",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Sap.png",
  },
  {
    name: "Odoo",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/odoo.png",
  },
  {
    name: "Mygate",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Mygate.png",
  },
  {
    name: "Wave",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Wave.png",
  },
  {
    name: "Adda",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/Adda.png",
  },
  {
    name: "Vyapar",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/vy.png",
  },
  {
    name: "Assetsoft",
    url: "https://cloudcrest.in/wp-content/uploads/2025/01/as.png",
  },
];

const workingWithLogos = [
  { name: "Aloka Educational and Welfare Society", url: alokaImg },
  { name: "Celzene IT services Pvt Ltd", url: celzeneImg },
  { name: "High On Love Films LLP", url: highOnLoveImg },
  { name: "Immitrics Overseas Consultancy LLP", url: immitricsImg },
  { name: "KLR DIGITECH PRIVATE LIMITED", url: klrDigitechImg },
  { name: "Oxygenta Pharmaceuticals Limited", url: oxygentaImg },
  { name: "Pascalcase Software Private Limited", url: pascalcaseImg },
  { name: "Prajay Megapolis Flat Owners", url: prajayImg },
  { name: "Pulsebridge Health Care Pvt Ltd", url: pulsebridgeImg },
  { name: "Sanchi Educational and Welfare Society", url: sanchiImg },
  { name: "Tower Cloud Private Limited", url: towerCloudImg },
  { name: "Tristar Global Academy Pvt Ltd", url: tristarImg },
  { name: "Vasathi Anandi", url: vasathiImg },
  { name: "Vijaya Varahi Technologies Private Limited", url: vijayaVarahiImg },
  { name: "Vista Pharmaceuticals Limited", url: vistaImg },
  { name: "WEITER EDGE PRIVATE LIMITED", url: weiterEdgeImg },
  { name: "Wildblue Digital LLP", url: wildblueImg },
  { name: "Xbattery Energy Private Limited", url: xbatteryImg },
];


function InfiniteSlider({
  items,
  speed = 40,
}: {
  items: { name: string; url: string }[];
  speed?: number;
}) {
  return (
    <div className="overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex items-center gap-16 w-max py-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}>
        {[...items, ...items].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 transition-transform duration-300 hover:scale-110 px-4">
            <img
              src={logo.url}
              alt={logo.name}
              className="h-14 sm:h-20 w-auto object-contain transition-all duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function TeamCard({ member }: { member: (typeof teamMembers)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {/* Photo */}
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />

      {/* Dark overlay + text — visible on hover */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-all duration-400"
        style={{
          background: hovered
            ? "rgba(10, 30, 60, 0.82)"
            : "rgba(10, 30, 60, 0)",
          opacity: hovered ? 1 : 0,
        }}>
        <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
        <p className="text-blue-300 text-sm font-medium mb-3">
          {member.credentials}
        </p>
        <p className="text-slate-200 text-xs leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
}

export const OurPeopleSection = ({ showTeam = true }: { showTeam?: boolean }) => {
  return (
    <div style={{ backgroundColor: "#e8f4fd" }}>
      {showTeam && (
        <section id="people" className="py-20 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2
                className="text-4xl font-bold mb-2"
                style={{ color: "#1a9bdc" }}>
                Our Team
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="h-0.5 w-10"
                  style={{ backgroundColor: "#1a9bdc" }}
                />
                <span className="text-slate-600 font-medium text-sm tracking-widest uppercase">
                  Members
                </span>
                <div
                  className="h-0.5 w-10"
                  style={{ backgroundColor: "#1a9bdc" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        id="software"
        className="py-20"
        style={{ backgroundColor: "#dceef9" }}>
        <div className="max-w-full mx-auto overflow-hidden">
          <div className="text-center mb-6">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ color: "#1a9bdc" }}>
              Software Expertise
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div
                className="h-0.5 w-10"
                style={{ backgroundColor: "#1a9bdc" }}
              />
              <span className="text-slate-600 font-medium text-sm tracking-widest uppercase">
                We Have
              </span>
              <div
                className="h-0.5 w-10"
                style={{ backgroundColor: "#1a9bdc" }}
              />
            </div>
          </div>

          <InfiniteSlider items={softwareLogos} speed={60} />
        </div>
      </section>

      <section
        id="working-with"
        className="py-20"
        style={{ backgroundColor: "#e8f4fd" }}>
        <div className="max-w-full mx-auto overflow-hidden">
          <div className="text-center mb-6">
            <h2
              className="text-4xl font-bold mb-2"
              style={{ color: "#1a9bdc" }}>
              We’re working With
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div
                className="h-0.5 w-10"
                style={{ backgroundColor: "#1a9bdc" }}
              />
              <span className="text-slate-600 font-medium text-sm tracking-widest uppercase">
                Our Clients
              </span>
              <div
                className="h-0.5 w-10"
                style={{ backgroundColor: "#1a9bdc" }}
              />
            </div>
          </div>

          <InfiniteSlider items={workingWithLogos} speed={80} />
        </div>
      </section>
    </div>
  );
};
