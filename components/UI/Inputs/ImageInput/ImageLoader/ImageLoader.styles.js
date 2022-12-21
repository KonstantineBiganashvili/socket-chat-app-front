import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: ${(props) => `${props.containerWidth}px` || '400px'};
  height: ${(props) => `${props.containerHeight}px` || '250px'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;
