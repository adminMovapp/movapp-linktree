import { siteConfig as siteConfigData } from './infoSite.jsx';

// Configuración centralizada
export const siteConfig = {
   // Datos de la configuración
   ...siteConfigData,

   // Asumimos que el entorno es producción por defecto
   environment: 'production',
   isDev: false,
   isStaging: false,
   isProduction: true,
   debugMode: false,

   // URL fija desde infoSite
   siteUrl: siteConfigData.url,
   canonicalUrl: siteConfigData.canonicalUrl,

   // Control de indexación
   get noIndex() {
      return this.isStaging || this.isDev;
   },

   robotsContent: 'index, follow',

   // URLs de assets
   get logoUrl() {
      return `${this.siteUrl}${this.assets.logo}`;
   },

   get defaultImage() {
      return `${this.siteUrl}${this.assets.defaultOgImage}`;
   },
};
