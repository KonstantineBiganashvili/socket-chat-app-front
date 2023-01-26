import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  height: 85px;
`;

export const ErrorText = styled.span`
  height: 16px;
  font-size: 12px;
  padding-left: 5px;
`;

export const InputField = styled.input`
  margin-top: 10px;
  height: 40px;
  padding: 10px;
  border: ${(props) => (props?.error ? '2px solid red' : '1px solid black')};
  border-radius: 5px;
`;
