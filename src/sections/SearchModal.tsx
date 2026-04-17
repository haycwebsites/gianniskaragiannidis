import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { useHomePageUi } from '../home/home-page-ui';

export default function SearchModal() {
  const ui = useHomePageUi();
  const { t, config, cp } = useHayc();
  const home = config.homePageConfig;
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const q = String(fd.get('q') ?? '').trim();
      ui?.closeSearch();
      if (q) navigate(`/?q=${encodeURIComponent(q)}`);
    },
    [navigate, ui]
  );

  if (!ui?.searchOpen) return null;

  return (
    <>
      <button
        type="button"
        className="modal-backdrop fade show border-0 w-100"
        aria-hidden
        onClick={() => ui.closeSearch()}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1040,
          background: 'rgba(0,0,0,0.55)',
        }}
      />
      <div
        className="modal fade search-modal show"
        id="searchModal"
        role="dialog"
        aria-modal="true"
        style={{ display: 'block', zIndex: 1050 }}
      >
        <button
          type="button"
          className="close btn btn-link position-fixed top-0 end-0 m-3 text-white"
          onClick={() => ui.closeSearch()}
          aria-label={t(home.searchCloseAria)}
          {...cp('homePageConfig.searchCloseAria')}
        >
          <span className="close-search" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </span>
        </button>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className="search-block clearfix">
              <form onSubmit={onSubmit}>
                <div className="form-group d-flex gap-2">
                  <input
                    name="q"
                    className="form-control"
                    placeholder={t(home.searchPlaceholder)}
                    type="search"
                    autoFocus
                    {...cp('homePageConfig.searchPlaceholder')}
                  />
                  <button
                    type="submit"
                    className="btn btn-light"
                    aria-label={t(home.searchSubmitAria)}
                    {...cp('homePageConfig.searchSubmitAria')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
