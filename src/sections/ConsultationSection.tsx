import { useCallback, useState } from 'react';
import { useHayc } from '../hayc/config-context';
import { EMAIL_PATTERN } from '../lib/emailPattern';

export default function ConsultationSection() {
  const { t, img, config, cp } = useHayc();
  const h = config.homePageConfig;
  const { siteId, apiUrl } = config.siteConfig;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!name.trim() || !EMAIL_PATTERN.test(email.trim()) || !phone.trim() || !message.trim()) {
        setError(t(h.consultationError));
        return;
      }
      if (!service) {
        setError(t(h.consultationError));
        return;
      }
      if (!apiUrl || !siteId) {
        setError(t(h.consultationError));
        return;
      }
      const serviceLabel =
        h.consultationServiceOptions.find((o) => o.value === service)?.label ?? { el: '', en: '' };
      const body = [
        `Phone: ${phone.trim()}`,
        `Focus: ${t(serviceLabel)}`,
        '',
        message.trim(),
      ].join('\n');

      setLoading(true);
      try {
        const res = await fetch(`${apiUrl}/public/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteId,
            name: name.trim(),
            email: email.trim(),
            message: body,
            _hp: hp,
          }),
        });
        if (!res.ok) throw new Error('fail');
        setDone(true);
      } catch {
        setError(t(h.consultationError));
      } finally {
        setLoading(false);
      }
    },
    [apiUrl, siteId, name, email, phone, service, message, hp, t, h]
  );

  const backdropSrc =
    typeof h.videoBackdropImage === 'string' && h.videoBackdropImage.trim() !== ''
      ? h.videoBackdropImage
      : 'https://giannis-karagiannidis.gr/wp-content/uploads/2026/01/brando-makes-branding-ljurPRAnLAQ-unsplash-scaled.jpg';
  const backdrop = img(backdropSrc);

  const videoLine2 = t(h.videoPresentationLine2).trim();
  const titleLine2 = t(h.consultationTitleLine2).trim();

  if (done) {
    return (
      <section className="vc-section vc-section--success" id="contact">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="fw-semibold" {...cp('homePageConfig.consultationSuccessTitle')}>
                {t(h.consultationSuccessTitle)}
              </h3>
              <p className="mb-0 text-secondary" {...cp('homePageConfig.consultationSuccessText')}>
                {t(h.consultationSuccessText)}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="vc-section" id="contact">
      <div className="vc-hero">
        <div
          className="vc-hero__bg"
          style={{
            backgroundImage: `url(${backdrop})`,
          }}
        />
        <div className="vc-hero__overlay" aria-hidden />
        <div className="vc-hero__watermark" aria-hidden>
          <span className="vc-hero__watermark-line" {...cp('homePageConfig.videoWatermarkLine1')}>
            {t(h.videoWatermarkLine1)}
          </span>
          <span className="vc-hero__watermark-line" {...cp('homePageConfig.videoWatermarkLine2')}>
            {t(h.videoWatermarkLine2)}
          </span>
        </div>
        <div className="vc-hero__inner">
          <a
            href={h.videoYoutubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="vc-play-btn"
            aria-label={t(h.videoPresentationLine1)}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
          <h2 className="vc-hero__title text-white mb-0">
            <span {...cp('homePageConfig.videoPresentationLine1')}>{t(h.videoPresentationLine1)}</span>
            {videoLine2 ? (
              <>
                <br />
                <span {...cp('homePageConfig.videoPresentationLine2')}>{t(h.videoPresentationLine2)}</span>
              </>
            ) : null}
          </h2>
        </div>
      </div>

      <div className="vc-lower">
        <div className="container position-relative">
          <div className="row g-4 g-lg-0 align-items-start">
            <div className="col-lg-6 vc-copy-col">
              <div className="vc-copy">
                <div className="vc-eyebrow mb-3">
                  <span className="vc-eyebrow__text" {...cp('homePageConfig.consultationSubtitle')}>
                    {t(h.consultationSubtitle)}
                  </span>
                  <span className="vc-eyebrow__rule" aria-hidden />
                </div>
                <h2 className="vc-headline">
                  <span {...cp('homePageConfig.consultationTitleLine1')}>{t(h.consultationTitleLine1)}</span>
                  {titleLine2 ? (
                    <>
                      <br />
                      <span {...cp('homePageConfig.consultationTitleLine2')}>{t(h.consultationTitleLine2)}</span>
                    </>
                  ) : null}
                </h2>
                {t(h.consultationBody).trim() ? (
                  <p className="vc-lead text-secondary mt-3 mb-0 d-none d-md-block" {...cp('homePageConfig.consultationBody')}>
                    {t(h.consultationBody)}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="col-lg-5 ms-lg-auto">
              <div className="vc-form-panel">
                <h3 className="vc-form-panel__title" {...cp('homePageConfig.consultationFormTitle')}>
                  {t(h.consultationFormTitle)}
                </h3>
                <form onSubmit={submit} noValidate>
                  <input
                    type="text"
                    name="_hp"
                    className="hayc-nl-hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                  />
                  <div className="cinkes_consultation_form cinkes_contact_form vc-form-fields">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t(h.consultationNamePlaceholder)}
                      disabled={loading}
                      autoComplete="name"
                      {...cp('homePageConfig.consultationNamePlaceholder')}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t(h.consultationEmailPlaceholder)}
                      disabled={loading}
                      autoComplete="email"
                      {...cp('homePageConfig.consultationEmailPlaceholder')}
                    />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t(h.consultationPhonePlaceholder)}
                      disabled={loading}
                      autoComplete="tel"
                      {...cp('homePageConfig.consultationPhonePlaceholder')}
                    />
                    <div className="vc-select-wrap">
                      <select
                        name="service"
                        className="vc-select"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        disabled={loading}
                        required
                        aria-label={t(h.consultationServicePlaceholder)}
                      >
                        <option value="" disabled>
                          {t(h.consultationServicePlaceholder)}
                        </option>
                        {h.consultationServiceOptions.map((opt, i) => (
                          <option key={opt.value + i} value={opt.value}>
                            {t(opt.label)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t(h.consultationMessagePlaceholder)}
                      disabled={loading}
                      rows={5}
                      {...cp('homePageConfig.consultationMessagePlaceholder')}
                    />
                    <button type="submit" className="vc-form-submit" disabled={loading} {...cp('homePageConfig.consultationSubmit')}>
                      {loading ? t(h.consultationSubmitting) : t(h.consultationSubmit)}
                    </button>
                  </div>
                  {error && (
                    <p className="text-danger small mt-2 mb-0" role="alert">
                      {error}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
