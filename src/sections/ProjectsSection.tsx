import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHayc } from '../hayc/config-context';

export default function ProjectsSection() {
  const { t, img, config, cp } = useHayc();
  const h = config.homePageConfig;

  return (
    <div className="cinkes_project_area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cinkes_section_title text-center mb-40">
              <h5 className="cinkes_sub_title theme_clr" {...cp('homePageConfig.projectsEyebrow')}>
                {t(h.projectsEyebrow)}
              </h5>
              <h2 className="cinkes_title" {...cp('homePageConfig.projectsTitle')}>
                {t(h.projectsTitle)}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="nav cinkes_projects_button mb-40 list-unstyled d-flex justify-content-center gap-2" role="tablist">
              <li role="presentation">
                <button
                  type="button"
                  className="cinkes_tab_btn cinkes_tab_btn_underline active disabled"
                  style={{ cursor: 'default' }}
                  disabled
                  {...cp('homePageConfig.projectsTabLabel')}
                >
                  {t(h.projectsTabLabel)}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects_container_wrapper overflow-x-hidden">
        <div className="tab-content">
          <div className="tab-pane fade show active" role="tabpanel">
            <div className="projects-swiper-shell position-relative px-2 px-md-4 px-xl-5">
              <Swiper
                modules={[Navigation, Pagination]}
                className="cinkes_project_container projects-swiper"
                centeredSlides
                loop={h.projectSlides.length > 1}
                speed={600}
                slidesPerView="auto"
                spaceBetween={20}
                navigation
                pagination={{ clickable: true, dynamicBullets: false }}
                breakpoints={{
                  0: { spaceBetween: 14 },
                  576: { spaceBetween: 18 },
                  992: { spaceBetween: 24 },
                }}
              >
                {h.projectSlides.map((slide, i) => (
                  <SwiperSlide key={`${slide.backgroundImage}-${i}`} className="cinkes_project_slide projects-swiper-slide">
                    <div
                      className="cinkes_slide_content projects-slide-card d-flex align-items-end p-3 p-md-4 text-white"
                      style={{
                        backgroundImage: `url(${img(slide.backgroundImage)})`,
                      }}
                    >
                      <span className="fw-semibold projects-slide-label" {...cp(`homePageConfig.projectSlides.${i}.label`)}>
                        {t(slide.label)}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
