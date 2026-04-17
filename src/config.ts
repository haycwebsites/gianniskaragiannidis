// =============================================================================
// Site Template Configuration
// =============================================================================
// All site content is configured here. Components render nothing when their
// primary config fields are empty strings or empty arrays.
//
// STRUCTURE RULE: All interfaces must come first, then all export consts.
// This is required for the pull-config script to work correctly.
// =============================================================================

import { homePageDefaultConfig } from './home-page-defaults.js';
import { aboutPageDefaultConfig } from './about-page-defaults.js';
import { contactPageDefaultConfig } from './contact-page-defaults.js';

export type {
  HomeBlogPost,
  HomeConsultationServiceOption,
  HomeHeroSlide,
  HomePageConfig,
  HomeProjectSlide,
  HomeServiceCard,
  HomeSidebarSocial,
  HomeWorkingStep,
} from './home-page-defaults.js';

export type { AboutPageConfig, AboutPageExperienceItem } from './about-page-defaults.js';

export type { ContactPageConfig } from './contact-page-defaults.js';

// =============================================================================
// INTERFACES
// =============================================================================

export interface LocaleString {
  el: string;
  en: string;
}

export interface SiteConfig {
  title: LocaleString;
  description: LocaleString;
  language: string;
  keywords: LocaleString;
  ogImage: string;
  canonical: string;
  siteId: string;
  apiUrl: string;
}

export interface DigitalProduct {
  id: string;
  type: 'course';
  title: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  price: string;
  language: string;
  estimatedDurationMinutes?: number;
  chapters?: {
    id: string;
    title: string;
    lessons: { id: string; title: string }[];
  }[];
}

export interface DigitalProductsConfig {
  enabled: boolean;
  lastSyncedAt?: string;
  products: DigitalProduct[];
}

export interface NavigationLinkEntry {
  label: LocaleString;
  href: string;
  showInMobile: boolean;
}

export interface NavigationConfig {
  logoSrc: string;
  logoAlt: LocaleString;
  homeHref: string;
  mobileMenuAriaLabel: LocaleString;
  callUsCaption: LocaleString;
  phoneDisplay: LocaleString;
  phoneTel: string;
  links: NavigationLinkEntry[];
}

export interface FooterSimpleLink {
  label: LocaleString;
  href: string;
}

export interface FooterSocialLink {
  href: string;
  network: 'instagram' | 'facebook' | 'tiktok' | 'youtube';
  label: LocaleString;
}

export interface FooterConfig {
  tagline: LocaleString;
  newsletterPlaceholder: LocaleString;
  newsletterSubmit: LocaleString;
  newsletterSubmitting: LocaleString;
  newsletterSuccess: LocaleString;
  newsletterError: LocaleString;
  exploreTitle: LocaleString;
  exploreLinks: FooterSimpleLink[];
  contentTitle: LocaleString;
  contentLinks: FooterSimpleLink[];
  questionsTitle: LocaleString;
  quoteTitle: LocaleString;
  quotePhoneDisplay: LocaleString;
  quotePhoneTel: string;
  emailTitle: LocaleString;
  emailAddress: string;
  copyrightReserved: LocaleString;
  madeByLead: LocaleString;
  madeByBrand: LocaleString;
  madeByHref: string;
  madeByTrail: LocaleString;
  privacyLink: FooterSimpleLink;
  socials: FooterSocialLink[];
}

// =============================================================================
// CONSTANTS
// =============================================================================

export const siteConfig: SiteConfig = {
  title: { el: '', en: '' },
  description: { el: '', en: '' },
  language: '',
  keywords: { el: '', en: '' },
  ogImage: '',
  canonical: '',
  siteId: '',
  apiUrl: '',
};

export const digitalProductsConfig: DigitalProductsConfig = {
  enabled: false,
  products: [],
};

export const navigationConfig: NavigationConfig = {
  logoSrc:
    'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/lo7i5qqeuq7yzzb46ykr-removebg-preview-e1768946067961.png',
  logoAlt: { el: 'λογότυπο', en: 'Logo' },
  homeHref: '/',
  mobileMenuAriaLabel: {
    el: 'Εναλλαγή πλοήγησης',
    en: 'Toggle navigation',
  },
  callUsCaption: { el: 'Καλέστε μας', en: 'Call us' },
  phoneDisplay: { el: '+30 694 745 2681', en: '+30 694 745 2681' },
  phoneTel: '+306947452681',
  links: [
    {
      label: { el: 'Αρχική', en: 'Home' },
      href: '/',
      showInMobile: true,
    },
    {
      label: { el: 'Υπηρεσίες', en: 'Services' },
      href: '/#services',
      showInMobile: true,
    },
    {
      label: { el: 'Σχετικά', en: 'About' },
      href: '/about',
      showInMobile: true,
    },
    {
      label: { el: 'Ψηφιακά προϊόντα', en: 'Digital products' },
      href: '/digital-products-services',
      showInMobile: false,
    },
    {
      label: { el: 'Συνερδίες', en: 'Conferences' },
      href: '/synedries/',
      showInMobile: false,
    },
    {
      label: { el: 'Online course', en: 'Online course' },
      href: 'https://giannis-karagiannidis.gr/online-course',
      showInMobile: false,
    },
    {
      label: { el: 'Άρθρα', en: 'Articles' },
      href: 'https://giannis-karagiannidis.gr/category/Articles/',
      showInMobile: true,
    },
    {
      label: { el: 'Επικοινωνία', en: 'Contact' },
      href: '/contact',
      showInMobile: true,
    },
  ],
};

export const footerConfig: FooterConfig = {
  tagline: {
    el:
      'Σε βοηθάμε να κατανοήσεις τον εαυτό σου, να διαχειριστείς τα συναισθήματά σου και να εξελιχθείς με διαύγεια και δύναμη.',
    en:
      'We help you understand yourself, manage your emotions, and grow with clarity and strength.',
  },
  newsletterPlaceholder: { el: 'Email Address', en: 'Email Address' },
  newsletterSubmit: { el: 'Εγγραφή', en: 'Subscribe' },
  newsletterSubmitting: { el: 'Αποστολή...', en: 'Sending...' },
  newsletterSuccess: {
    el: 'Η εγγραφή ολοκληρώθηκε.',
    en: 'You are subscribed.',
  },
  newsletterError: {
    el: 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.',
    en: 'Something went wrong. Please try again.',
  },
  exploreTitle: { el: 'ΕΞΕΡΕΥΝΗΣΕ', en: 'EXPLORE' },
  exploreLinks: [
    {
      label: { el: 'Αρχική', en: 'Home' },
      href: '/',
    },
    {
      label: { el: 'Σχετικά με εμάς', en: 'About us' },
      href: '/about',
    },
    {
      label: { el: 'Άρθρα', en: 'Articles' },
      href: 'https://giannis-karagiannidis.gr/category/Articles/',
    },
    {
      label: { el: 'Επικοινωνία', en: 'Contact' },
      href: '/contact',
    },
  ],
  contentTitle: { el: 'ΠΕΡΙΕΧΟΜΕΝΟ', en: 'CONTENT' },
  contentLinks: [
    {
      label: { el: 'Ατομικές Συνεδρίες', en: 'Individual sessions' },
      href: '/synedries/',
    },
    {
      label: { el: 'Ψηφιακό Περιεχόμενο', en: 'Digital content' },
      href: 'https://giannis-karagiannidis.gr/digital-products-services/',
    },
  ],
  questionsTitle: { el: 'ΕΧΕΙΣ ΑΠΟΡΙΕΣ;', en: 'HAVE QUESTIONS?' },
  quoteTitle: { el: 'Ζήτησε Προσφορά', en: 'Request a quote' },
  quotePhoneDisplay: { el: '+30 694 745 2681', en: '+30 694 745 2681' },
  quotePhoneTel: '+306947452681',
  emailTitle: { el: 'Στείλε Email', en: 'Send email' },
  emailAddress: 'gkselfchallenge@gmail.com',
  copyrightReserved: {
    el: 'Copyright © {year} Όλα τα δικαιώματα διατηρούνται.',
    en: 'Copyright © {year} All Right Reserved.',
  },
  madeByLead: { el: 'Κατασκευή από', en: 'Made by' },
  madeByBrand: { el: 'hayc', en: 'hayc' },
  madeByHref: 'https://hayc.gr/',
  madeByTrail: { el: ' με 💙', en: ' with 💙' },
  privacyLink: {
    label: { el: 'Πολιτική Απορρήτου', en: 'Privacy policy' },
    href: 'https://giannis-karagiannidis.gr/privacy-policy/',
  },
  socials: [
    {
      href: 'https://www.instagram.com/gk_personaldevelopment/?hl=el',
      network: 'instagram',
      label: { el: 'Instagram', en: 'Instagram' },
    },
    {
      href: 'https://www.facebook.com/share/1GxQ6KqCDN/',
      network: 'facebook',
      label: { el: 'Facebook', en: 'Facebook' },
    },
    {
      href: 'https://www.tiktok.com/@gianniskaragiannidis_gk',
      network: 'tiktok',
      label: { el: 'TikTok', en: 'TikTok' },
    },
    {
      href: 'https://www.youtube.com/@gianniskaragiannidis-gkper7489',
      network: 'youtube',
      label: { el: 'YouTube', en: 'YouTube' },
    },
  ],
};

export const homePageConfig = homePageDefaultConfig;

export const aboutPageConfig = aboutPageDefaultConfig;

export const contactPageConfig = contactPageDefaultConfig;
