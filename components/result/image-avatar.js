// @flow
import React, { memo } from 'react';
import { GENDER_MALE } from '../../core/constants';

type Props = {
  label: string,
  gender: string,
  picture: ?string,
};

export default memo<*, *>(({ label, gender, picture }: Props) => {
  const croppedImage = picture
    ? `https://res.cloudinary.com/dcamzsxpt/image/fetch/w_64,h_64,c_fill,g_face,r_max,f_auto/${picture}`
    : null;

  return (
    <>
      {croppedImage ? (
        <img src={croppedImage} alt={`${label}`} />
      ) : (
        <div className="avatar-circle">
          <span className="avatar-content">
            {gender === GENDER_MALE ? '👨' : '👩'}
          </span>
        </div>
      )}
      <style jsx>{`
        img {
          width: 64px;
          height: 64px;
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
        @media screen and (min-width: 30em) {
          img {
            margin: 0 1em 0 0;
          }
          .avatar-circle {
            margin: 0 1em 0 0;
          }
        }
      `}</style>
    </>
  );
});
