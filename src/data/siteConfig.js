// ============================================================================
// SITE CONFIGURATION
// ----------------------------------------------------------------------------
// This is the ONLY file you need to edit to update your name, brand, links,
// pricing and contact details across the entire website.
// Every component below reads from this file — nothing is hardcoded elsewhere.
// ============================================================================

export const siteConfig = {
  // ---- Brand -----------------------------------------------------------
  brandName: 'Nova Studio',
  brandShort: 'Nova', // used in tight spaces e.g. mobile logo
  developerName: 'Alex', // TODO: replace with your real first name
  tagline: 'Web Developer',

  // ---- Availability badge (hero) ---------------------------------------
  availabilityBadge: 'WEB DEVELOPER • AVAILABLE FOR PROJECTS',

  // ---- Contact -----------------------------------------------------------
  email: 'reformedissoul@gmail.com',
  whatsappNumber: '919728880585',
  whatsappDisplay: '+91 9728880585',

  // ---- Social links --------------------------------------------------------
  socials: {
    github: 'https://github.com/yourusername', // TODO: replace
    linkedin: 'https://linkedin.com/in/yourusername', // TODO: replace
    pinterest: 'https://pinterest.com/yourusername', // TODO: replace
  },

  // ---- Footer -------------------------------------------------------------
  footerDescription:
    'I design and build modern, fast and reliable websites and web applications for businesses, creators and startups.',
  copyrightYear: '2026',
}

// ---- Navigation -------------------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

// ---- Pricing plans ------------------------------------------------------------
// Edit price fields freely — leave as null to show "Custom Quote" instead of a number.
export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For simple websites and landing pages.',
    price: null, // e.g. set to '$600' to display a starting price
    priceNote: 'starting from',
    features: [
      'Single or multi-section landing page',
      'Mobile-responsive layout',
      'Contact form integration',
      'Basic on-page SEO setup',
      '1 round of revisions',
    ],
    highlighted: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For businesses that need a complete modern website.',
    price: null,
    priceNote: 'starting from',
    features: [
      'Multi-page custom website',
      'React-based, fully responsive build',
      'CMS-friendly content structure',
      'Performance optimization',
      'SEO & Open Graph metadata',
      '2 rounds of revisions',
    ],
    highlighted: true,
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'For custom web applications and advanced requirements.',
    price: null,
    priceNote: null,
    features: [
      'Full-stack web application',
      'API & database integration',
      'Custom dashboard / admin panel',
      'Authentication & user accounts',
      'Deployment & maintenance support',
      'Ongoing collaboration',
    ],
    highlighted: false,
  },
]

// ---- Contact form select options ------------------------------------------
export const projectTypeOptions = [
  'Business Website',
  'Portfolio Website',
  'Landing Page',
  'React Web App',
  'Full-Stack Application',
  'Website Redesign',
  'Bug Fix / Optimization',
  'Other',
]

export const budgetRangeOptions = [
  'Under $500',
  '$500 – $1,500',
  '$1,500 – $3,000',
  '$3,000 – $6,000',
  '$6,000+',
  'Not sure yet',
]
