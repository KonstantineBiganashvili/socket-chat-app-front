import { InputField } from './ChatInput.styles';

const ChatInput = ({ message, handleChange }) => (
  <InputField value={message} onChange={handleChange} />
);

export default ChatInput;
