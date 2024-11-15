type Experience = {
  title: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location?: string;
  logo?: string;
  responsibilities: string[];
}

const experienceData: Experience[] = [
  {
    title: "R&D General Manager",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2020 - Jun 2024",
    duration: "4 yrs",
    location: "Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
    logo: "/portfolio/images/companies/sapura-thales.jpg",
    responsibilities: [
      "Post-MCO - Ensuring smooth ramp-up of RND activities after company re-open, and executing what was defined in the Business Continuation Plan (BCP)",
      "Adapting to the new normal and familiarize with remote working environments - driving businesses to automate as quickly as possible to ensure business continuity",
      "Motivate the team to maximize the use of 'brain' and focus on the cost-effective solution",
      "Managing supply chain, affected by the pandemic",
      "Maintaining zero '0' NCR for ISO audit"
    ]
  },
  {
    title: "R&D Head Of Department",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2014 - 2019",
    duration: "5 yrs",
    logo: "/portfolio/images/companies/sapura-thales.jpg",
    responsibilities: [
      "Completed product development lifecycle (from design to manufacturing) for TRC5200, 1st tactical radio developed by 100% local engineers",
      "Managing schedule, budget and risks for sulf-funded projects and customer-funded program",
      "Defining product development roadmap strategic plan for the next 10 years",
      "Cascade down company's KPI to all staffs",
      "Continue exploring new business opportunities from overseas (Indonesia, Vietnam, Morocco, Timor Leste)",
      "Build a win-to-win collaboration with local suppliers with the intention to improve product quality and values",
      "Product marketing to the new local customers (POLIS, RMN)"
    ]
  },
  {
    title: "System Integration Manager",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2010 - 2013",
    duration: "3 yrs",
    logo: "/portfolio/images/companies/sapura-thales.jpg",
    responsibilities: [
      "Completed the integration of Future Soldier System (FSS) under NCO Phase 1A Program",
      "Delivery, Deployment and User Acceptance of FSS within schedule and budget",
      "Exploring international market (product presentation, proposal, product evaluation and field trial)",
      "Technical solution to enhance Army Communication Program (ACP) capabilities under RMK 10 plan",
      "Technical solution for Navy Strategic Communication (for submarine)",
      "Technical solution to improve Navy legacy radios",
      "MIFV Comm-fit System Integration",
      "Communication solution for DEFTECH ADNAN (ACV 300)",
      "Product development (self-funded, program funded as well as subcontracting)",
      "Communication solution for 6x6 Armored Vehicle Communications Program",
      "Communication solution for SGPV Integrated Communication System (ICS) program",
      "Communication solution for the refurbishment of the SCORPION Armored Vehicle Program",
      "EMC Test for BUMAR Armored Vehicle Program",
      "Communication readiness site survey for PT91 PENDEKAR Main Battle Tank (MBT) Program",
      "Technical proposal for Army Tactical Electronic Warfare (EW) System",
      "Technical proposal for Malaysia Maritime Enforcement Agency (MMEA)"
    ]
  },
  {
    title: "Technical Manager",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2008 - 2009",
    duration: "1 yr",
    logo: "/portfolio/images/companies/sapura-thales.jpg",
    responsibilities: [
      "Validation and verification of CNR10 main equipment and accessories. Fully complied with user expectations",
      "Communication Solution for AV8 Gempita",
      "Establish marketing materials including product brochures",
      "Establish Product Policy Roadmap",
      "Collaboration with main suppliers to customize critical product (e.g Rugged Laptop) to meet user requirements",
      "Transfer for Technology (TOT) strategic plan"
    ]
  },
  {
    title: "Senior Design Engineer (System Engineer)",
    company: "Sapura Thales Electronics Sdn Bhd",
    type: "Full-time",
    period: "2003 - 2007",
    duration: "4 yrs",
    logo: "/portfolio/images/companies/sapura-thales.jpg",
    responsibilities: [
      "Validation and verification of CNR9 main equipment and accessories. Fully complied with user expectations",
      "Multi Channel Radio System (MCRS) product evaluation with customers"
    ]
  },
  {
    title: "Design Engineer",
    company: "Sapura Thomson Radiocommunication Sdn. Bhd",
    type: "Full-time",
    period: "Aug 1997 - Dec 2002",
    duration: "5 yrs 5 mos",
    logo: "/portfolio/images/companies/sapura-thomson.jpg",
    responsibilities: [
      "Completed the development of 1st generation of VHF tactical handheld TRC5100"
    ]
  },
  {
    title: "Preventive Maintenance Technician",
    company: "Harris Corporation",
    type: "Full-time",
    period: "1994 - Dec 1995",
    duration: "2 yrs",
    logo: "/portfolio/images/companies/harris.jpg",
    responsibilities: [
      "Semiconductor Division"
    ]
  }
];

module.exports = experienceData; 