import { useHayc } from '../hayc/config-context';

export default function BlogSection() {
  const { t, img, config, cp } = useHayc();
  const h = config.homePageConfig;

  return (
    <div className="cinkes_latest_blog_area pb-80 pt-115">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cinkes_section_title text-center mb-50">
              <h5 className="cinkes_sub_title theme_clr" {...cp('homePageConfig.blogEyebrow')}>
                {t(h.blogEyebrow)}
              </h5>
              <h2 className="cinkes_title" {...cp('homePageConfig.blogTitle')}>
                {t(h.blogTitle)}
              </h2>
            </div>
          </div>
        </div>

        {h.blogPosts.length === 0 ? (
          <p className="text-center text-muted mb-0" {...cp('homePageConfig.blogEmpty')}>
            {t(h.blogEmpty)}
          </p>
        ) : (
          <div className="row g-4">
            {h.blogPosts.map((post, i) => (
              <div key={post.url + i} className="col-md-4">
                <div className="row g-3 flex-column">
                  <div className="col-12">
                    <a href={post.url} className="d-block">
                      <img
                        src={img(post.imageSrc)}
                        alt={t(post.imageAlt)}
                        className="img-fluid w-100 object-fit-cover rounded"
                        style={{ aspectRatio: '4/3' }}
                        loading="lazy"
                        {...cp(`homePageConfig.blogPosts.${i}.imageAlt`)}
                      />
                    </a>
                  </div>
                  <div className="col-12">
                    <h3 className="fw-bold h5">
                      <a href={post.url} className="text-decoration-none text-dark">
                        <span {...cp(`homePageConfig.blogPosts.${i}.title`)}>{t(post.title)}</span>
                      </a>
                    </h3>
                    <a href={post.url} className="cinkes_about_btn mt-4 fs-6 d-inline-block text-decoration-none" {...cp('homePageConfig.blogReadMore')}>
                      {t(h.blogReadMore)}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
