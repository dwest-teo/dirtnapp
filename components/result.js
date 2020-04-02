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
    ? `https://res.cloudinary.com/dcamzsxpt/image/fetch/w_64,h_64,c_fill,g_face,r_max,f_auto/${picture}`
    : null;

  return (
    <li className="result">
      <div className="data">
        <div className="img-name-container">
          {croppedImage ? (
            <img src={croppedImage} alt={`${id.label}`} />
          ) : (
            <div className="avatar-circle">
              <span className="avatar-content">{deathYear ? '👎' : '👍'}</span>
            </div>
          )}
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
        img {
          margin: 0 0 1em;
        }
        .avatar-circle {
          position: relative;
          width: 64px;
          height: 64px;
          background-color: rgba(0, 0, 0, 0.05);
          text-align: center;
          border-radius: 50%;
          margin: 0 0 1em;
        }
        .avatar-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 32px;
        }
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
          img {
            margin: 0 1em 0 0;
          }
          h1 {
            font-size: 1rem;
            margin-bottom: 0;
          }
          .avatar-circle {
            margin: 0 1em 0 0;
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
  );
};
