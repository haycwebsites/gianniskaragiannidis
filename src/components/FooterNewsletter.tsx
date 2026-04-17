import { useCallback, useState } from 'react';
import { useHayc } from '../hayc/config-context';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M4 12h16" strokeLinecap="round" />
      <path d="M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FooterNewsletter() {
  const { t, config, cp } = useHayc();
  const footer = config.footerConfig;
  const { siteId, apiUrl } = config.siteConfig;
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!EMAIL_PATTERN.test(email.trim())) {
        setError(t(footer.newsletterError));
        return;
      }
      if (!apiUrl || !siteId) {
        setError(t(footer.newsletterError));
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(`${apiUrl}/public/newsletter`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteId,
            email: email.trim(),
            _hp: hp,
          }),
        });
        if (!res.ok) throw new Error('Request failed');
        setDone(true);
      } catch {
        setError(t(footer.newsletterError));
      } finally {
        setLoading(false);
      }
    },
    [apiUrl, siteId, email, hp, t, footer.newsletterError]
  );

  if (done) {
    return (
      <p className="footer-nl-success mb-0 small" {...cp('footerConfig.newsletterSuccess')}>
        {t(footer.newsletterSuccess)}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="footer-nl-form">
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
      <div className="footer-nl-combo">
        <input
          type="email"
          name="email"
          className="footer-nl-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t(footer.newsletterPlaceholder)}
          disabled={loading}
          autoComplete="email"
          {...cp('footerConfig.newsletterPlaceholder')}
        />
        <button
          type="submit"
          className="footer-nl-submit"
          disabled={loading}
          {...cp('footerConfig.newsletterSubmit')}
          aria-label={t(footer.newsletterSubmit)}
          title={t(footer.newsletterSubmit)}
        >
          {loading ? <span className="footer-nl-spinner" aria-hidden /> : <ArrowRightIcon />}
        </button>
      </div>
      {error && (
        <p className="footer-nl-error mb-0 mt-2 small" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
