import Image from 'next/image';
import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

import { Card, DefaultImage, ImageWrapper } from './UserCard.styles';

const UserCard = ({ user: { username, image } }) => {
  const photoURL = image?.photo_url || '';

  return (
    <Card>
      {photoURL ? (
        <ImageWrapper>
          <Image src={photoURL} layout="fill" objectFit="contain" />
        </ImageWrapper>
      ) : (
        <DefaultImage>
          <FaUserAstronaut />
        </DefaultImage>
      )}
      <p dangerouslySetInnerHTML={{ __html: username }} />
    </Card>
  );
};

export default UserCard;
