import { useEffect } from 'react';

const useSEO = ({
  title,
  description,
  image = 'https://www.nuzvidagrifarms.com/cdn/shop/files/new_1920x.jpg?v=1759635977',
  url = window.location.href,
  type = 'website',
  productSchema = null
}) => {
  useEffect(() => {
    const defaultTitle = 'Nuzvid Agri Farms - Pure Wood-Pressed Oils & Organic Food';
    const pageTitle = title ? `${title} | Nuzvid Agri Farms` : defaultTitle;
    
    // Update Title
    document.title = pageTitle;

    // Helper to set meta tags
    const setMetaTag = (attr, attrValue, content) => {
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (content) {
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attr, attrValue);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
      } else if (element) {
        element.remove();
      }
    };

    // Standard Meta
    setMetaTag('name', 'description', description || 'Welcome to Nuzvid Agri Farms. Pure wood-pressed oils, A2 Ghee, and organic groceries from our farm to your table.');

    // Open Graph
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', description || '');
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:type', type);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', description || '');
    setMetaTag('name', 'twitter:image', image);

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url.split('?')[0]); // Removes query params

    // JSON-LD Structured Data
    let schemaScript = document.querySelector('#schema-markup');
    if (productSchema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('id', 'schema-markup');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(productSchema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

  }, [title, description, image, url, type, productSchema]);
};

export default useSEO;
