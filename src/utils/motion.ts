export const easeOut = [0.23, 1, 0.32, 1] as const;

export function scrollToSection(id: string) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}