// @flow
import React from 'react';
import type { Node } from 'react';
import { TWITTER_LINK } from '../core/constants';

type Props = {
  children: Node,
};

export default ({ children }: Props) => (
  <main className="main">
    <div className="content">{children}</div>
    <footer>
      made by{' '}
      <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
        donny west
      </a>
    </footer>
    <style jsx>{`
      .main {
        max-width: 30em;
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
      }
      .content {
        width: 100%;
        margin-top: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: 0 0.67em;
      }
      @media screen and (min-width: 30em) {
        .content {
          padding: 0;
        }
      }
      footer {
        margin-top: auto;
        padding: 1.5em;
        font-size: 0.67rem;
        color: rgba(0, 0, 0, 0.6);
      }
      a {
        font-weight: 600;
        color: #357edd;
        text-decoration: none;
        opacity: 1;
        transition: opacity 0.15s ease-in;
      }
      a:hover,
      a:focus {
        opacity: 0.5;
        transition: opacity 0.15s ease-in;
      }
      a:focus {
        outline: 1px dotted currentColor;
      }
      a:active {
        opacity: 0.8;
        transition: opacity 0.15s ease-out;
      }
    `}</style>
  </main>
);
