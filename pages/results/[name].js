// @flow
import React, { PureComponent } from 'react';
import fetch from 'isomorphic-fetch';
import Link from 'next/link';
import Main from '../../components/main';
import OG from '../../components/og';
import Result, { type ResultItem } from '../../components/result';
import ResultHeading from '../../components/result/result-heading';
import Anchor from '../../components/anchor';
import titleCase from '../../core/utils/title-case';
import { DEV_URL, PROD_URL } from '../../core/constants';

type Props = {
  name: string,
  results: Array<ResultItem>,
};

const BASE_URL = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

export default class Results extends PureComponent<Props, *> {
  static getInitialProps = async ({ query }: { query: Object }) => {
    const { name } = await query;
    const results = await fetch(`${BASE_URL}/api/${titleCase(name)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    })
      .then(res => res.json())
      .catch(err => console.error(err));

    return { name, results };
  };

  render() {
    const { name, results } = this.props;

    if (results.length === 0) {
      return (
        <Main>
          <OG
            title={`${name} | dirtn.app`}
            description={`Find out if ${name} is alive or dead at dirtn.app`}
          />
          <ResultHeading>sorry, no info found for {name}</ResultHeading>
          <Link passHref href="/">
            <Anchor>check another person</Anchor>
          </Link>
        </Main>
      );
    }

    const firstResultWithImage = results.find(
      r => r.picture && r.picture.length > 0
    );

    return (
      <Main>
        <OG
          title={`${name} | dirtn.app`}
          description={`Find out if ${name} is alive or dead at dirtn.app`}
          image={firstResultWithImage ? firstResultWithImage.picture : null}
        />
        {results.length > 1 && <h1>multiple people found:</h1>}
        <ul className="results">
          {results.map(r => (
            // $FlowFixMe
            <Result key={r.id.value} {...r} />
          ))}
        </ul>
        <Link passHref href="/">
          <Anchor>check another person</Anchor>
        </Link>
        <style jsx>{`
          h1 {
            font-size: 1.25rem;
            font-weight: 600;
            display: block;
            margin: 1em 0;
          }
          .results {
            width: 100%;
            margin: 0 auto 2em;
            padding: 0;
            list-style-type: none;
          }
        `}</style>
      </Main>
    );
  }
}
