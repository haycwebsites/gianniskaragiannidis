import type { LocaleString } from './config.js';

export interface ContactPageConfig {
  mapEmbedSrc: string;
  mapIframeTitle: LocaleString;
  getInTouchTitle: LocaleString;
  phoneSectionTitle: LocaleString;
  phoneDisplay: LocaleString;
  phoneTel: string;
  emailSectionTitle: LocaleString;
  emailAddress: string;
  /** Contact form (same API as home consultation) */
  contactFormNameLabel: LocaleString;
  contactFormEmailLabel: LocaleString;
  contactFormMessageLabel: LocaleString;
  contactFormSubmit: LocaleString;
  contactFormSubmitting: LocaleString;
  contactFormSuccessTitle: LocaleString;
  contactFormSuccessText: LocaleString;
  contactFormError: LocaleString;
  contactFormNameRequired: LocaleString;
  contactFormEmailInvalid: LocaleString;
  contactFormMessageRequired: LocaleString;
}

export const contactPageDefaultConfig: ContactPageConfig = {
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.954708977458!2d23.7275383153225!3d37.98380997972016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3f7a9e3b7b%3A0x1c0f2e4f6b4b0e0!2sAthens%2C%20Greece!5e0!3m2!1sen!2sgr!4v1710000000000!5m2!1sen!2sgr',
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
  contactFormSuccessText: {
    el: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
    en: 'We will get back to you shortly.',
  },
  contactFormError: {
    el: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
    en: 'Something went wrong. Please try again.',
  },
  contactFormNameRequired: {
    el: 'Το όνομα είναι υποχρεωτικό.',
    en: 'Name is required.',
  },
  contactFormEmailInvalid: {
    el: 'Εισάγετε έγκυρο email.',
    en: 'Please enter a valid email.',
  },
  contactFormMessageRequired: {
    el: 'Το μήνυμα είναι υποχρεωτικό.',
    en: 'Message is required.',
  },
};
