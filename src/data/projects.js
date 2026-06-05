/**
 * Case studies. Keys are URL slugs (`/projects/[slug]`).
 */

const aldwarkManorGallery = [
  { src: "/images/aldwark-manor/IMG_4691.JPG", alt: "Aldwark Manor Hotel: completed shading installation" },
  { src: "/images/aldwark-manor/IMG_4690.JPG", alt: "Aldwark Manor Hotel: terrace and structure overview" },
  { src: "/images/aldwark-manor/IMG_4368.JPG", alt: "Aldwark Manor Hotel: framework and roof detail" },
  { src: "/images/aldwark-manor/IMG_4367.JPG", alt: "Aldwark Manor Hotel: installation progress" },
  { src: "/images/aldwark-manor/IMG_4352.JPG", alt: "Aldwark Manor Hotel: elevation and fixing detail" },
  { src: "/images/aldwark-manor/IMG_4353.JPG", alt: "Aldwark Manor Hotel: outdoor guest area" },
  { src: "/images/aldwark-manor/IMG_4374.JPG", alt: "Aldwark Manor Hotel: louvre and gutter detail" },
  { src: "/images/aldwark-manor/IMG_4376.JPG", alt: "Aldwark Manor Hotel: structural connection" },
  { src: "/images/aldwark-manor/IMG_4377.JPG", alt: "Aldwark Manor Hotel: roof profile" },
  { src: "/images/aldwark-manor/IMG_4379.JPG", alt: "Aldwark Manor Hotel: corner and drainage" },
  { src: "/images/aldwark-manor/IMG_4381.JPG", alt: "Aldwark Manor Hotel: completed roof line" },
  { src: "/images/aldwark-manor/20200826_133153308_iOS.jpg", alt: "Aldwark Manor Hotel: site survey context" },
  { src: "/images/aldwark-manor/20200826_133158692_iOS.jpg", alt: "Aldwark Manor Hotel: building context" },
  { src: "/images/aldwark-manor/20200826_133214137_iOS.jpg", alt: "Aldwark Manor Hotel: terrace before completion" },
  { src: "/images/aldwark-manor/20200826_133220741_iOS.jpg", alt: "Aldwark Manor Hotel: works area" },
  { src: "/images/aldwark-manor/20200826_133319575_iOS.jpg", alt: "Aldwark Manor Hotel: installation sequence" },
  { src: "/images/aldwark-manor/20200826_133321767_iOS.jpg", alt: "Aldwark Manor Hotel: detail during install" },
  { src: "/images/aldwark-manor/20200924_123407976_iOS.jpg", alt: "Aldwark Manor Hotel: progress photography" },
  { src: "/images/aldwark-manor/20200924_123413948_iOS.jpg", alt: "Aldwark Manor Hotel: on-site works" },
  { src: "/images/aldwark-manor/20201030_143433963_iOS.jpg", alt: "Aldwark Manor Hotel: nearing completion" },
  { src: "/images/aldwark-manor/20201030_143449809_iOS.jpg", alt: "Aldwark Manor Hotel: exterior finish" },
  { src: "/images/aldwark-manor/20201030_143503003_iOS.jpg", alt: "Aldwark Manor Hotel: guest-facing elevation" },
  { src: "/images/aldwark-manor/20201030_143521013_iOS.jpg", alt: "Aldwark Manor Hotel: completed scheme" },
  { src: "/images/aldwark-manor/20201030_143524575_iOS.jpg", alt: "Aldwark Manor Hotel: final handover view" },
];

const projects = {
  "aldwark-manor-hotel": {
    slug: "aldwark-manor-hotel",
    title: "Aldwark Manor Hotel",
    tagline: "Hospitality terrace cover, engineered for guests, weather and operations",
    location: "Aldwark, North Yorkshire",
    year: "2024",
    category: "Hospitality",
    heroImage: "/images/aldwark-manor/20201030_143449809_iOS.jpg",
    heroAlt: "Aldwark Manor Hotel: exterior finish",
    overviewImage: "/images/aldwark-manor/20200826_133158692_iOS.jpg",
    overviewAlt: "Aldwark Manor Hotel: building context",
    summary:
      "Aldwark Manor needed a dependable outdoor cover for a high-use hospitality terrace: reliable in wind and rain, discreet when open, and finished to the standard guests expect from a luxury country hotel. We surveyed, specified and installed the system around live operations with minimal disruption to guests and events.",
    story: [
      "Coordination with hotel management was central. Access windows, deliveries and noise had to align with service patterns. Our team staged work to keep the terrace usable where possible and communicated daily progress with the facilities lead.",
      "The installation prioritises clean lines, robust weather performance and straightforward operation for staff. Handover included training, maintenance guidance and a clear point of contact for aftercare.",
    ],
    gallery: aldwarkManorGallery,
    usps: [
      {
        title: "Hospitality-first programme",
        text: "Phased access, tidy sites and clear communication so guest experience and events stayed front of mind throughout.",
      },
      {
        title: "Engineered for exposure",
        text: "Specification and fixings suited to open-country wind and rain, with drainage and detailing resolved at survey stage.",
      },
      {
        title: "Luxury-level finish",
        text: "Profiles, colours and junctions chosen to sit quietly with the manor’s architecture and outdoor furniture scheme.",
      },
      {
        title: "Ongoing support",
        text: "Staff training plus a sensible maintenance rhythm so the system stays reliable across seasons and busy weekends.",
      },
    ],
  },
};

export function getProjectSlugs() {
  return Object.keys(projects);
}

export function getProject(slug) {
  return projects[slug] ?? null;
}

export function getAllProjects() {
  return Object.values(projects);
}
