// @flow
import React from 'react';

export type ResultItem = {
  id: {
    value: string,
    label: string,
  },
  birthYear: number,
  deathYear: ?number,
  occupations: ?string,
};

export default ({ id, birthYear, deathYear, occupations }: ResultItem) => (
  <article className="result">
    <div className="data">
      <h1>
        {id.label.toLowerCase()} is {deathYear ? 'dead' : 'alive'}
      </h1>
      <h2 className="f6 fw4 mt0 mb0 black-60">
        {occupations && `${occupations}, `} {birthYear} -{' '}
        {deathYear || 'present'}
      </h2>
    </div>
    <style jsx>{`
      .result {
        width: 100%;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-color: rgba(0, 0, 0, 0.05);
        padding-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
      .result:last-of-type {
        border: 0;
      }
      .data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 0.67em 0;
      }
      h1 {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.25;
        margin-top: 0;
        margin-bottom: 0.25em;
      }
      h2 {
        font-size: 0.875rem;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0;
        color: rgba(0, 0, 0, 0.6);
      }
      @media screen and (min-width: 30em) {
        .data {
          flex-direction: row;
        }
        h1 {
          font-size: 1rem;
          margin-bottom: 0;
        }
      }
    `}</style>
  </article>
);
