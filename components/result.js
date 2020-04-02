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
  picture: ?string,
};

export default ({
  id,
  birthYear,
  deathYear,
  occupations,
  picture,
}: ResultItem) => {
  const croppedImage = picture
    ? `https://res.cloudinary.com/dcamzsxpt/image/fetch/w_50,h_50,c_fill,g_face,r_max,f_auto/${picture}`
    : null;

  return (
    <article className="result">
      {croppedImage && <img src={croppedImage} alt={`${id.label}`} />}
      <div className="data">
        <div className="name-container">
          <h2 className="name">
            {id.label.toLowerCase()} is {deathYear ? 'dead' : 'alive'}
          </h2>
          {occupations && <span className="details">{occupations}</span>}
        </div>
        <span className="details">
          {birthYear} - {deathYear || 'present'}
        </span>
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
        .name-container {
          display: flex;
          flex-direction: column;
        }
        .name {
          font-size: 0.875rem;
          font-weight: 600;
          line-height: 1.25;
          margin-top: 0;
          margin-bottom: 0.25em;
        }
        .details {
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
};
