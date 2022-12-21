import styled from 'styled-components';

const LoaderContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoaderContainer;
