import styled from 'styled-components';

export const UserListContainer = styled.ul`
  position: absolute;
  max-height: 500px;
  overflow-y: auto;
  width: 100%;
  border: 1px solid #d5bdaf;
  border-radius: 5px;
  z-index: 100;
`;

export const EmptyBox = styled.p`
  position: absolute;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
  width: 100%;
  height: 30px;
  overflow-y: auto;
  border: 1px solid #d5bdaf;
  border-radius: 5px;
  z-index: 100;
`;
