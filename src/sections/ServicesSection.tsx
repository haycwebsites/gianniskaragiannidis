import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { isExternalHref } from '../lib/isExternalHref';
import type { HomeServiceCard } from '../config';

function LightbulbIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18h6M10 22h4M12 2v1M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

function ServiceCard({ card, i }: { card: HomeServiceCard; i: number }) {
  const { t, cp } = useHayc();
  const cls = 'svc-card d-flex flex-column align-items-center text-center h-100 text-decoration-none';
  const body = (
    <>
      <h3 className="svc-card__title mb-3" {...cp(`homePageConfig.servicesCards.${i}.title`)}>
        {t(card.title)}
      </h3>
      <p className="svc-card__body mb-0 flex-grow-1" {...cp(`homePageConfig.servicesCards.${i}.body`)}>
        {t(card.body)}
      </p>
      <div className="svc-card__icon-wrap mt-4" aria-hidden>
        <LightbulbIcon />
      </div>
    </>
  );

  if (isExternalHref(card.titleHref)) {
    return (
      <a href={card.titleHref} className={cls}>
        {body}
      </a>
    );
  }
  return (
    <Link to={card.titleHref} className={cls}>
      {body}
    </Link>
  );
}

export default function ServicesSection() {
  const { t, config, cp } = useHayc();
  const { servicesEyebrow, servicesTitle, servicesCards } = config.homePageConfig;

  return (
    <div className="services_area services-area-v2 pt-115 pb-90">
      <div className="container" id="services">
        <header className="services-header text-center mb-5 mb-lg-5">
          <div className="services-eyebrow d-flex justify-content-center align-items-center gap-3 flex-wrap mb-3">
            <span className="services-eyebrow__line" aria-hidden />
            <span className="services-eyebrow__text" {...cp('homePageConfig.servicesEyebrow')}>
              {t(servicesEyebrow)}
            </span>
            <span className="services-eyebrow__line" aria-hidden />
          </div>
          <h2 className="services-heading mb-0" {...cp('homePageConfig.servicesTitle')}>
            {t(servicesTitle)}
          </h2>
        </header>
        <div className="row g-4 g-lg-4 justify-content-center">
          {servicesCards.map((card, i) => (
            <div key={i} className="col-lg-4 col-md-6 d-flex">
              <ServiceCard card={card} i={i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
