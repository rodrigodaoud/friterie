import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/GeneralGrotesque/GeneralGrotesqueMono-XBold.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/AcuminPro/Acumin-RPro.otf" as="font" crossOrigin="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
