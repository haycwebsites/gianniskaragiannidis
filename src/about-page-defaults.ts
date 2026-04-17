import type { LocaleString } from './config.js';

export interface AboutPageExperienceItem {
  title: LocaleString;
  description: LocaleString;
}

export interface AboutPageConfig {
  aboutBackgroundImage: string;
  aboutImageSrc: string;
  aboutImageAlt: LocaleString;
  aboutSubtitle: LocaleString;
  aboutTitleLine1: LocaleString;
  aboutTitleLine2: LocaleString;
  aboutParagraphs: LocaleString[];
  aboutList: LocaleString[];
  aboutCtaLabel: LocaleString;
  aboutCtaHref: string;
  experienceEyebrow: LocaleString;
  experienceTitle: LocaleString;
  experienceBackgroundImage: string;
  experienceItems: AboutPageExperienceItem[];
}

export const aboutPageDefaultConfig: AboutPageConfig = {
  aboutBackgroundImage: '',
  aboutImageSrc:
    'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/irwjootfdnctvvmla2d3.jpg',
  aboutImageAlt: {
    el: 'εικόνα σχετικά με το έργο',
    en: 'Image about the work',
  },
  aboutSubtitle: { el: 'Σχετικά με το έργο μου', en: 'About my work' },
  aboutTitleLine1: {
    el: 'Μια διαφορετική προσέγγιση',
    en: 'A different approach',
  },
  aboutTitleLine2: {
    el: 'στην προσωπική ανάπτυξη',
    en: 'to personal development',
  },
  aboutParagraphs: [
    {
      el:
        'Αυτή η δουλειά δεν αφορά τη γρήγορη παρακίνηση ή την επιφανειακή αλλαγή. Αφορά το να επιβραδύνεις, να αποκτήσεις μεγαλύτερη επίγνωση και να κατανοήσεις πώς τα συναισθήματα, οι σκέψεις και οι εμπειρίες του παρελθόντος επηρεάζουν τον τρόπο που ζεις, σχετίζεσαι και παίρνεις αποφάσεις σήμερα.',
      en:
        'This work is not about quick motivation or surface-level change. It is about slowing down, growing awareness, and understanding how emotions, thoughts, and past experiences shape how you live, relate, and decide today.',
    },
    {
      el:
        'Μέσα από τον αναστοχασμό, τη συναισθηματική διερεύνηση και πρακτικά εργαλεία, υποστηρίζω ανθρώπους που θέλουν να αναπτύξουν μια πιο υγιή σχέση με τον εαυτό τους και να δημιουργήσουν αλλαγή που είναι αληθινή και βιώσιμη.',
      en:
        'Through reflection, emotional inquiry, and practical tools, I support people who want a healthier relationship with themselves and change that feels real and sustainable.',
    },
  ],
  aboutList: [
    { el: 'Κατανόηση συναισθηματικών μοτίβων', en: 'Understanding emotional patterns' },
    { el: 'Ανάπτυξη αυτογνωσίας', en: 'Growing self-awareness' },
    { el: 'Αλλαγή μη βοηθητικών συμπεριφορών', en: 'Shifting unhelpful behaviours' },
    { el: 'Ενίσχυση συναισθηματικής ανθεκτικότητας', en: 'Building emotional resilience' },
  ],
  aboutCtaLabel: { el: 'Ξεκίνα τη συζήτηση', en: 'Start the conversation' },
  aboutCtaHref: '/#contact',
  experienceEyebrow: {
    el: 'Τι Συνήθως Αποκομίζουν Οι Άνθρωποι',
    en: 'What People Usually Take Away',
  },
  experienceTitle: {
    el: 'Αποτελέσματα Αυτής Της Δουλειάς',
    en: 'Results Of This Work',
  },
  experienceBackgroundImage: '',
  experienceItems: [
    {
      title: { el: 'Διαύγεια', en: 'Clarity' },
      description: {
        el: 'Πιο καθαρή κατανόηση των συναισθημάτων και των εσωτερικών αντιδράσεων',
        en: 'A clearer understanding of emotions and inner reactions',
      },
    },
    {
      title: { el: 'Επίγνωση', en: 'Awareness' },
      description: {
        el: 'Αναγνώριση μοτίβων που επαναλαμβάνονται στη ζωή και στις σχέσεις',
        en: 'Recognising patterns that repeat in life and relationships',
      },
    },
    {
      title: { el: 'Σταθερότητα', en: 'Stability' },
      description: {
        el: 'Βελτιωμένη συναισθηματική ρύθμιση και εσωτερική ισορροπία',
        en: 'Improved emotional regulation and inner balance',
      },
    },
    {
      title: { el: 'Εξέλιξη', en: 'Growth' },
      description: {
        el: 'Προσωπική ανάπτυξη βασισμένη στην κατανόηση του εαυτού',
        en: 'Personal growth grounded in self-understanding',
      },
    },
  ],
};
