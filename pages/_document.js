// @flow
/* eslint react/no-danger: 0 */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { GOOGLE_ANALYTICS_ID } from '../core/constants';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>dirtn.app</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            rel="mask-icon"
            href="/static/icons/safari-pinned-tab.svg"
            color="#357edd"
          />
          <meta name="apple-mobile-web-app-title" content="dirtnapp" />
          <meta name="application-name" content="dirtnapp" />
          <meta name="msapplication-TileColor" content="#357edd" />
          <meta
            name="msapplication-TileImage"
            content="/static/icons/mstile-144x144.png"
          />
          <meta name="theme-color" content="#fff" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `,
            }}
          />
          <style jsx global>{`
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, avenir next,
                avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
                segoe ui, arial, sans-serif;
              color: rgba(0, 0, 0, 0.8);
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
