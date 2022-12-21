import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

import { LoaderContainer } from './ImageLoader.styles.js';

const ImageLoader = ({
  containerWidth,
  containerHeight,
  loaderWidth,
  loaderHeight,
}) => (
  <LoaderContainer
    containerWidth={containerWidth}
    containerHeight={containerHeight}
  >
    <ProgressBar
      height={loaderHeight}
      width={loaderWidth}
      ariaLabel="progress-bar-loading"
      wrapperClass="progress-bar-wrapper"
      borderColor="#EDEDE9"
      barColor="#D5BDAF"
    />
  </LoaderContainer>
);

export default ImageLoader;
