import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-bottom: 1px solid black;
  transition: 0.3s;
  cursor: pointer;
  background-color: #f5ebe0;

  :hover {
    background-color: #e3d5ca;
  }
`;

export const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  position: relative;

  // This is here because next image is creating span on it's own and I want it to make round
  span {
    border-radius: 100px;
  }
`;

export const DefaultImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  width: 60px;
  height: 60px;
  background-color: #f5f5f5;
  border-radius: 100px;
`;
