import Image from 'next/image';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaUserAstronaut } from 'react-icons/fa';

import {
  DeleteButtonContainer,
  ImageContainer,
  Input,
  LabelContainer,
} from './ImageInput.styles';
import ImageLoader from './ImageLoader';

const ImageInput = ({ isUploading, src, handleChange, handleDelete }) => {
  if (isUploading) {
    return <ImageLoader />;
  }

  return (
    <>
      <Input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        onChange={handleChange}
      />
      <LabelContainer htmlFor="file" img={src}>
        {src ? (
          <>
            <ImageContainer>
              <Image src={src} layout="fill" objectFit="contain" />
            </ImageContainer>
            <DeleteButtonContainer onClick={handleDelete}>
              <AiFillCloseCircle />
            </DeleteButtonContainer>
          </>
        ) : (
          <FaUserAstronaut />
        )}
        Upload Image
      </LabelContainer>
    </>
  );
};

export default ImageInput;
