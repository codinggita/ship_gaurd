import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, name, type }) {
  const siteTitle = "ShipGuard OS";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "Tactical logistics platform for real-time tracking and fleet management.";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      {keywords && <meta name='keywords' content={keywords} />}
      
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || 'ShipGuard'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
