// @flow
import React, { memo } from 'react';
import ImageAvatar from './image-avatar';

export type ResultItem = {
  id: {
    value: string,
    label: string,
  },
  birthYear: number,
  gender: string,
  deathYear: ?number,
  occupations: ?string,
  picture: ?string,
};

export default memo<*, *>(
  ({ id, birthYear, gender, deathYear, occupations, picture }: ResultItem) => (
    <li className="result">
      <div className="data">
        <div className="img-name-container">
          <ImageAvatar label={id.label} picture={picture} gender={gender} />
          <div className="name-container">
            <h2 className="name">
              {id.label.toLowerCase()} is {deathYear ? 'dead 👎' : 'alive 👍'}
            </h2>
            {occupations && <span className="details">{occupations}</span>}
          </div>
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
        .img-name-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 0.5em;
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
          h1 {
            font-size: 1rem;
            margin-bottom: 0;
          }
          .data {
            flex-direction: row;
          }
          .img-name-container {
            flex-direction: row;
            text-align: left;
            margin-bottom: 0;
          }
        }
      `}</style>
    </li>
  )
);
