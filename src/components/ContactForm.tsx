import { useState, useCallback } from 'react';
import { useHayc } from '../hayc/config-context';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const { t, config, cp } = useHayc();
  const cf = config.contactPageConfig;
  const siteId = config.siteConfig.siteId;
  const apiUrl = config.siteConfig.apiUrl;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hp, setHp] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = useCallback((): boolean => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errors.name = t(cf.contactFormNameRequired);
    if (!EMAIL_PATTERN.test(email.trim())) errors.email = t(cf.contactFormEmailInvalid);
    if (!message.trim()) errors.message = t(cf.contactFormMessageRequired);
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [name, email, message, t, cf]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!validate()) return;

      if (!apiUrl || !siteId) {
        setError(t(cf.contactFormError));
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`${apiUrl}/public/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            siteId,
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            _hp: hp,
          }),
        });
        if (!res.ok) throw new Error('Request failed');
        setSubmitted(true);
      } catch {
        setError(t(cf.contactFormError));
      } finally {
        setLoading(false);
      }
    },
    [apiUrl, siteId, name, email, message, hp, validate, t, cf]
  );

  if (submitted) {
    return (
      <>
        <style>{`
          .contact-form-success { text-align: center; }
          .contact-form-success h3 {
            margin: 0 0 0.5rem;
            font-size: 1.125rem;
            font-weight: 600;
          }
          .contact-form-success p {
            margin: 0;
            font-size: 0.875rem;
            color: #71717a;
          }
        `}</style>
        <div className="contact-form-success">
          <h3 {...cp('contactPageConfig.contactFormSuccessTitle')}>{t(cf.contactFormSuccessTitle)}</h3>
          <p {...cp('contactPageConfig.contactFormSuccessText')}>{t(cf.contactFormSuccessText)}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .contact-form-label {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .contact-form-input,
        .contact-form-textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 0.5rem 0.75rem;
          font: inherit;
          font-size: 1rem;
          line-height: 1.5;
          border: 1px solid #d4d4d8;
          border-radius: 0.375rem;
          background: #fff;
          color: inherit;
        }
        .contact-form-textarea {
          min-height: 6rem;
          resize: vertical;
        }
        .contact-form-input:disabled,
        .contact-form-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .contact-form-input[aria-invalid="true"],
        .contact-form-textarea[aria-invalid="true"] {
          border-color: #dc2626;
        }
        .contact-form-button {
          width: 100%;
          padding: 0.5rem 1rem;
          font: inherit;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
          border-radius: 0.375rem;
          background: #18181b;
          color: #fafafa;
        }
        .contact-form-button:hover:not(:disabled) {
          background: #27272a;
        }
        .contact-form-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .contact-form-error {
          margin: 0;
          font-size: 0.875rem;
          color: #dc2626;
        }
      `}</style>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <input
          type="text"
          name="_hp"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
          style={{ display: 'none' }}
          aria-hidden
        />

        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="contact-name" {...cp('contactPageConfig.contactFormNameLabel')}>
            {t(cf.contactFormNameLabel)}
          </label>
          <input
            id="contact-name"
            className="contact-form-input"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
            }}
            disabled={loading}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
          />
          {fieldErrors.name && (
            <p id="contact-name-error" className="contact-form-error" {...cp('contactPageConfig.contactFormNameRequired')}>
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="contact-email" {...cp('contactPageConfig.contactFormEmailLabel')}>
            {t(cf.contactFormEmailLabel)}
          </label>
          <input
            id="contact-email"
            className="contact-form-input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }}
            disabled={loading}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
          />
          {fieldErrors.email && (
            <p id="contact-email-error" className="contact-form-error" {...cp('contactPageConfig.contactFormEmailInvalid')}>
              {fieldErrors.email}
            </p>
          )}
        </div>

        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="contact-message" {...cp('contactPageConfig.contactFormMessageLabel')}>
            {t(cf.contactFormMessageLabel)}
          </label>
          <textarea
            id="contact-message"
            className="contact-form-textarea"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (fieldErrors.message) setFieldErrors((prev) => ({ ...prev, message: undefined }));
            }}
            disabled={loading}
            rows={4}
            aria-invalid={!!fieldErrors.message}
            aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
          />
          {fieldErrors.message && (
            <p id="contact-message-error" className="contact-form-error" {...cp('contactPageConfig.contactFormMessageRequired')}>
              {fieldErrors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="contact-form-button"
          disabled={loading}
          {...cp('contactPageConfig.contactFormSubmit')}
        >
          {loading ? t(cf.contactFormSubmitting) : t(cf.contactFormSubmit)}
        </button>

        {error && (
          <p className="contact-form-error" role="alert" {...cp('contactPageConfig.contactFormError')}>
            {error}
          </p>
        )}
      </form>
    </>
  );
}
