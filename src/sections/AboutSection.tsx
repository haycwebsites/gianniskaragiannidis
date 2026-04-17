import { useHayc } from '../hayc/config-context';

export default function AboutSection() {
  const { t, img, config, cp } = useHayc();
  const h = config.homePageConfig;
  const bg =
    h.aboutBackgroundImage.trim() !== ''
      ? { backgroundImage: `url(${img(h.aboutBackgroundImage)})` }
      : undefined;

  return (
    <div className="cinkes_about_area pt-125 pb-165" style={bg}>
      <div className="container-fluid custom-container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-10">
            <div className="cinkes_about_img_wrapper mb-40">
              <div className="cinkes_about_img cinkes_about1_img">
                <img src={img(h.aboutImageSrc)} alt={t(h.aboutImageAlt)} {...cp('homePageConfig.aboutImageAlt')} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-10">
            <div className="cinkes_about_content_wrapper cinkes_about1_content_wrapper mb-40 pl-70">
              <h4 className="cinkes_about_subtitle" {...cp('homePageConfig.aboutSubtitle')}>
                {t(h.aboutSubtitle)}
              </h4>
              <h2 className="cinkes_about_title mb-30" {...cp('homePageConfig.aboutTitle')}>
                {t(h.aboutTitle)}
              </h2>
              <p {...cp('homePageConfig.aboutBody')}>{t(h.aboutBody)}</p>
              <div className="cinkes_list_wrapper cinkes_list1_wrapper mt-40">
                <ul>
                  {h.aboutList.map((item, i) => (
                    <li key={i}>
                      <CheckIcon />
                      <span {...cp(`homePageConfig.aboutList.${i}`)}>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cinkes_about_button mt-40">
                <a href={h.aboutCtaHref} className="cinkes_about_btn i_right text-decoration-none" {...cp('homePageConfig.aboutCtaLabel')}>
                  {t(h.aboutCtaLabel)}
                  <PlusIcon />
                </a>
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
