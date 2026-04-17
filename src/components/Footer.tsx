import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { isExternalHref } from '../lib/isExternalHref';
import { FooterNewsletter } from './FooterNewsletter';
import type { FooterSocialLink } from '../config';

function SocialIcon({ network }: { network: FooterSocialLink['network'] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'currentColor' as const,
    'aria-hidden': true as const,
  };
  switch (network) {
    case 'instagram':
      return (
        <svg {...common}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...common}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...common}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...common}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

function FooterNavLink({
  href,
  label,
  labelPath,
  className,
}: {
  href: string;
  label: string;
  labelPath: string;
  className?: string;
}) {
  const { cp } = useHayc();
  const p = cp(labelPath);
  const cls = ['site-footer__link', className].filter(Boolean).join(' ');
  if (isExternalHref(href)) {
    return (
      <a href={href} className={cls} {...p}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href} className={cls} {...p}>
      {label}
    </Link>
  );
}

export default function Footer() {
  const { t, img, config, cp } = useHayc();
  const nav = config.navigationConfig;
  const footer = config.footerConfig;
  const year = new Date().getFullYear();
  const copyrightText = t(footer.copyrightReserved).replace(/\{year\}/g, String(year));

  const logo = (
    <img
      src={img(nav.logoSrc)}
      alt={t(nav.logoAlt)}
      className="site-footer__logo-img"
      {...cp('navigationConfig.logoAlt')}
    />
  );

  return (
    <footer className="site-footer">
      <div className="container py-4 py-lg-5">
        <div className="site-footer__top d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 pb-4">
          <div className="site-footer__brand align-self-stretch align-self-sm-auto">
            {isExternalHref(nav.homeHref) ? (
              <a href={nav.homeHref} className="site-footer__logo d-inline-flex">
                {logo}
              </a>
            ) : (
              <Link to={nav.homeHref} className="site-footer__logo d-inline-flex">
                {logo}
              </Link>
            )}
          </div>
          <div className="site-footer__socials d-flex flex-wrap justify-content-center justify-content-sm-end gap-2">
            {footer.socials.map((social, i) => (
              <a
                key={social.href}
                href={social.href}
                className="site-footer__social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(social.label)}
                {...cp(`footerConfig.socials.${i}.label`)}
              >
                <SocialIcon network={social.network} />
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__rule" role="presentation" />

        <div className="site-footer__grid pt-4 pt-lg-5 pb-2 pb-lg-4">
          <div className="site-footer__col site-footer__col--intro">
            <p className="site-footer__tagline mb-3 mb-lg-4" {...cp('footerConfig.tagline')}>
              {t(footer.tagline)}
            </p>
            <FooterNewsletter />
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading" {...cp('footerConfig.exploreTitle')}>
              {t(footer.exploreTitle)}
            </h2>
            <ul className="site-footer__list">
              {footer.exploreLinks.map((link, i) => (
                <li key={link.href + i}>
                  <FooterNavLink
                    href={link.href}
                    label={t(link.label)}
                    labelPath={`footerConfig.exploreLinks.${i}.label`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading" {...cp('footerConfig.contentTitle')}>
              {t(footer.contentTitle)}
            </h2>
            <ul className="site-footer__list">
              {footer.contentLinks.map((link, i) => (
                <li key={link.href + i}>
                  <FooterNavLink
                    href={link.href}
                    label={t(link.label)}
                    labelPath={`footerConfig.contentLinks.${i}.label`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h2 className="site-footer__heading" {...cp('footerConfig.questionsTitle')}>
              {t(footer.questionsTitle)}
            </h2>
            <div className="site-footer__contact-block">
              <p className="site-footer__contact-label mb-1" {...cp('footerConfig.quoteTitle')}>
                {t(footer.quoteTitle)}
              </p>
              <a href={`tel:${footer.quotePhoneTel}`} className="site-footer__link site-footer__link--plain" {...cp('footerConfig.quotePhoneDisplay')}>
                {t(footer.quotePhoneDisplay)}
              </a>
            </div>
            <div className="site-footer__contact-block mt-3">
              <p className="site-footer__contact-label mb-1" {...cp('footerConfig.emailTitle')}>
                {t(footer.emailTitle)}
              </p>
              <a href={`mailto:${footer.emailAddress}`} className="site-footer__link site-footer__link--plain" {...cp('footerConfig.emailAddress')}>
                {footer.emailAddress}
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__rule" role="presentation" />

        <div className="site-footer__bottom d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-between gap-2 pt-4">
          <p className="site-footer__legal mb-0 text-center text-lg-start">
            <span id="copyright" {...cp('footerConfig.copyrightReserved')}>
              {copyrightText}
            </span>{' '}
            <span {...cp('footerConfig.madeByLead')}>{t(footer.madeByLead)}</span>{' '}
            <a
              href={footer.madeByHref}
              className="site-footer__legal-link"
              target="_blank"
              rel="noopener noreferrer"
              {...cp('footerConfig.madeByBrand')}
            >
              {t(footer.madeByBrand)}
            </a>
            <span {...cp('footerConfig.madeByTrail')}>{t(footer.madeByTrail)}</span>
          </p>
          <div className="text-center text-lg-end">
            <FooterNavLink
              href={footer.privacyLink.href}
              label={t(footer.privacyLink.label)}
              labelPath="footerConfig.privacyLink.label"
              className="site-footer__privacy-link"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
