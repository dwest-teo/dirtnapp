// @flow
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TWITTER_HANDLE, PROD_URL } from '../core/constants';

type Props = {
  title: ?string,
  description: ?string,
  // eslint-disable-next-line react/require-default-props
  image?: ?string,
};

export default ({ title, description, image }: Props) => {
  const router = useRouter();

  const getCanonicalUrl = () => {
    if (router && router.asPath) {
      return `${PROD_URL}/${router.asPath.replace(/^\/+/g, '')}`;
    }

    return null;
  };

  const canonicalUrl = getCanonicalUrl();

  return (
    <Head>
      <title>{title || 'dirtn.app'}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      {canonicalUrl && (
        <>
          <meta
            name="twitter:url"
            property="og:url"
            content={getCanonicalUrl()}
          />
          <link rel="canonical" href={getCanonicalUrl()} />
        </>
      )}
      {title && (
        <>
          <meta name="twitter:title" property="og:title" content={title} />
          <meta property="og:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta
            name="twitter:description"
            property="og:description"
            content={description}
          />
          <meta name="description" content={description} />
        </>
      )}
      {image && (
        <meta name="twitter:image" property="og:image" content={image} />
      )}
    </Head>
  );
};
