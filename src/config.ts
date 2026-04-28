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

export const homePageConfig = {
  searchPlaceholder: { el: 'Αναζήτηση…', en: 'Search here…' },
  searchCloseAria: { el: 'Κλείσιμο', en: 'Close' },
  searchSubmitAria: { el: 'Αναζήτηση', en: 'Search' },
  sidebarCloseAria: { el: 'Κλείσιμο μενού', en: 'Close menu' },
  sidebarOpenAria: { el: 'Άνοιγμα μενού', en: 'Open menu' },
  sidebarLogoSrc: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/lo7i5qqeuq7yzzb46ykr-removebg-preview-e1768946067961.png',
  sidebarLogoAlt: { el: 'λογότυπο', en: 'Logo' },
  sidebarHomeHref: '/',
  sidebarContactTitle: { el: 'Στοιχεία επικοινωνίας', en: 'Contact info' },
  sidebarAddress: { el: '12/A, Mirnada City Tower, NYC', en: '12/A, Mirnanda City Tower, NYC' },
  sidebarPhoneDisplay: { el: '+30 694 745 2681', en: '+30 694 745 2681' },
  sidebarPhoneTel: '+306947452681',
  sidebarEmail: 'gkselfchallenge@gmail.com',
  sidebarSocials: [
    {
      href: 'https://www.facebook.com/share/1GxQ6KqCDN/',
      network: 'facebook',
      label: { el: 'Facebook', en: 'Facebook' },
    },
    {
      href: 'https://twitter.com',
      network: 'twitter',
      label: { el: 'Twitter', en: 'Twitter' },
    },
    {
      href: 'https://www.linkedin.com',
      network: 'linkedin',
      label: { el: 'LinkedIn', en: 'LinkedIn' },
    },
    {
      href: 'https://www.youtube.com/@gianniskaragiannidis-gkper7489',
      network: 'youtube',
      label: { el: 'YouTube', en: 'YouTube' },
    },
  ],
  heroSlides: [
    {
      backgroundImage: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/unseen-studio-s9CC2SKySJM-unsplash-1-scaled.jpg',
      title: { el: 'Κατανόησε Τον Εαυτό Σου.\nΜεταμόρφωσε Τη Ζωή\nΣου.', en: 'Understand yourself.\nTransform your\nlife.' },
      subtitle: { el: 'Συναισθηματική επίγνωση • Αλλαγή νοοτροπίας • Προσωπική ανάπτυξη', en: 'Emotional awareness • Mindset shift • Personal growth' },
      ctaLabel: { el: 'Τα ψηφιακά προϊόντα μου', en: 'My digital products' },
      ctaHref: '/digital-products-services',
    },
    {
      backgroundImage: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/unseen-studio-s9CC2SKySJM-unsplash-1-scaled.jpg',
      title: { el: 'Η συναισθηματική δύναμη\nείναι δεξιότητα', en: 'Emotional strength\nis a skill' },
      subtitle: { el: 'Μάθε πώς να διαχειρίζεσαι τα συναισθήματα, τις σχέσεις και τις εσωτερικές σου προκλήσεις', en: 'Learn how to manage emotions, relationships, and inner challenges.' },
      ctaLabel: { el: 'Δες τις υπηρεσίες μου', en: 'View my services' },
      ctaHref: '/#services',
    },
    {
      backgroundImage: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/unseen-studio-s9CC2SKySJM-unsplash-1-scaled.jpg',
      title: { el: 'Η αλλαγή ξεκινά\nαπό μέσα σου', en: 'Change starts\nwithin you' },
      subtitle: { el: 'Προσωπική εξέλιξη μέσα από διαύγεια, ειλικρίνεια και σύνδεση με τον εαυτό σου', en: 'Personal growth through clarity, honesty, and self-connection.' },
      ctaLabel: { el: 'Επικοινώνησε τώρα', en: 'Contact now' },
      ctaHref: '/#contact',
    },
  ],
  servicesEyebrow: { el: 'Πώς Μπορώ Να Σε Βοηθήσω', en: 'How I Can Help You' },
  servicesTitle: { el: 'Τρόποι Με Τους Οποίους Υποστηρίζω Την Εξέλιξή Σου', en: 'Ways In Which I Support Your Evolution' },
  servicesCards: [
    {
      title: { el: 'Ατομικές Συνεδρίες (1 - 1)', en: 'One-to-one sessions' },
      titleHref: 'https://giannis-karagiannidis.gr/1-to-1-sessions/',
      body: { el: 'Κατανόησε τα συναισθήματά σου και άλλαξε τον τρόπο που ανταποκρίνεσαι στη ζωή.', en: 'Understand your emotions and change how you respond to life.' },
    },
    {
      title: { el: 'Ψηφιακό Περιεχόμενο', en: 'Digital content' },
      titleHref: 'https://giannis-karagiannidis.gr/1-to-1-sessions/',
      body: { el: 'Πρακτικά εργαλεία που σε βοηθούν να χτίσεις συναισθηματική δύναμη με τον δικό σου ρυθμό.', en: 'Practical tools to build emotional strength at your own pace.' },
    },
    {
      title: { el: 'Προσωπική Ανάπτυξη', en: 'Personal development' },
      titleHref: 'https://giannis-karagiannidis.gr/1-to-1-sessions/',
      body: { el: 'Επίλεξε ανάμεσα σε προσωπικές συνεδρίες ή αυτοκαθοδηγούμενα ψηφιακά εργαλεία.', en: 'Choose between live sessions or self-guided digital tools.' },
    },
  ],
  aboutBackgroundImage: '',
  aboutImageSrc: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/rsbaifhvcimolretqxcr.jpg',
  aboutImageAlt: { el: 'Σχετικά', en: 'About' },
  aboutSubtitle: { el: 'Σχετικά με το GK Personal Development', en: 'About GK Personal Development' },
  aboutTitle: { el: 'Η προσωπική εξέλιξη ξεκινά με την αυτογνωσία', en: 'Personal growth begins with self-awareness' },
  aboutBody: { el: 'Στο GK Personal Development εστιάζω στη συναισθηματική επίγνωση, την αλλαγή νοοτροπίας και την προσωπική ανάπτυξη. Μέσα από ατομικές συνεδρίες και ψηφιακά εργαλεία, βοηθώ τους ανθρώπους να κατανοήσουν καλύτερα τον εαυτό τους, να διαχειριστούν τα συναισθήματά τους και να δημιουργήσουν ουσιαστική αλλαγή στη ζωή τους.', en: 'At GK Personal Development I focus on emotional awareness, mindset change, and growth. Through sessions and digital tools, I help people understand themselves, manage emotions, and create meaningful change.' },
  aboutList: [
    { el: 'Συναισθηματική επίγνωση & ρύθμιση', en: 'Emotional awareness & regulation' },
    { el: 'Υγιείς σχέσεις & όρια', en: 'Healthy relationships & boundaries' },
    { el: 'Αλλαγή νοοτροπίας και συμπεριφοράς', en: 'Mindset and behaviour change' },
    { el: 'Πρακτικά εργαλεία για την καθημερινότητα', en: 'Practical tools for daily life' },
  ],
  aboutCtaLabel: { el: 'Περισσότερα', en: 'Learn more' },
  aboutCtaHref: 'https://giannis-karagiannidis.gr/about/',
  workingEyebrow: { el: 'Υπηρεσίες προσωπικής ανάπτυξης', en: 'Personal development services' },
  workingTitle: { el: 'Εστιάζουμε σε', en: 'We focus on' },
  workingSteps: [
    {
      stepClass: 'cinkes_working_process_step1',
      icon: 'analytics',
      title: { el: 'Μοτίβα σχέσεων', en: 'Relationship patterns' },
      body: { el: 'Αναγνώριση συναισθηματικών μοτίβων, ερεθισμάτων και εσωτερικών προκλήσεων.', en: 'Recognising emotional patterns, triggers, and inner challenges.' },
    },
    {
      stepClass: 'cinkes_working_process_step2',
      icon: 'users',
      title: { el: 'Διαχείριση συναισθημάτων', en: 'Emotional management' },
      body: { el: 'Μαθαίνοντας πώς να νιώθεις, να κατανοείς και να ρυθμίζεις τα συναισθήματα με υγιή τρόπο.', en: 'Learning to feel, understand, and regulate emotions in healthy ways.' },
    },
    {
      stepClass: 'cinkes_working_process_step3',
      icon: 'bullhorn',
      title: { el: 'Αλλαγή νοοτροπίας και συμπεριφοράς', en: 'Mindset and behaviour change' },
      body: { el: 'Μετατρέποντας την επίγνωση σε πραγματική αλλαγή και ισορροπία στη ζωή.', en: 'Turning awareness into real change and balance in life.' },
    },
  ],
  projectsEyebrow: { el: 'Ψηφιακά προϊόντα', en: 'Digital products' },
  projectsTitle: { el: 'Εργαλεία προσωπικής ανάπτυξης', en: 'Personal growth tools' },
  projectsTabLabel: { el: 'Οδηγοί', en: 'Guides' },
  projectSlides: [
    {
      backgroundImage: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/1000020684.png',
      label: { el: 'IT Management', en: 'IT Management' },
    },
    {
      backgroundImage: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/1000020687.png',
      label: { el: 'IT Consultant', en: 'IT Consultant' },
    },
    {
      backgroundImage: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/1000020680.png',
      label: { el: 'Personal Info', en: 'Personal info' },
    },
    {
      backgroundImage: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/1000020683.png',
      label: { el: 'Verified ID', en: 'Verified ID' },
    },
  ],
  videoYoutubeUrl: 'https://www.youtube.com/watch?v=UmeSFLjsnxM',
  videoBackdropImage: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/brando-makes-branding-ljurPRAnLAQ-unsplash-scaled.jpg',
  videoWatermarkLine1: { el: 'Believe', en: 'Believe' },
  videoWatermarkLine2: { el: 'Achieve', en: 'Achieve' },
  videoPresentationLine1: { el: 'Μια Σύντομη Εισαγωγή Στην Προσέγγιση', en: 'A Short Introduction to the Approach' },
  videoPresentationLine2: { el: '', en: '' },
  consultationSubtitle: { el: 'Προσωπικός Αναστοχασμός', en: 'Personal reflection' },
  consultationTitleLine1: { el: 'Ένας Ασφαλής Χώρος Για Να Εξερευνήσεις Όσα Συμβαίνουν Μέσα Σου', en: 'A Safe Space to Explore What Is Happening Inside You' },
  consultationTitleLine2: { el: '', en: '' },
  consultationBody: { el: 'Αν νιώθεις συναισθηματικά φορτισμένος, αποσυνδεδεμένος ή αβέβαιος για την κατεύθυνσή σου, αυτός ο χώρος σου προσφέρει χρόνο και καθοδήγηση για να εξερευνήσεις όσα συμβαίνουν μέσα σου — χωρίς πίεση ή κριτική.', en: 'If you feel emotionally charged, disconnected, or unsure of your direction, this space offers time and guidance to explore your inner world—without pressure or judgement.' },
  consultationFormTitle: { el: 'Δωρεάν Εισαγωγική Συνεδρία', en: 'Free Introductory Session' },
  consultationNamePlaceholder: { el: 'Όνομα', en: 'Your Name' },
  consultationEmailPlaceholder: { el: 'Email', en: 'Email' },
  consultationPhonePlaceholder: { el: 'Τηλέφωνο', en: 'Phone Number' },
  consultationMessagePlaceholder: { el: 'Μοιράσου λίγα λόγια για όσα βιώνεις', en: 'Share a few words about what you\'re experiencing' },
  consultationServicePlaceholder: { el: 'Συναισθηματική Επίγνωση', en: 'Emotional awareness' },
  consultationSubmit: { el: 'Αίτημα συνεδρίας', en: 'Request a session' },
  consultationSubmitting: { el: 'Αποστολή…', en: 'Sending…' },
  consultationSuccessTitle: { el: 'Λάβαμε το αίτημά σας', en: 'We received your request' },
  consultationSuccessText: { el: 'Θα επικοινωνήσουμε σύντομα.', en: 'We will get back to you shortly.' },
  consultationError: { el: 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.', en: 'Something went wrong. Please try again.' },
  consultationServiceOptions: [
    {
      value: 'awareness',
      label: { el: 'Συναισθηματική επίγνωση', en: 'Emotional awareness' },
    },
    {
      value: 'relationships',
      label: { el: 'Σχέσεις', en: 'Relationships' },
    },
    {
      value: 'mindset',
      label: { el: 'Νοοτροπία & συμπεριφορά', en: 'Mindset & behaviour' },
    },
    {
      value: 'growth',
      label: { el: 'Προσωπική ανάπτυξη', en: 'Personal growth' },
    },
  ],
  blogEyebrow: { el: 'Blog', en: 'Blog' },
  blogTitle: { el: 'Τα τελευταία άρθρα μας', en: 'Our latest articles' },
  blogReadMore: { el: 'Διάβασε Περισσότερα', en: 'Read more' },
  blogEmpty: { el: 'Δεν υπάρχουν δημοσιεύσεις προς εμφάνιση.', en: 'No posts to display yet.' },
  blogPosts: [
    {
      title: { el: 'Δείτε τα τελευταία άρθρα στον ιστότοπό μας', en: 'Read the latest articles on our website' },
      url: 'https://giannis-karagiannidis.gr/category/Articles/',
      imageSrc: 'https://placehold.co/600x450/1a1a1a/ffffff?text=Blog',
      imageAlt: { el: 'Άρθρα', en: 'Articles' },
    },
  ],
};

export const aboutPageConfig = {
  aboutBackgroundImage: '',
  aboutImageSrc: 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/irwjootfdnctvvmla2d3.jpg',
  aboutImageAlt: { el: 'εικόνα σχετικά με το έργο', en: 'Image about the work' },
  aboutSubtitle: { el: 'Σχετικά με το έργο μου', en: 'About my work' },
  aboutTitleLine1: { el: 'Μια διαφορετική προσέγγιση', en: 'A different approach' },
  aboutTitleLine2: { el: 'στην προσωπική ανάπτυξη', en: 'to personal development' },
  aboutParagraphs: [
    { el: 'Αυτή η δουλειά δεν αφορά τη γρήγορη παρακίνηση ή την επιφανειακή αλλαγή. Αφορά το να επιβραδύνεις, να αποκτήσεις μεγαλύτερη επίγνωση και να κατανοήσεις πώς τα συναισθήματα, οι σκέψεις και οι εμπειρίες του παρελθόντος επηρεάζουν τον τρόπο που ζεις, σχετίζεσαι και παίρνεις αποφάσεις σήμερα.', en: 'This work is not about quick motivation or surface-level change. It is about slowing down, growing awareness, and understanding how emotions, thoughts, and past experiences shape how you live, relate, and decide today.' },
    { el: 'Μέσα από τον αναστοχασμό, τη συναισθηματική διερεύνηση και πρακτικά εργαλεία, υποστηρίζω ανθρώπους που θέλουν να αναπτύξουν μια πιο υγιή σχέση με τον εαυτό τους και να δημιουργήσουν αλλαγή που είναι αληθινή και βιώσιμη.', en: 'Through reflection, emotional inquiry, and practical tools, I support people who want a healthier relationship with themselves and change that feels real and sustainable.' },
  ],
  aboutList: [
    { el: 'Κατανόηση συναισθηματικών μοτίβων', en: 'Understanding emotional patterns' },
    { el: 'Ανάπτυξη αυτογνωσίας', en: 'Growing self-awareness' },
    { el: 'Αλλαγή μη βοηθητικών συμπεριφορών', en: 'Shifting unhelpful behaviours' },
    { el: 'Ενίσχυση συναισθηματικής ανθεκτικότητας', en: 'Building emotional resilience' },
  ],
  aboutCtaLabel: { el: 'Ξεκίνα τη συζήτηση', en: 'Start the conversation' },
  aboutCtaHref: '/#contact',
  experienceEyebrow: { el: 'Τι Συνήθως Αποκομίζουν Οι Άνθρωποι', en: 'What People Usually Take Away' },
  experienceTitle: { el: 'Αποτελέσματα Αυτής Της Δουλειάς', en: 'Results Of This Work' },
  experienceBackgroundImage: '',
  experienceItems: [
    {
      title: { el: 'Διαύγεια', en: 'Clarity' },
      description: { el: 'Πιο καθαρή κατανόηση των συναισθημάτων και των εσωτερικών αντιδράσεων', en: 'A clearer understanding of emotions and inner reactions' },
    },
    {
      title: { el: 'Επίγνωση', en: 'Awareness' },
      description: { el: 'Αναγνώριση μοτίβων που επαναλαμβάνονται στη ζωή και στις σχέσεις', en: 'Recognising patterns that repeat in life and relationships' },
    },
    {
      title: { el: 'Σταθερότητα', en: 'Stability' },
      description: { el: 'Βελτιωμένη συναισθηματική ρύθμιση και εσωτερική ισορροπία', en: 'Improved emotional regulation and inner balance' },
    },
    {
      title: { el: 'Εξέλιξη', en: 'Growth' },
      description: { el: 'Προσωπική ανάπτυξη βασισμένη στην κατανόηση του εαυτού', en: 'Personal growth grounded in self-understanding' },
    },
  ],
};

export const contactPageConfig = {
  mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.954708977458!2d23.7275383153225!3d37.98380997972016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3f7a9e3b7b%3A0x1c0f2e4f6b4b0e0!2sAthens%2C%20Greece!5e0!3m2!1sen!2sgr!4v1710000000000!5m2!1sen!2sgr',
  mapIframeTitle: { el: 'Χάρτης — Αθήνα', en: 'Map — Athens' },
  getInTouchTitle: { el: 'Επικοινώνησε Μαζί Μας', en: 'Get In Touch' },
  phoneSectionTitle: { el: 'Τηλέφωνο', en: 'Phone' },
  phoneDisplay: { el: '+30 694 745 2681', en: '+30 694 745 2681' },
  phoneTel: '+306947452681',
  emailSectionTitle: { el: 'Email', en: 'Email' },
  emailAddress: 'gkselfchallenge@gmail.com',
  contactFormNameLabel: { el: 'Όνομα', en: 'Name' },
  contactFormEmailLabel: { el: 'Email', en: 'Email' },
  contactFormMessageLabel: { el: 'Μήνυμα', en: 'Message' },
  contactFormSubmit: { el: 'Αποστολή', en: 'Send Message' },
  contactFormSubmitting: { el: 'Αποστολή...', en: 'Sending...' },
  contactFormSuccessTitle: { el: 'Το μήνυμά σας στάλθηκε!', en: 'Message sent!' },
  contactFormSuccessText: { el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.', en: 'We will get back to you shortly.' },
  contactFormError: { el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.', en: 'Something went wrong. Please try again.' },
  contactFormNameRequired: { el: 'Το όνομα είναι υποχρεωτικό.', en: 'Name is required.' },
  contactFormEmailInvalid: { el: 'Εισάγετε έγκυρο email.', en: 'Please enter a valid email.' },
  contactFormMessageRequired: { el: 'Το μήνυμα είναι υποχρεωτικό.', en: 'Message is required.' },
};
