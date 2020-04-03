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
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          <meta httpEquiv="x-dns-prefetch-control" content="on" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="apple-mobile-web-app-title" content="dirtnapp" />
          <meta name="application-name" content="dirtnapp" />
          <meta name="msapplication-TileColor" content="#357edd" />
          <meta name="theme-color" content="#fff" />
          <link rel="shortcut icon" href="/favicon.ico" />
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
