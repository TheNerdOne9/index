import Head from 'next/head';

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
const name = 'Diogo Salvador';
const twitterHandle = '@ghostpwner';
const defaultOgImage = `${siteUrl}/social-image.png`;
import { randomBytes } from 'crypto';
const nonce = randomBytes(128).toString('base64');
/*https://github.com/vercel/next.js/issues/43743 -> NextJS depends on unsafe-inline on script-src.*/
const cspHeader = `
    default-src 'self' https://*.google-analytics.com https://*.googletagmanager.com;
    script-src 'unsafe-eval' 'unsafe-inline' http://localhost:3000 https://*.googletagmanager.com blob:;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://*.google-analytics.com https://*.googletagmanager.com;
    font-src 'self';
    object-src 'self' blob:;
    base-uri 'self';
    form-action 'self';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;

export const Meta = ({ title, description, prefix = name, ogImage = defaultOgImage }) => {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  
  return (
    <Head nonce={nonce}>
      <meta httpEquiv="Content-Security-Policy" content={cspHeader} />
      <title key="title">{titleText}</title>
      <meta key="description" name="description" content={description} />
      <meta name="author" content={name} />

      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Banner for the site" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />

      <meta property="og:title" content={titleText} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
    
  );
};
