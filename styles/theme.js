import defaultTheme from "@chakra-ui/theme";

const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    body: `Inter,sans-serif`,
  },
  config: {
    ...defaultTheme.config,
    useSystemColorMode: true,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  }
};

export default theme;
