import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

import { LoaderContainer } from './ImageLoader.styles.js';

const ImageLoader = () => (
  <LoaderContainer>
    <ProgressBar
      ariaLabel="progress-bar-loading"
      wrapperClass="progress-bar-wrapper"
      borderColor="#EDEDE9"
      barColor="#D5BDAF"
    />
  </LoaderContainer>
);

export default ImageLoader;
