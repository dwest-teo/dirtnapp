// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  children: Node,
};

export default ({ children }: Props) => (
  <h1 className="results-heading">
    {children}
    <style jsx>{`
      .results-heading {
        font-size: 1.5rem;
        max-width: 30em;
        text-align: center;
        margin: 0 0.67em 0;
      }
      @media screen and (min-width: 30em) {
        .results-heading {
          font-size: 2rem;
        }
      }
    `}</style>
  </h1>
);
