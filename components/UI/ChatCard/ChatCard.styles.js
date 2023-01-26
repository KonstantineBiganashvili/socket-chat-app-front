import styled from 'styled-components';

export const ChatCardWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isUser ? 'row-reverse' : 'row')};
  background-color: ${(props) => (props.isUser ? '#F5EBE0' : '#d5bdaf')};
  width: 70%;
  padding: 10px 5px;
  margin: 10px;
  border-radius: 10px;
  margin-left: ${(props) => (props.isUser ? 'auto' : '10px')};
`;

export const UserIconContainer = styled.div`
  font-size: 50px;
  margin-top: 10px;
  color: ${(props) => (props.isUser ? '#d5bdaf' : '#EDEDE9')};
`;
export const ChatContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const ChatUser = styled.p`
  text-align: ${(props) => (props.isUser ? 'right' : 'left')};
  font-size: 12px;
  font-weight: 500;
`;

export const Message = styled.p`
  margin-left: ${(props) => (!props.isUser ? '20px' : '10px')};
  margin-right: ${(props) => (props.isUser ? '20px' : '10px')};
  word-break: break-word;
`;
