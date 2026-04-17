import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { useHomePageUi } from '../home/home-page-ui';
import { isExternalHref } from '../lib/isExternalHref';
import { NavRouteLink } from '../components/NavRouteLink';
import type { HomeSidebarSocial } from '../home-page-defaults';
import type { NavigationLinkEntry } from '../config';

function SidebarSocialIcon({ network }: { network: HomeSidebarSocial['network'] }) {
  const c = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor' as const, 'aria-hidden': true as const };
  switch (network) {
    case 'facebook':
      return (
        <svg {...c}>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...c}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...c}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg {...c}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function OffcanvasSidebar() {
  const ui = useHomePageUi();
  const { t, img, config, cp } = useHayc();
  const home = config.homePageConfig;
  const nav = config.navigationConfig;
  const location = useLocation();

  useEffect(() => {
    ui?.closeSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only react to route changes
  }, [location.pathname, location.hash]);

  if (!ui?.sidebarOpen) return null;

  function renderNavLink(link: NavigationLinkEntry, index: number) {
    return (
      <NavRouteLink
        link={link}
        index={index}
        className="nav-link py-2"
        onClick={() => ui?.closeSidebar()}
      />
    );
  }

  return (
    <>
      <button
        type="button"
        className="offwrap show border-0"
        aria-hidden
        onClick={() => ui?.closeSidebar()}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1055,
          background: 'rgba(0,0,0,0.45)',
        }}
      />
      <nav className="right_menu_togle show" aria-label="Sidebar">
        <div className="offset-widget offset-logo mb-30 pb-20 px-3">
          <div className="row align-items-center">
            <div className="col-8">
              {isExternalHref(home.sidebarHomeHref) ? (
                <a href={home.sidebarHomeHref} className="mobile_logo">
                  <img src={img(home.sidebarLogoSrc)} alt={t(home.sidebarLogoAlt)} className="img-fluid" {...cp('homePageConfig.sidebarLogoAlt')} />
                </a>
              ) : (
                <Link to={home.sidebarHomeHref} className="mobile_logo" onClick={() => ui?.closeSidebar()}>
                  <img src={img(home.sidebarLogoSrc)} alt={t(home.sidebarLogoAlt)} className="img-fluid" {...cp('homePageConfig.sidebarLogoAlt')} />
                </Link>
              )}
            </div>
            <div className="col-4 text-end">
              <button
                type="button"
                id="nav-close"
                className="nav-close btn btn-link p-0"
                onClick={() => ui?.closeSidebar()}
                aria-label={t(home.sidebarCloseAria)}
                {...cp('homePageConfig.sidebarCloseAria')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mobile_menu fix px-3">
          <ul className="navbar-nav flex-column">
            {nav.links.map((link, i) => (
              <li key={link.href + i} className="nav-item border-bottom">
                {renderNavLink(link, i)}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-infos mt-40 px-3 pb-4">
          <div className="contact-list mobile_contact mb-40">
            <h4 className="h6" {...cp('homePageConfig.sidebarContactTitle')}>
              {t(home.sidebarContactTitle)}
            </h4>
            <span className="sidebar-address d-flex gap-2 small mb-2">
              <svg width="18" height="18" className="flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span {...cp('homePageConfig.sidebarAddress')}>{t(home.sidebarAddress)}</span>
            </span>
            <a href={`tel:${home.sidebarPhoneTel}`} className="d-flex gap-2 small mb-2 text-decoration-none" {...cp('homePageConfig.sidebarPhoneDisplay')}>
              <svg width="18" height="18" className="flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{t(home.sidebarPhoneDisplay)}</span>
            </a>
            <a href={`mailto:${home.sidebarEmail}`} className="d-flex gap-2 small text-decoration-none" {...cp('homePageConfig.sidebarEmail')}>
              <svg width="18" height="18" className="flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{home.sidebarEmail}</span>
            </a>
          </div>

          <div className="top_social footer_social offset_social mt-40 mb-30 d-flex gap-2 flex-wrap">
            {home.sidebarSocials.map((s, i) => (
              <a
                key={s.href + i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-decoration-none text-dark ${s.network}`}
                aria-label={t(s.label)}
                {...cp(`homePageConfig.sidebarSocials.${i}.label`)}
              >
                <SidebarSocialIcon network={s.network} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
