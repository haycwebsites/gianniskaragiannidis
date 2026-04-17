import type { LocaleString } from './config.js';

export interface HomeHeroSlide {
  backgroundImage: string;
  title: LocaleString;
  subtitle: LocaleString;
  ctaLabel: LocaleString;
  ctaHref: string;
}

export interface HomeServiceCard {
  title: LocaleString;
  titleHref: string;
  body: LocaleString;
}

export interface HomeWorkingStep {
  stepClass:
    | 'cinkes_working_process_step1'
    | 'cinkes_working_process_step2'
    | 'cinkes_working_process_step3';
  icon: 'analytics' | 'users' | 'bullhorn';
  title: LocaleString;
  body: LocaleString;
}

export interface HomeProjectSlide {
  backgroundImage: string;
  label: LocaleString;
}

export interface HomeBlogPost {
  title: LocaleString;
  url: string;
  imageSrc: string;
  imageAlt: LocaleString;
}

export interface HomeConsultationServiceOption {
  value: string;
  label: LocaleString;
}

export interface HomeSidebarSocial {
  href: string;
  network: 'facebook' | 'twitter' | 'linkedin' | 'youtube';
  label: LocaleString;
}

export interface HomePageConfig {
  searchPlaceholder: LocaleString;
  searchCloseAria: LocaleString;
  searchSubmitAria: LocaleString;
  sidebarCloseAria: LocaleString;
  sidebarOpenAria: LocaleString;
  sidebarLogoSrc: string;
  sidebarLogoAlt: LocaleString;
  sidebarHomeHref: string;
  sidebarContactTitle: LocaleString;
  sidebarAddress: LocaleString;
  sidebarPhoneDisplay: LocaleString;
  sidebarPhoneTel: string;
  sidebarEmail: string;
  sidebarSocials: HomeSidebarSocial[];
  heroSlides: HomeHeroSlide[];
  servicesEyebrow: LocaleString;
  servicesTitle: LocaleString;
  servicesCards: HomeServiceCard[];
  aboutBackgroundImage: string;
  aboutImageSrc: string;
  aboutImageAlt: LocaleString;
  aboutSubtitle: LocaleString;
  aboutTitle: LocaleString;
  aboutBody: LocaleString;
  aboutList: LocaleString[];
  aboutCtaLabel: LocaleString;
  aboutCtaHref: string;
  workingEyebrow: LocaleString;
  workingTitle: LocaleString;
  workingSteps: HomeWorkingStep[];
  projectsEyebrow: LocaleString;
  projectsTitle: LocaleString;
  projectsTabLabel: LocaleString;
  projectSlides: HomeProjectSlide[];
  videoYoutubeUrl: string;
  /** Poster / backdrop for the video strip (full-width). */
  videoBackdropImage: string;
  /** Large faint words behind the hero title (e.g. Believe / Achieve). */
  videoWatermarkLine1: LocaleString;
  videoWatermarkLine2: LocaleString;
  videoPresentationLine1: LocaleString;
  videoPresentationLine2: LocaleString;
  consultationSubtitle: LocaleString;
  consultationTitleLine1: LocaleString;
  consultationTitleLine2: LocaleString;
  consultationBody: LocaleString;
  consultationFormTitle: LocaleString;
  consultationNamePlaceholder: LocaleString;
  consultationEmailPlaceholder: LocaleString;
  consultationPhonePlaceholder: LocaleString;
  consultationMessagePlaceholder: LocaleString;
  consultationServicePlaceholder: LocaleString;
  consultationSubmit: LocaleString;
  consultationSubmitting: LocaleString;
  consultationSuccessTitle: LocaleString;
  consultationSuccessText: LocaleString;
  consultationError: LocaleString;
  consultationServiceOptions: HomeConsultationServiceOption[];
  blogEyebrow: LocaleString;
  blogTitle: LocaleString;
  blogReadMore: LocaleString;
  blogEmpty: LocaleString;
  blogPosts: HomeBlogPost[];
}

const heroBg =
  'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/unseen-studio-s9CC2SKySJM-unsplash-1-scaled.jpg';

export const homePageDefaultConfig: HomePageConfig = {
  searchPlaceholder: { el: 'Αναζήτηση…', en: 'Search here…' },
  searchCloseAria: { el: 'Κλείσιμο', en: 'Close' },
  searchSubmitAria: { el: 'Αναζήτηση', en: 'Search' },
  sidebarCloseAria: { el: 'Κλείσιμο μενού', en: 'Close menu' },
  sidebarOpenAria: { el: 'Άνοιγμα μενού', en: 'Open menu' },
  sidebarLogoSrc:
    'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/lo7i5qqeuq7yzzb46ykr-removebg-preview-e1768946067961.png',
  sidebarLogoAlt: { el: 'λογότυπο', en: 'Logo' },
  sidebarHomeHref: '/',
  sidebarContactTitle: { el: 'Στοιχεία επικοινωνίας', en: 'Contact info' },
  sidebarAddress: {
    el: '12/A, Mirnada City Tower, NYC',
    en: '12/A, Mirnanda City Tower, NYC',
  },
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
      backgroundImage: heroBg,
      title: {
        el: 'Κατανόησε Τον Εαυτό Σου.\nΜεταμόρφωσε Τη Ζωή\nΣου.',
        en: 'Understand yourself.\nTransform your\nlife.',
      },
      subtitle: {
        el: 'Συναισθηματική επίγνωση • Αλλαγή νοοτροπίας • Προσωπική ανάπτυξη',
        en: 'Emotional awareness • Mindset shift • Personal growth',
      },
      ctaLabel: { el: 'Τα ψηφιακά προϊόντα μου', en: 'My digital products' },
      ctaHref: '/digital-products-services',
    },
    {
      backgroundImage: heroBg,
      title: {
        el: 'Η συναισθηματική δύναμη\nείναι δεξιότητα',
        en: 'Emotional strength\nis a skill',
      },
      subtitle: {
        el:
          'Μάθε πώς να διαχειρίζεσαι τα συναισθήματα, τις σχέσεις και τις εσωτερικές σου προκλήσεις',
        en: 'Learn how to manage emotions, relationships, and inner challenges.',
      },
      ctaLabel: { el: 'Δες τις υπηρεσίες μου', en: 'View my services' },
      ctaHref: '/#services',
    },
    {
      backgroundImage: heroBg,
      title: {
        el: 'Η αλλαγή ξεκινά\nαπό μέσα σου',
        en: 'Change starts\nwithin you',
      },
      subtitle: {
        el:
          'Προσωπική εξέλιξη μέσα από διαύγεια, ειλικρίνεια και σύνδεση με τον εαυτό σου',
        en: 'Personal growth through clarity, honesty, and self-connection.',
      },
      ctaLabel: { el: 'Επικοινώνησε τώρα', en: 'Contact now' },
      ctaHref: '/#contact',
    },
  ],
  servicesEyebrow: { el: 'Πώς Μπορώ Να Σε Βοηθήσω', en: 'How I Can Help You' },
  servicesTitle: {
    el: 'Τρόποι Με Τους Οποίους Υποστηρίζω Την Εξέλιξή Σου',
    en: 'Ways In Which I Support Your Evolution',
  },
  servicesCards: [
    {
      title: { el: 'Ατομικές Συνεδρίες (1 - 1)', en: 'One-to-one sessions' },
      titleHref: 'https://giannis-karagiannidis.gr/1-to-1-sessions/',
      body: {
        el: 'Κατανόησε τα συναισθήματά σου και άλλαξε τον τρόπο που ανταποκρίνεσαι στη ζωή.',
        en: 'Understand your emotions and change how you respond to life.',
      },
    },
    {
      title: { el: 'Ψηφιακό Περιεχόμενο', en: 'Digital content' },
      titleHref: 'https://giannis-karagiannidis.gr/1-to-1-sessions/',
      body: {
        el:
          'Πρακτικά εργαλεία που σε βοηθούν να χτίσεις συναισθηματική δύναμη με τον δικό σου ρυθμό.',
        en: 'Practical tools to build emotional strength at your own pace.',
      },
    },
    {
      title: { el: 'Προσωπική Ανάπτυξη', en: 'Personal development' },
      titleHref: 'https://giannis-karagiannidis.gr/1-to-1-sessions/',
      body: {
        el:
          'Επίλεξε ανάμεσα σε προσωπικές συνεδρίες ή αυτοκαθοδηγούμενα ψηφιακά εργαλεία.',
        en: 'Choose between live sessions or self-guided digital tools.',
      },
    },
  ],
  aboutBackgroundImage: '',
  aboutImageSrc:
    'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/rsbaifhvcimolretqxcr.jpg',
  aboutImageAlt: { el: 'Σχετικά', en: 'About' },
  aboutSubtitle: {
    el: 'Σχετικά με το GK Personal Development',
    en: 'About GK Personal Development',
  },
  aboutTitle: {
    el: 'Η προσωπική εξέλιξη ξεκινά με την αυτογνωσία',
    en: 'Personal growth begins with self-awareness',
  },
  aboutBody: {
    el:
      'Στο GK Personal Development εστιάζω στη συναισθηματική επίγνωση, την αλλαγή νοοτροπίας και την προσωπική ανάπτυξη. Μέσα από ατομικές συνεδρίες και ψηφιακά εργαλεία, βοηθώ τους ανθρώπους να κατανοήσουν καλύτερα τον εαυτό τους, να διαχειριστούν τα συναισθήματά τους και να δημιουργήσουν ουσιαστική αλλαγή στη ζωή τους.',
    en:
      'At GK Personal Development I focus on emotional awareness, mindset change, and growth. Through sessions and digital tools, I help people understand themselves, manage emotions, and create meaningful change.',
  },
  aboutList: [
    { el: 'Συναισθηματική επίγνωση & ρύθμιση', en: 'Emotional awareness & regulation' },
    { el: 'Υγιείς σχέσεις & όρια', en: 'Healthy relationships & boundaries' },
    { el: 'Αλλαγή νοοτροπίας και συμπεριφοράς', en: 'Mindset and behaviour change' },
    { el: 'Πρακτικά εργαλεία για την καθημερινότητα', en: 'Practical tools for daily life' },
  ],
  aboutCtaLabel: { el: 'Περισσότερα', en: 'Learn more' },
  aboutCtaHref: 'https://giannis-karagiannidis.gr/about/',
  workingEyebrow: {
    el: 'Υπηρεσίες προσωπικής ανάπτυξης',
    en: 'Personal development services',
  },
  workingTitle: { el: 'Εστιάζουμε σε', en: 'We focus on' },
  workingSteps: [
    {
      stepClass: 'cinkes_working_process_step1',
      icon: 'analytics',
      title: { el: 'Μοτίβα σχέσεων', en: 'Relationship patterns' },
      body: {
        el:
          'Αναγνώριση συναισθηματικών μοτίβων, ερεθισμάτων και εσωτερικών προκλήσεων.',
        en: 'Recognising emotional patterns, triggers, and inner challenges.',
      },
    },
    {
      stepClass: 'cinkes_working_process_step2',
      icon: 'users',
      title: { el: 'Διαχείριση συναισθημάτων', en: 'Emotional management' },
      body: {
        el:
          'Μαθαίνοντας πώς να νιώθεις, να κατανοείς και να ρυθμίζεις τα συναισθήματα με υγιή τρόπο.',
        en: 'Learning to feel, understand, and regulate emotions in healthy ways.',
      },
    },
    {
      stepClass: 'cinkes_working_process_step3',
      icon: 'bullhorn',
      title: {
        el: 'Αλλαγή νοοτροπίας και συμπεριφοράς',
        en: 'Mindset and behaviour change',
      },
      body: {
        el: 'Μετατρέποντας την επίγνωση σε πραγματική αλλαγή και ισορροπία στη ζωή.',
        en: 'Turning awareness into real change and balance in life.',
      },
    },
  ],
  projectsEyebrow: { el: 'Ψηφιακά προϊόντα', en: 'Digital products' },
  projectsTitle: {
    el: 'Εργαλεία προσωπικής ανάπτυξης',
    en: 'Personal growth tools',
  },
  projectsTabLabel: { el: 'Οδηγοί', en: 'Guides' },
  projectSlides: [
    {
      backgroundImage:
        'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/1000020684.png',
      label: { el: 'IT Management', en: 'IT Management' },
    },
    {
      backgroundImage:
        'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/1000020687.png',
      label: { el: 'IT Consultant', en: 'IT Consultant' },
    },
    {
      backgroundImage:
        'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/1000020680.png',
      label: { el: 'Personal Info', en: 'Personal info' },
    },
    {
      backgroundImage:
        'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/1000020683.png',
      label: { el: 'Verified ID', en: 'Verified ID' },
    },
  ],
  videoYoutubeUrl: 'https://www.youtube.com/watch?v=UmeSFLjsnxM',
  videoBackdropImage:
    'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/brando-makes-branding-ljurPRAnLAQ-unsplash-scaled.jpg',
  videoWatermarkLine1: { el: 'Believe', en: 'Believe' },
  videoWatermarkLine2: { el: 'Achieve', en: 'Achieve' },
  videoPresentationLine1: {
    el: 'Μια Σύντομη Εισαγωγή Στην Προσέγγιση',
    en: 'A Short Introduction to the Approach',
  },
  videoPresentationLine2: {
    el: '',
    en: '',
  },
  consultationSubtitle: {
    el: 'Προσωπικός Αναστοχασμός',
    en: 'Personal reflection',
  },
  consultationTitleLine1: {
    el: 'Ένας Ασφαλής Χώρος Για Να Εξερευνήσεις Όσα Συμβαίνουν Μέσα Σου',
    en: 'A Safe Space to Explore What Is Happening Inside You',
  },
  consultationTitleLine2: {
    el: '',
    en: '',
  },
  consultationBody: {
    el:
      'Αν νιώθεις συναισθηματικά φορτισμένος, αποσυνδεδεμένος ή αβέβαιος για την κατεύθυνσή σου, αυτός ο χώρος σου προσφέρει χρόνο και καθοδήγηση για να εξερευνήσεις όσα συμβαίνουν μέσα σου — χωρίς πίεση ή κριτική.',
    en:
      'If you feel emotionally charged, disconnected, or unsure of your direction, this space offers time and guidance to explore your inner world—without pressure or judgement.',
  },
  consultationFormTitle: {
    el: 'Δωρεάν Εισαγωγική Συνεδρία',
    en: 'Free Introductory Session',
  },
  consultationNamePlaceholder: { el: 'Όνομα', en: 'Your Name' },
  consultationEmailPlaceholder: { el: 'Email', en: 'Email' },
  consultationPhonePlaceholder: { el: 'Τηλέφωνο', en: 'Phone Number' },
  consultationMessagePlaceholder: {
    el: 'Μοιράσου λίγα λόγια για όσα βιώνεις',
    en: "Share a few words about what you're experiencing",
  },
  consultationServicePlaceholder: {
    el: 'Συναισθηματική Επίγνωση',
    en: 'Emotional awareness',
  },
  consultationSubmit: { el: 'Αίτημα συνεδρίας', en: 'Request a session' },
  consultationSubmitting: { el: 'Αποστολή…', en: 'Sending…' },
  consultationSuccessTitle: {
    el: 'Λάβαμε το αίτημά σας',
    en: 'We received your request',
  },
  consultationSuccessText: {
    el: 'Θα επικοινωνήσουμε σύντομα.',
    en: 'We will get back to you shortly.',
  },
  consultationError: {
    el: 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.',
    en: 'Something went wrong. Please try again.',
  },
  consultationServiceOptions: [
    {
      value: 'awareness',
      label: { el: 'Συναισθηματική επίγνωση', en: 'Emotional awareness' },
    },
    { value: 'relationships', label: { el: 'Σχέσεις', en: 'Relationships' } },
    { value: 'mindset', label: { el: 'Νοοτροπία & συμπεριφορά', en: 'Mindset & behaviour' } },
    { value: 'growth', label: { el: 'Προσωπική ανάπτυξη', en: 'Personal growth' } },
  ],
  blogEyebrow: { el: 'Blog', en: 'Blog' },
  blogTitle: { el: 'Τα τελευταία άρθρα μας', en: 'Our latest articles' },
  blogReadMore: { el: 'Διάβασε Περισσότερα', en: 'Read more' },
  blogEmpty: {
    el: 'Δεν υπάρχουν δημοσιεύσεις προς εμφάνιση.',
    en: 'No posts to display yet.',
  },
  blogPosts: [
    {
      title: {
        el: 'Δείτε τα τελευταία άρθρα στον ιστότοπό μας',
        en: 'Read the latest articles on our website',
      },
      url: 'https://giannis-karagiannidis.gr/category/Articles/',
      imageSrc: 'https://placehold.co/600x450/1a1a1a/ffffff?text=Blog',
      imageAlt: { el: 'Άρθρα', en: 'Articles' },
    },
  ],
};
