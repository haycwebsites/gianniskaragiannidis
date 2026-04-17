import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { isExternalHref } from '../lib/isExternalHref';

export default function HeroSlider() {
  const { t, img, config, cp } = useHayc();
  const slides = config.homePageConfig.heroSlides;

  return (
    <div className="cinkes_slider_area cinkes_slider_area-1 position-relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        speed={800}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        className="slider-active hero-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="cinkes_slide cinkes_slide_height position-relative">
            <div
              className="cinkes_slide_bg"
              style={{
                backgroundImage: `url(${img(slide.backgroundImage)})`,
              }}
            />
            <div className="cinkes_slide_wrapper">
              <div className="cinkes_slider_section">
                <div className="container-fluid custom-container">
                  <div className="row align-items-center min-vh-hero-inner">
                    <div className="col-12 col-xxl-11">
                      <div className="cinkes_slider_content hero-slider-copy text-start">
                        <h2
                          className="cinkes_slider_title text-white"
                          {...cp(`homePageConfig.heroSlides.${i}.title`)}
                        >
                          {t(slide.title)}
                        </h2>
                        <p
                          className="cinkes_slider_subtitle text-white"
                          {...cp(`homePageConfig.heroSlides.${i}.subtitle`)}
                        >
                          {t(slide.subtitle)}
                        </p>
                        <div className="cinkes_slide_button">
                          {isExternalHref(slide.ctaHref) ? (
                            <a
                              href={slide.ctaHref}
                              className="slide_btn has_icon_right text-decoration-none"
                              {...cp(`homePageConfig.heroSlides.${i}.ctaLabel`)}
                            >
                              {t(slide.ctaLabel)}
                              <ChevronRight />
                            </a>
                          ) : (
                            <Link
                              to={slide.ctaHref}
                              className="slide_btn has_icon_right text-decoration-none"
                              {...cp(`homePageConfig.heroSlides.${i}.ctaLabel`)}
                            >
                              {t(slide.ctaLabel)}
                              <ChevronRight />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg className="slide_btn_icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M13 17l5-5-5-5M6 12h12" />
    </svg>
  );
}
