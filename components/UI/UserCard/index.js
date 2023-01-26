import Image from 'next/image';
import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

import { Card, DefaultImage, ImageWrapper } from './UserCard.styles';

const UserCard = ({
  user: { id, username, image, chat_id: chatId },
  handleClick,
}) => {
  const photoURL = image?.photo_url || '';

  const onClickHandle = () => {
    if (handleClick) {
      handleClick((id && { id }) || (chatId && { chat_id: chatId }));
    }
  };

  return (
    <Card onClick={onClickHandle}>
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
