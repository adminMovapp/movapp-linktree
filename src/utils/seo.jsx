import { siteConfig } from './config.jsx';

// Generar meta tags SEO
export function generateSEOTags(props = {}) {
   const site = siteConfig.site || {}; // Ensure `siteConfig.site` is defined

   const {
      title = `${site.name || 'Erik Mann'} - ${site.title || 'Erik Mann'}`,
      description = site.description || 'Erik Mann, Lider de Movapp, Creador de contenido',
      keywords = site.keywords || 'default, keywords',
      image = siteConfig.defaultImage,
      type = 'website',
      url = siteConfig.siteUrl,
      author = site.author || 'Default Author',
      publishedTime,
      modifiedTime,
      noIndex = false,
   } = props;

   let canonicalUrl = '';
   try {
      canonicalUrl = new URL(url || '', siteConfig.canonicalUrl || siteConfig.siteUrl).href;
   } catch (error) {
      console.error('Error generating canonical URL:', error);
      canonicalUrl = siteConfig.siteUrl; // Fallback to a default URL
   }

   return {
      title,
      description,
      keywords,
      image,
      type,
      url,
      author,
      publishedTime,
      modifiedTime,
      canonical: canonicalUrl,
      robots: noIndex || siteConfig.noIndex ? 'noindex, nofollow' : siteConfig.robotsContent,
   };
}

// Generar Schema.org para la organización
export function generateOrganizationSchema() {
   const business = siteConfig.business || {};
   const social = siteConfig.social || {};

   return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.site.name || 'Default Name',
      description: siteConfig.site.description || 'Default Description',
      url: siteConfig.canonicalUrl || siteConfig.siteUrl,
      logo: `${siteConfig.canonicalUrl || siteConfig.siteUrl}${siteConfig.assets.logo || ''}`,
      contactPoint: {
         '@type': 'ContactPoint',
         contactType: business.contactType || 'customer service',
         availableLanguage: business.availableLanguage || ['en'],
      },
      sameAs: [
         social.facebook || '',
         social.twitter ? social.twitter.replace('@', 'https://twitter.com/') : '',
         social.instagram || '',
      ].filter(Boolean), // Remove empty values
      areaServed: {
         '@type': 'Country',
         name: business.country || 'Default Country',
      },
      serviceType: business.serviceType || 'Default Service',
   };
}
