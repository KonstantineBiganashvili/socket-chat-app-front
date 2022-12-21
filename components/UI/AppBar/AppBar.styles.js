import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  padding: 10px 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  height: 50px;
  justify-self: center;
  align-items: center;
  gap: 30px;
  margin-left: auto;
  margin-right: 20px;
`;

export const LogoutButton = styled.button`
  height: 50px;
  width: 80px;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #f5f5f5;
  cursor: pointer;
`;
