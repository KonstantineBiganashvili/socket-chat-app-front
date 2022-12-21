import styled from 'styled-components';

export const ActionButtonContainer = styled.button`
  font-family: 'Montserrat';
  font-size: 15px;
  padding: 12px 5px;
  cursor: ${(props) => !props.disabled && 'pointer'};
  background-color: #d6ccc2;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #d5bdaf;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  gap: 5px;
`;
