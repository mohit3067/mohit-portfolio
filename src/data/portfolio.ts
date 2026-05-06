import type { Project, Experience, Skill } from "@/types/portfolio";

import fond from "@/assets/apps/fond.png";
import teektask from "@/assets/apps/teektask.png";
import floment from "@/assets/apps/floment.png";
import khelnet from "@/assets/apps/khelnet.png";
import caard from "@/assets/apps/caard.png";
import smallofficer from "@/assets/apps/smallofficer.png";
import smartmartstore from "@/assets/apps/smartmartstore.png";
import smartmartdelivery from "@/assets/apps/smartmartdelivery.png";
import smartmartuser from "@/assets/apps/smartmartuser.png";
import barcodescanner from "@/assets/apps/barcodescanner.png";
import hoora from "@/assets/apps/hoora.png";
import hoorahero from "@/assets/apps/hoorahero.png";
import joii from "@/assets/apps/joii.png";

export const experiences: Experience[] = [
  {
    company: "Hoora — Vehicle 360",
    role: "Mobile Engineer",
    period: "Jan 2026 — Present",
    location: "Nagpur, Maharashtra",
    highlight: "E-store + delivery ecosystem",
    bullets: [
      "Designed and shipped a complete in-app e-store module — browse services/products, place orders and manage transactions.",
      "Owned and maintained the Hoora Hero Delivery Partner app: order management, status updates, partner workflows.",
      "Customized Zoho SalesIQ — built intelligent chatbot flows for engagement, lead capture and automated support.",
      "Integrated Zoho Desk for ticket management, issue tracking and service workflow automation.",
      "Refactored legacy code to improve maintainability, performance and overall app quality.",
    ],
  },
  {
    company: "TST Technology",
    role: "Junior Flutter Developer",
    period: "Aug 2024 — Jan 2026",
    location: "Ahmedabad, Gujarat",
    highlight: "Star Performer of the Quarter",
    bullets: [
      "Contributed to a pet-care IoT ecosystem with activity tracking, feeding and health monitoring.",
      "Built real-time tracking for walking, sleeping and eating activities.",
      "Built an NFC-based smart connection app for tap-to-share contact and content (Caard).",
      "Worked on a social/productivity platform — stories, highlights, rich-text editor and chatbot with speech-to-text and history.",
      "Conducted demos and collaborated with cross-functional teams to deliver releases on schedule.",
    ],
  },
  {
    company: "Stackapp Infotech",
    role: "Junior Flutter Developer",
    period: "Aug 2023 — Aug 2024",
    location: "Surat, Gujarat",
    highlight: "Smart Mart suite (4 apps)",
    bullets: [
      "Built the Smart Mart e-commerce ecosystem — User, Store, Delivery and Admin apps.",
      "Implemented product listing, order flow and real-time updates across all four apps.",
      "Integrated Razorpay wallet for secure in-app payments.",
      "Developed a menstrual health tracking app with offline-first architecture using SQLite.",
      "Built API integrations for a social/news platform with chatbot features and a metro service UI.",
      "Contributed to an FSSAI government audit management system.",
    ],
  },
  {
    company: "Flutter Developer (Internship)",
    role: "Remote",
    period: "Jul 2023 — Aug 2023",
    bullets: [
      "Built foundational Flutter applications and gained hands-on mobile development experience.",
    ],
  },
];

export const skills: Skill[] = [
  // Mobile (core expertise)
  { name: "Flutter", category: "Mobile", icon: "flutter", color: "#54C5F8" },
  { name: "Dart", category: "Mobile", icon: "dart", color: "#0175C2" },
  { name: "Android", category: "Mobile", icon: "android", color: "#3DDC84" },
  { name: "iOS", category: "Mobile", icon: "ios", color: "#FFFFFF" },
  { name: "GetX", category: "Mobile" },
  { name: "BLoC", category: "Mobile" },
  { name: "Provider", category: "Mobile" },
  { name: "Android Studio", category: "Mobile", icon: "androidstudio", color: "#3DDC84" },
  { name: "Xcode", category: "Mobile", icon: "xcode", color: "#147EFB" },
  { name: "Swift", category: "Mobile", icon: "swift", color: "#F05138" },
  { name: "NFC / BLE", category: "Mobile" },

  // Languages
  { name: "Dart", category: "Languages", icon: "dart", color: "#0175C2" },
  { name: "Java", category: "Languages", icon: "openjdk", color: "#ED8B00" },
  { name: "Python", category: "Languages", icon: "python", color: "#3776AB" },
  { name: "JavaScript", category: "Languages", icon: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", category: "Languages", icon: "typescript", color: "#3178C6" },
  { name: "C", category: "Languages", icon: "c", color: "#A8B9CC" },
  { name: "Go", category: "Languages", icon: "go", color: "#00ADD8" },
  { name: "SQL", category: "Languages", icon: "mysql", color: "#4479A1" },
  { name: "HTML/CSS", category: "Languages", icon: "html5", color: "#E34F26" },

  // Backend
  { name: "Firebase", category: "Backend", icon: "firebase", color: "#FFCA28" },
  { name: "Supabase", category: "Backend", icon: "supabase", color: "#3ECF8E" },
  { name: "Node.js", category: "Backend", icon: "nodedotjs", color: "#5FA04E" },
  { name: "REST APIs", category: "Backend" },
  { name: "WebRTC", category: "Backend", icon: "webrtc", color: "#333333" },

  // Database
  { name: "Firestore", category: "Database", icon: "firebase", color: "#FFCA28" },
  { name: "MySQL", category: "Database", icon: "mysql", color: "#4479A1" },
  { name: "MongoDB", category: "Database", icon: "mongodb", color: "#47A248" },
  { name: "SQLite (sqflite)", category: "Database", icon: "sqlite", color: "#003B57" },

  // Web
  { name: "Next.js", category: "Web", icon: "nextdotjs", color: "#FFFFFF" },
  { name: "React", category: "Web", icon: "react", color: "#61DAFB" },
  { name: "Tailwind", category: "Web", icon: "tailwindcss", color: "#06B6D4" },

  // Integrations
  { name: "Zoho SalesIQ", category: "Integrations", icon: "zoho", color: "#E42527" },
  { name: "Zoho Desk", category: "Integrations", icon: "zoho", color: "#E42527" },
  { name: "Razorpay", category: "Integrations", icon: "razorpay", color: "#0C2451" },
  { name: "Arduino", category: "Integrations", icon: "arduino", color: "#00979D" },
  { name: "Speech-to-Text", category: "Integrations" },

  // Tools
  { name: "Git", category: "Tools", icon: "git", color: "#F05032" },
  { name: "GitHub", category: "Tools", icon: "github", color: "#FFFFFF" },
  { name: "VS Code", category: "Tools", icon: "vscodium", color: "#007ACC" },
  { name: "Jira", category: "Tools", icon: "jira", color: "#0052CC" },
  { name: "Postman", category: "Tools", icon: "postman", color: "#FF6C37" },
  { name: "Figma", category: "Tools", icon: "figma", color: "#F24E1E" },
];

export const fallbackProjects: Project[] = [
  {
    id: "hoora",
    title: "Hoora — Vehicle 360",
    description:
      "Full vehicle-services e-commerce app: in-app e-store, live SalesIQ chatbot, Zoho Desk ticketing and end-to-end order flow.",
    techStack: ["Flutter", "BLoC", "REST APIs", "Zoho SalesIQ", "Zoho Desk"],
    iconSrc: hoora,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hoora.hoora_customer",
    appStoreUrl: "https://apps.apple.com/in/app/hoora-car-wash-bike-care/id1622615009",
    platform: "both",
    category: "Marketplace",
    featured: true,
    priority: 1,
  },
  {
    id: "hoora-hero",
    title: "Hoora Hero — Delivery Partner",
    description:
      "Owned end-to-end: order management, status updates, earnings, and partner workflows for the Hoora delivery fleet.",
    techStack: ["Flutter", "BLoC", "Firebase", "REST APIs"],
    iconSrc: hoorahero,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hoora.hoora_partner",
    appStoreUrl: "https://apps.apple.com/in/app/hoora-hero-partner-app/id6503040568",
    platform: "both",
    category: "Logistics & Delivery",
    featured: true,
    priority: 2,
  },
  {
    id: "caard",
    title: "Caard — NFC Smart Connect",
    description:
      "Tap-to-share digital identity app powered by NFC. Custom profile pages, multi-link sharing and analytics.",
    techStack: ["Flutter", "GetX", "NFC", "REST APIs"],
    iconSrc: caard,
    playStoreUrl: "https://play.google.com/store/apps/details?id=net.caard.app",
    appStoreUrl: "https://apps.apple.com/in/app/caard-smart-networking-card/id6740204019",
    platform: "both",
    category: "Social Platforms",
    featured: true,
    priority: 3,
  },
  {
    id: "teektask",
    title: "Teek Task",
    description:
      "Task and productivity app with reminders, scheduling and clean reactive UI built in Flutter.",
    techStack: ["Flutter", "GetX", "SQLite"],
    iconSrc: teektask,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.app.teektask",
    appStoreUrl: "https://apps.apple.com/in/app/teektask/id6578441979",
    platform: "both",
    category: "Gig Economy",
    priority: 4,
  },
  {
    id: "floment",
    title: "Floment",
    description:
      "Modern social media experience where users engage by sharing daily life updates and work-related moments.",
    techStack: ["Flutter", "GetX", "Firebase", "REST APIs"],
    iconSrc: floment,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.incentiai.app",
    appStoreUrl: "https://apps.apple.com/in/app/floment/id6742092343",
    platform: "both",
    category: "Social Platforms",
    priority: 5,
  },
  {
    id: "fond",
    title: "Fond",
    description:
      "Pet-care solution with activity tracking, daily routines, health insights, and medical report management — a complete health section for pets.",
    techStack: ["Flutter", "GetX", "Firebase", "Speech-to-Text"],
    iconSrc: fond,
    playStoreUrl: "https://play.google.com/store/apps/details?id=co.thefond.fond",
    platform: "playstore",
    category: "Health Tech",
    priority: 6,
  },
  {
    id: "joii",
    title: "Joii — Period Evaluation",
    description:
      "Women's menstrual cycle tracking and evaluation app with health insights, reminders and personalised reports.",
    techStack: ["Flutter", "BLoC", "REST APIs"],
    iconSrc: joii,
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.joii.app&pcampaignid=web_share",
    appStoreUrl: "https://apps.apple.com/ie/app/joii-period-evaluation/id6444564211",
    platform: "both",
    category: "Health Tech",
    priority: 7,
  },
  {
    id: "khelnet",
    title: "Khelnet",
    description:
      "Sports / gaming community app with real-time updates, profiles and tournament flow.",
    techStack: ["Flutter", "BLoC", "Firebase", "REST APIs"],
    iconSrc: khelnet,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.khelnet",
    platform: "playstore",
    category: "Sports",
    priority: 9,
  },
  {
    id: "small-officer",
    title: "Small Officer",
    description:
      "Co-working space management system for rentals — users can browse and book offices for work, with streamlined space and booking management.",
    techStack: ["Flutter", "GetX", "Firebase", "REST APIs"],
    iconSrc: smallofficer,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.small_officer.small_officer",
    platform: "playstore",
    category: "SaaS / B2B",
    priority: 10,
  },
  {
    id: "smart-mart-user",
    title: "Smart Mart — User",
    description:
      "Customer app of the Smart Mart suite. Browse, cart, Razorpay wallet payments and real-time order tracking.",
    techStack: ["Flutter", "GetX", "Firebase", "Razorpay"],
    iconSrc: smartmartuser,
    appStoreUrl: "https://apps.apple.com/in/app/smart-mart-user/id6502432008",
    platform: "appstore",
    category: "Marketplace",
    priority: 11,
  },
  {
    id: "smart-mart-store",
    title: "Smart Mart — Store",
    description:
      "Merchant app — inventory, order acceptance, fulfilment and live store management.",
    techStack: ["Flutter", "GetX", "Firebase", "REST APIs"],
    iconSrc: smartmartstore,
    appStoreUrl: "https://apps.apple.com/in/app/smart-mart-store/id6502432210",
    platform: "appstore",
    category: "Marketplace",
    priority: 12,
  },
  {
    id: "smart-mart-delivery",
    title: "Smart Mart — Delivery",
    description:
      "Delivery partner app with live order assignment, route updates and status broadcasting.",
    techStack: ["Flutter", "GetX", "Firebase", "Maps"],
    iconSrc: smartmartdelivery,
    appStoreUrl: "https://apps.apple.com/in/app/smart-mart-delivery/id6502431272",
    platform: "appstore",
    category: "Logistics & Delivery",
    priority: 13,
  }
];
