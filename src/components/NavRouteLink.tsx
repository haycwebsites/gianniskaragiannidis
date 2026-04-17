import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useHayc } from '../hayc/config-context';
import { isExternalHref } from '../lib/isExternalHref';
import { navHrefToTo } from '../lib/navHrefToTo';
import { scheduleScrollToHashSection } from '../lib/scrollToHashSection';
import type { NavigationLinkEntry } from '../config';

type NavRouteLinkProps = {
  link: NavigationLinkEntry;
  index: number;
  className?: string;
  onClick?: () => void;
};

export function NavRouteLink({ link, index, className = 'nav-link', onClick }: NavRouteLinkProps) {
  const { t, cp } = useHayc();
  const navigate = useNavigate();
  const location = useLocation();
  const labelPath = `navigationConfig.links.${index}.label`;
  const labelProps = cp(labelPath);
  const text = t(link.label);

  if (isExternalHref(link.href)) {
    return (
      <a href={link.href} className={className} onClick={onClick} {...labelProps}>
        {text}
      </a>
    );
  }

  if (link.href.startsWith('/#')) {
    const sectionId = link.href.slice(2).replace(/^#/, '');
    const targetHash = `#${sectionId}`;

    return (
      <a
        href={`/#${sectionId}`}
        className={className}
        {...labelProps}
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
          if (location.pathname === '/' && location.hash === targetHash) {
            scheduleScrollToHashSection(sectionId);
            return;
          }
          void navigate({ pathname: '/', hash: targetHash });
          scheduleScrollToHashSection(sectionId);
        }}
      >
        {text}
      </a>
    );
  }

  return (
    <Link className={className} to={navHrefToTo(link.href)} onClick={onClick} {...labelProps}>
      {text}
    </Link>
  );
}
