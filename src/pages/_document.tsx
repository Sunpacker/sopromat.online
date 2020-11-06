import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
					<title>sopromat.online</title>
					<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700;900&family=Open+Sans:wght@300;400;600;800&display=swap" rel="stylesheet" />
				</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
