import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="description" content="Brushfam onboards businesses into Polkadot by creating the necessary
        development infrastructure, auditing, and giving advisory to the development teams." />
        <meta name="keywords" content="brushfam, openbrush, polkadot, ink, auditing, rust, smart contract, sol2ink, typechain" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
