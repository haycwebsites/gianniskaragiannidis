import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { useHomePageUi } from '../home/home-page-ui';
import { useTemplateInit } from '../lib/useTemplateInit';
import { isExternalHref } from '../lib/isExternalHref';
import { NavRouteLink } from './NavRouteLink';
import type { NavigationLinkEntry } from '../config';

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Navbar() {
  useTemplateInit();
  const { t, img, config, cp } = useHayc();
  const nav = config.navigationConfig;
  const home = config.homePageConfig;
  const homeUi = useHomePageUi();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    queueMicrotask(() => setMobileOpen(false));
  }, [location.pathname, location.hash]);

  function renderNavLink(link: NavigationLinkEntry, index: number) {
    return <NavRouteLink link={link} index={index} className="nav-link" />;
  }

  const logoImg = (
    <img
      src={img(nav.logoSrc)}
      alt={t(nav.logoAlt)}
      className="img-fluid logo-img"
      {...cp('navigationConfig.logoAlt')}
    />
  );

  return (
    <section>
      <header>
        <div className="cinkes_header_area">
          <div className="cinkes_header_main_area header-sticky">
            <div className="container-fluid px-0">
              <div className="row align-items-center g-0">
                <div className="col-6 col-lg-2 d-flex align-items-center justify-content-start ps-0 pe-3">
                  {isExternalHref(nav.homeHref) ? (
                    <a href={nav.homeHref} className="cinkes_logo">
                      {logoImg}
                    </a>
                  ) : (
                    <Link to={nav.homeHref} className="cinkes_logo">
                      {logoImg}
                    </Link>
                  )}
                </div>

                <div className="col-6 col-lg-8 d-flex align-items-center justify-content-end justify-content-lg-center px-3">
                  <nav className="navbar navbar-expand-lg p-0 w-100 justify-content-end justify-content-lg-center">
                    {homeUi && (
                      <div className="d-flex align-items-center me-2 order-lg-0">
                        <button
                          type="button"
                          className="btn btn-link p-2 text-dark"
                          onClick={() => homeUi.openSearch()}
                          aria-label={t(home.searchSubmitAria)}
                        >
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="btn btn-link p-2 text-dark d-lg-none"
                          onClick={() => homeUi.openSidebar()}
                          aria-label={t(home.sidebarOpenAria)}
                        >
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </button>
                      </div>
                    )}
                    <button
                      className="navbar-toggler d-lg-none"
                      type="button"
                      onClick={() => setMobileOpen((o) => !o)}
                      aria-controls="mobileMenu"
                      aria-expanded={mobileOpen}
                      aria-label={t(nav.mobileMenuAriaLabel)}
                    >
                      <span className="navbar-toggler-icon" />
                    </button>

                    <div className="d-none d-lg-flex">
                      <ul className="navbar-nav mb-0">
                        {nav.links.map((link, i) => (
                          <li key={link.href + i} className="nav-item">
                            {renderNavLink(link, i)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>

                <div className="col-lg-2 d-none d-lg-flex justify-content-end align-items-start ps-2 pe-3">
                  <div className="cinkes_header_quick_info d-flex align-items-start gap-2 text-end">
                    <span className="cinkes_quick_icon flex-shrink-0 pt-1">
                      <PhoneIcon />
                    </span>
                    <div className="cinkes_quick_text d-flex flex-column align-items-end gap-1">
                      <span className="d-block" {...cp('navigationConfig.callUsCaption')}>
                        {t(nav.callUsCaption)}
                      </span>
                      <a
                        className="d-block text-break"
                        href={`tel:${nav.phoneTel}`}
                        {...cp('navigationConfig.phoneDisplay')}
                      >
                        {t(nav.phoneDisplay)}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 d-lg-none">
                  <div
                    className={`collapse${mobileOpen ? ' show' : ''}`}
                    id="mobileMenu"
                  >
                    <ul className="navbar-nav text-center py-2">
                      {nav.links
                        .map((link, i) => ({ link, i }))
                        .filter(({ link }) => link.showInMobile)
                        .map(({ link, i }) => (
                          <li key={`m-${link.href}-${i}`} className="nav-item">
                            {renderNavLink(link, i)}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
