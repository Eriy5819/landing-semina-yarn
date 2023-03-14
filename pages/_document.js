import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script
          src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js'
          strategy='beforeInteractive'
        ></Script>
        <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js'
          strategy='beforeInteractive'
        ></Script>
      </body>
    </Html>
  );
}
