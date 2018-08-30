// @flow
/* eslint react/no-unused-prop-types: 0 */
import React, { PureComponent } from 'react';
import fetch from 'isomorphic-fetch';
import Main from '../components/main';
import titleCase from '../core/utils/title-case';
import { DEV_URL, PROD_URL } from '../core/constants';

type Result = ?{
  id: {
    value: string,
    label: string,
  },
  birth_date: ?string,
  dateOfDeath: ?string,
};

type Props = {
  name: string,
  results: Array<Result>,
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

    // $FlowFixMe
    if (results.length === 0 || !results[0].birth_date) {
      return (
        <Main>
          <h1>sorry, no info found for {name}</h1>
        </Main>
      );
    }

    // $FlowFixMe
    const status = results[0].dateOfDeath ? 'dead' : 'alive';

    return (
      <Main>
        <h1>
          {name} is {status}.
        </h1>
      </Main>
    );
  }
}
