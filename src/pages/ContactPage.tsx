import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { useHayc } from '../hayc/config-context';

function PhoneGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function ContactPage() {
  const { t, config, cp } = useHayc();
  const c = config.contactPageConfig;

  return (
    <>
      <Navbar />
      <main>
        <div className="cinkes_gmap_area pt-120 pb-105">
          <div className="cinkes_gmap_section" {...cp('contactPageConfig.mapEmbedSrc')}>
            <iframe
              title={t(c.mapIframeTitle)}
              src={c.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              {...cp('contactPageConfig.mapIframeTitle')}
            />
          </div>
        </div>

        <div className="cinkes_contact_area pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="cinkes-contact_section mb-50">
                  <h4 className="cinkes_getintouch_title" {...cp('contactPageConfig.getInTouchTitle')}>
                    {t(c.getInTouchTitle)}
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-lg-4">
                <div className="cinkes_contact_info mb-40">
                  <div className="cinkes_contact-single_info mb-40">
                    <span className="cinkes_contact_single_icon" aria-hidden>
                      <PhoneGlyph />
                    </span>
                    <div className="cinkes_contact_single_text cinkes_contact_single_phone_text">
                      <h4 className="cinkes_contact_single_title" {...cp('contactPageConfig.phoneSectionTitle')}>
                        {t(c.phoneSectionTitle)}
                      </h4>
                      <a href={`tel:${c.phoneTel}`} {...cp('contactPageConfig.phoneDisplay')}>
                        {t(c.phoneDisplay)}
                      </a>
                    </div>
                  </div>
                  <div className="cinkes_contact-single_info mb-40">
                    <span className="cinkes_contact_single_icon" aria-hidden>
                      <MailGlyph />
                    </span>
                    <div className="cinkes_contact_single_text cinkes_contact_single_email_text">
                      <h4 className="cinkes_contact_single_title" {...cp('contactPageConfig.emailSectionTitle')}>
                        {t(c.emailSectionTitle)}
                      </h4>
                      <a href={`mailto:${c.emailAddress}`} {...cp('contactPageConfig.emailAddress')}>
                        {c.emailAddress}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-lg-8">
                <div className="cinkes_contact_form mb-40">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
