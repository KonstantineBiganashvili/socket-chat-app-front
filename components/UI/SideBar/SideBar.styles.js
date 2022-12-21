import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: relative;
  padding-left: 73px;
`;

export const SideBarButton = styled.button`
  cursor: pointer;
  font-size: 50px;
  border: none;
`;

export const SideBarWrapper = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255);
  height: 100%;
  padding: 0 20px;
  border-radius: 5px;
  width: 400px;
  left: -400px;
  top: 0;
  z-index: 100;
`;

export const CloseButton = styled.button`
  font-size: 50px;
  background: none;
  cursor: pointer;
  display: flex;
  border: none;
  margin-top: 5px;
  margin-left: 325px;
  color: #d6ccc2;

  :hover {
    color: #d5bdaf;
  }
`;

export const CurrentUser = styled.a`
  position: absolute;
  width: 95%;
  bottom: 10px;
  right: 10px;
`;

export const ListContainer = styled.div`
  position: relative;
`;
