import React from 'react';

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <style jsx global>{`
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
          helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
          sans-serif;
        color: rgba(0, 0, 0, 0.8);
      }
    `}</style>
  </>
);
