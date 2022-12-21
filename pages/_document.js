import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* Importing custom font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
        as="style"
        rel="stylesheet preload prefetch"
        type="text/css"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
