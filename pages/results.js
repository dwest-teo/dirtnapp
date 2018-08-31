// @flow
/* eslint react/no-unused-prop-types: 0 */
import React, { PureComponent } from 'react';
import fetch from 'isomorphic-fetch';
import Main from '../components/main';
import ResultHeading from '../components/result-heading';
import Result, { type ResultItem } from '../components/result';
import titleCase from '../core/utils/title-case';
import { DEV_URL, PROD_URL } from '../core/constants';

type Props = {
  name: string,
  results: Array<ResultItem>,
};

const BASE_URL = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

// TODO - handle multiple results
export default class Results extends PureComponent<Props, *> {
  static getInitialProps = async ({ query }: { query: Object }) => {
    const name = await query.name;
    const results = await fetch(`${BASE_URL}/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({ name: titleCase(name) }),
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
          <ResultHeading>sorry, no info found for {name}</ResultHeading>
        </Main>
      );
    }

    return (
      <Main>
        {results.length > 1 && <span>multiple people found:</span>}
        <div className="results">
          {results.map(r => (
            <Result key={r.id.value} {...r} />
          ))}
        </div>
        <style jsx>{`
          span {
            font-size: 1.25rem;
            font-weight: 600;
            display: block;
            margin-bottom: 1em;
          }
          .results {
            width: 100%;
          }
        `}</style>
      </Main>
    );
  }
}
