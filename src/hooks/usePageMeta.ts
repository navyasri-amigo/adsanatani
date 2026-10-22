import { useEffect } from 'react';

const TITLE = 'AdSanatani — Performance Affiliate Marketing Network';
const DESCRIPTION =
'AdSanatani connects advertisers and publishers through performance-driven affiliate marketing. Reach the right audiences, monetize traffic, and grow together.';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function usePageMeta() {
  useEffect(() => {
    document.title = TITLE;
    document.documentElement.lang = 'en';
    setMeta('name', 'description', DESCRIPTION);
    setMeta('name', 'theme-color', '#171715');
    setMeta('property', 'og:title', TITLE);
    setMeta('property', 'og:description', DESCRIPTION);
    setMeta('property', 'og:url', 'https://adsanatani.com');
    setMeta('property', 'og:type', 'website');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AdSanatani',
      url: 'https://adsanatani.com',
      description: DESCRIPTION
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
}