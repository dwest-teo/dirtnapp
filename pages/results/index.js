// @flow
import Router from 'next/router';

const ResultsIndex = () => null;

ResultsIndex.getInitialProps = async ({ query, res }) => {
  const { name } = await query;

  const url = '/results/[name]';
  const as = `/results/${name}`;

  if (res) {
    res.writeHead(302, {
      Location: as,
    });

    return res.end();
  }

  Router.replace(url, as);

  return {};
};

export default ResultsIndex;
