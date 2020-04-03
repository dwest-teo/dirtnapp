// @flow
import React from 'react';
import OG from '../components/og';
import Main from '../components/main';
import Form from '../components/form';

export default () => (
  <>
    <OG
      title="dirtn.app"
      description="Find out if a person is alive or dead at dirtn.app"
    />
    <Main>
      <h1>dirtnapp</h1>
      <Form />
      <style jsx>{`
        h1 {
          font-size: 4rem;
          margin: 0 0.67em 0;
        }
        @media screen and (min-width: 30em) {
          h1 {
            font-size: 6rem;
          }
        }
      `}</style>
    </Main>
  </>
);
