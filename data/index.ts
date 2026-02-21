export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize clean architecture and scalable backend systems",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-cover object-center",
    titleClassName: "justify-end",
    img: "/my-desk.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with remote collaboration across time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Backend engineer with a passion for building production-grade systems.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently expanding into Go (Golang) for high-performance services & Rust for Blockchain technology",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const currentProjects = [
  {
    id: 1,
    title: "Lost & Found Portal",
    des: "Full-stack web app built for Thapar Institute (TIET). AI image recognition via OpenAI CLIP (ViT-B/32), multi-signal matching engine (image + text + GPS + time), JWT auth, interactive maps, and admin dashboard. Live at lostnfound-thapar.vercel.app",
    imgs: ["/lostnfound-preview.svg"],
    iconLists: ["/re.svg", "/tail.svg", "/openai.svg", "/git.svg", "/next.svg"],
    link: "https://github.com/Hardik-droid",
    status: "In Progress",
  },
  {
    id: 3,
    title: "SEO Overhaul – ABCDdrivingschool.in (Canada)",
    des: "Raised site SEO health from 32% to 80%+. Rebuilt sitemap (23 → 9 quality URLs), fixed canonical coverage to 100%, blocked sensitive paths via robots.txt, added dynamic meta/title/OG tags, NOINDEX on checkout pages, and eliminated duplicate content via .htaccess redirects.",
    imgs: ["/seo-preview.svg"],
    iconLists: ["/git.svg", "/next.svg"],
    link: "https://abcddrivingschoolinc.com",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Cignal – WebRTC Telemedicine Signaling Platform",
    des: "Enterprise-grade P2P video calling infrastructure for healthcare (MyHealth). Features real-time WebRTC signaling via Socket.IO, SOS emergency with countdown, TURN/STUN NAT traversal, room-based peer management, HTTP/2 (SPDY), and multi-language support (English, Hindi, Punjabi).",
    imgs: ["/cignal-preview.svg"],
    iconLists: ["/re.svg", "/next.svg", "/git.svg", "/stream.svg"],
    link: "https://github.com/Hardik-droid",
    status: "In Progress",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mag Charger – EV MagSafe Wireless Charging & BML Hackathon 1st Place Win",
    des: "12th Grade Innovation Project — BML Hackathon Winner. Built a magnetic wireless EV charging system using custom coil design and embedded electronics. Demonstrated wireless power transfer for EVs using MagSafe-inspired alignment tech. Presented to a panel of judges including professors and industry experts. Team of 4 from BCM College, Ludhiana.",
    imgs: ["/bml-win.png", "/bml-hackathon.png", "/bcm-robot.png"],
    iconLists: [],
    link: "",
    note: "Researched & built under school professor guidance. Intellectual property of BCM School, Ludhiana.",
  },
  {
    id: 3,
    title: "Speed Guard Pro – Arduino Speed Detector",
    des: "12th Grade Hardware Project. Arduino-powered speed detection system using ultrasonic sensors. Displays real-time speed on LCD screen and triggers buzzer alert when speed exceeds the set limit. Built for road safety awareness.",
    imgs: ["/speed-guard.png"],
    iconLists: [],
    link: "",
    note: "Researched & built under school professor guidance. Intellectual property of BCM School, Ludhiana.",
  },
];

export const testimonials = [
  {
    quote:
      "Hardik demonstrated exceptional backend engineering skills during his internship. His ability to diagnose complex server deployment issues and implement technical SEO fixes without disrupting the frontend structure was impressive. A truly reliable engineer.",
    name: "ABCDdrivingschool.in",
    title: "Backend & SEO Intern — Canadian Company",
  },
  {
    quote:
      "Hardik's FastAPI implementations at GZoneSphere have been rock solid. He consistently delivers scalable API architecture and is quickly picking up Golang to broaden his backend capabilities. A great asset to any engineering team.",
    name: "GZoneSphere",
    title: "Full-Time Backend Developer",
  },
  {
    quote:
      "The Mag Charger project Hardik led was a highlight of our innovation competition. His ability to blend hardware and software thinking to solve a real EV infrastructure problem showed maturity beyond his years.",
    name: "BCM College",
    title: "Innovation Competition — Ludhiana",
  },
];

export const companies = [
  {
    id: 1,
    img: "/gzonesphere.svg",
  },
  {
    id: 2,
    img: "/next.svg",
  },
  {
    id: 3,
    img: "/git.svg",
  },
  {
    id: 4,
    img: "/openai.svg",
  },
  {
    id: 5,
    img: "/venture-lab.png",
  },
  {
    id: 6,
    img: "/thapar.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Time Backend Developer – GZoneSphere",
    desc: "Current Role. Building production backend systems using FastAPI. Designing scalable API architecture and improving service performance. Learning and implementing Go (Golang) for high-performance backend services.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend & SEO Systems Intern – ABCDdrivingschool.in (Canada)",
    desc: "Ongoing. Implementing technical SEO fixes without altering frontend structure. Refactoring backend meta handling and canonical URL management. Diagnosing server deployment issues and stabilizing the hosting environment. Supporting PostgreSQL troubleshooting and backend optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Hardware Innovator – BML Hackathon Winner, BCM College",
    desc: "12th Grade: Built award-winning hardware projects — Mag Charger (MagSafe-inspired wireless EV charging), Speed Guard Pro (ultrasonic speed detection), and BCM Autonomous Robot Car. Won 1st place at BML Hackathon, Ludhiana.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open Source & Self-Driven Projects",
    desc: "Actively building and maintaining projects on GitHub (github.com/Hardik-droid). Exploring Rust for blockchain fundamentals. Continuously improving skills in CI/CD workflows, Linux server management, and automation.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/hub.svg",
    link: "https://github.com/Hardik-droid",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hardik-jain-a6748a358",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/hardik.jain87?igsh=MWNxZXFkYTF2cWhlMQ==",
  },
];
