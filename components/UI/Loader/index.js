import { ThreeCircles } from 'react-loader-spinner';

import LoaderContainer from './Loader.styles';

const Loader = () => (
  <LoaderContainer>
    <ThreeCircles
      height="300"
      width="300"
      visible
      ariaLabel="three-circles-rotating"
      outerCircleColor="#D5BDAF"
      innerCircleColor="#D6CCC2"
      middleCircleColor="#EDEDE9"
    />
  </LoaderContainer>
);

export default Loader;
