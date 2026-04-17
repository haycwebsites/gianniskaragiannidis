import { Fragment } from 'react';
import { useHayc } from '../hayc/config-context';

export default function AboutPageExperience() {
  const { t, img, config, cp } = useHayc();
  const p = config.aboutPageConfig;
  const hasBg = p.experienceBackgroundImage.trim() !== '';
  const sectionStyle = hasBg
    ? {
        backgroundImage: `linear-gradient(rgba(248, 249, 251, 0.92), rgba(248, 249, 251, 0.92)), url(${img(p.experienceBackgroundImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined;

  return (
    <section className="about-results-section pt-115 pb-90" style={sectionStyle}>
      <div className="container">
        <header className="about-results-header text-center mb-4 mb-lg-5">
          <div className="about-results-eyebrow d-flex justify-content-center align-items-center gap-3 flex-wrap mb-3">
            <span className="about-results-eyebrow-line" aria-hidden="true" />
            <span className="about-results-eyebrow-text" {...cp('aboutPageConfig.experienceEyebrow')}>
              {t(p.experienceEyebrow)}
            </span>
            <span className="about-results-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 className="about-results-title mb-0" {...cp('aboutPageConfig.experienceTitle')}>
            {t(p.experienceTitle)}
          </h2>
        </header>

        <div className="about-results-card">
          <div className="about-results-grid">
            {p.experienceItems.map((item, i) => (
              <Fragment key={i}>
                {i > 0 ? <span className="about-results-sep" aria-hidden="true" /> : null}
                <div className="about-results-item">
                  <h3 className="about-results-item-title" {...cp(`aboutPageConfig.experienceItems.${i}.title`)}>
                    {t(item.title)}
                  </h3>
                  <p className="about-results-item-desc mb-0" {...cp(`aboutPageConfig.experienceItems.${i}.description`)}>
                    {t(item.description)}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
