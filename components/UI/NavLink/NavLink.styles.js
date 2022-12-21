import styled from 'styled-components';

const StyledNavLink = styled.a`
  font-size: 15px;
  padding: 12px 10px;
  background-color: #d6ccc2;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #d5bdaf;
  }
`;

export default StyledNavLink;
