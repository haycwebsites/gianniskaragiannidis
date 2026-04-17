/** Scroll to `document.getElementById(id)` (id without `#`). Retries for post-navigation paint. */
export function scheduleScrollToHashSection(sectionId: string) {
  const id = sectionId.replace(/^#/, '');
  const run = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  };
  run();
  const delays = [0, 32, 64, 120, 200, 400, 700, 1200];
  delays.forEach((ms) => window.setTimeout(run, ms));
}
