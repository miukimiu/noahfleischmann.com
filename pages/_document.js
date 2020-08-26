import Document, { Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "@chakra-ui/core"
import GoogleFonts from "next-google-fonts";

class NextDocument extends Document {
  render() {
    return (
      <html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta name="msapplication-TileColor" content="#1d3557" />
          <meta name="theme-color" content="#ffffff" />
          <link href="/favicons/favicon.ico" rel="shortcut icon" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#1d3557" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default NextDocument;
