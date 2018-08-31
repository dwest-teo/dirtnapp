// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  children: Node,
};

export default ({ children, ...rest }: Props) => (
  <a {...rest}>
    {children}
    <style jsx>{`
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
  </a>
);
