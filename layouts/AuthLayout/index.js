import Image from 'next/image';

import { Container, Wrapper } from './AuthLayout.styles';

const AuthLayout = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Container>
        <h1>Web Smart Chat</h1>
        <Image
          src="/img/chat.png"
          alt="auth layout"
          width="858px"
          height="589px"
        />
      </Container>
      {children}
    </Wrapper>
  );
};

export default AuthLayout;
