import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "next-google-fonts";

class NextDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="msapplication-TileColor" content="#1d3557" />
          <meta name="theme-color" content="#ffffff" />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#1d3557" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;
