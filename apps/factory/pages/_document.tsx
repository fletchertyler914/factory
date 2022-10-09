import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => (
  <Html className="h-full w-full">
    <Head>
      <Script strategy="beforeInteractive" src="scripts/theme.js" />
    </Head>
    <body className="h-full w-full bg-white dark:bg-gray-800 overflow-hidden">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
