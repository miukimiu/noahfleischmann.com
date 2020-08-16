import Head from "next/head";
import { ThemeProvider, CSSReset, ColorModeProvider, useColorMode } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";

import theme from "styles/theme.js";
import { prismLightTheme, prismDarkTheme } from "styles/prism";
import SEO_CONFIG from "seo.config.js";
import components from "components/MDXComponents";
import useColors from "hooks/useColors";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  const { bgColor } = useColors();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${bgColor};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-twilight.min.css"
          integrity="sha512-akb4nfKzpmhujLUyollw5waBPeohuVf0Z5+cL+4Ngc4Db+V8szzx6ZTujguFjpmD076W8LImVIbOblmQ+vZMKA=="
          crossorigin="anonymous"
        /> */}
      </Head>
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <ColorModeProvider value="light">
            <GlobalStyle>
              <DefaultSeo {...SEO_CONFIG} />
              <Component {...pageProps} />
            </GlobalStyle>
          </ColorModeProvider>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
