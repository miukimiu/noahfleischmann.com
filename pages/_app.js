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
