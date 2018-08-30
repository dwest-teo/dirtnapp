// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  children: Node,
};

export default ({ children }: Props) => (
  <main className="main">
    {children}
    <style jsx>{`
      .main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 0.67em;
      }
    `}</style>
  </main>
);
