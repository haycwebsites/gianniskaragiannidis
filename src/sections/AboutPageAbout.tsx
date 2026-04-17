import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { isExternalHref } from '../lib/isExternalHref';

export default function AboutPageAbout() {
  const { t, img, config, cp } = useHayc();
  const p = config.aboutPageConfig;
  const bg =
    p.aboutBackgroundImage.trim() !== ''
      ? { backgroundImage: `url(${img(p.aboutBackgroundImage)})` }
      : undefined;

  const cta = (
    <>
      {t(p.aboutCtaLabel)}
      <PlusIcon />
    </>
  );

  return (
    <div className="cinkes_about_area pt-120 pb-80" style={bg}>
      <div className="container-fluid custom-container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-10">
            <div className="cinkes_about_img_wrapper mb-40">
              <div className="cinkes_about_img cinkes_about1_img">
                <img
                  src={img(p.aboutImageSrc)}
                  alt={t(p.aboutImageAlt)}
                  {...cp('aboutPageConfig.aboutImageAlt')}
                />
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-10">
            <div className="cinkes_about_content_wrapper cinkes_about1_content_wrapper mb-40 pl-70">
              <h4 className="cinkes_about_subtitle" {...cp('aboutPageConfig.aboutSubtitle')}>
                {t(p.aboutSubtitle)}
              </h4>

              <h2 className="cinkes_about_title mb-30">
                <span {...cp('aboutPageConfig.aboutTitleLine1')}>{t(p.aboutTitleLine1)}</span>
                <br />
                <span {...cp('aboutPageConfig.aboutTitleLine2')}>{t(p.aboutTitleLine2)}</span>
              </h2>

              {p.aboutParagraphs.map((para, i) => (
                <p key={i} {...cp(`aboutPageConfig.aboutParagraphs.${i}`)}>
                  {t(para)}
                </p>
              ))}

              <div className="cinkes_list_wrapper cinkes_list1_wrapper mt-40">
                <ul>
                  {p.aboutList.map((item, i) => (
                    <li key={i}>
                      <CheckIcon />
                      <span {...cp(`aboutPageConfig.aboutList.${i}`)}>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cinkes_about_button mt-40">
                {isExternalHref(p.aboutCtaHref) ? (
                  <a href={p.aboutCtaHref} className="cinkes_about_btn i_right text-decoration-none" {...cp('aboutPageConfig.aboutCtaLabel')}>
                    {cta}
                  </a>
                ) : (
                  <Link to={p.aboutCtaHref} className="cinkes_about_btn i_right text-decoration-none" {...cp('aboutPageConfig.aboutCtaLabel')}>
                    {cta}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" className="me-2 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" className="ms-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
