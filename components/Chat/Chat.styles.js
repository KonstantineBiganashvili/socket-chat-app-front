import styled from 'styled-components';

export const ChatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  height: 664px;
  background-color: #f5f5f5;
  margin: 0 auto;
`;

export const ChatActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  padding: 0 40px;
  margin-top: auto;
  margin-bottom: 10px;
`;

export const ChatsContainer = styled.div`
  overflow-y: auto;
  margin-bottom: 10px;
  width: 100%;
`;

export const TypingStatusContainer = styled.div`
  margin-bottom: 10px;
  margin-left: 50px;
`;
