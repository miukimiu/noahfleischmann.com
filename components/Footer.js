import React from "react";
import { Link, IconButton, Text, Stack, Flex, Box } from "@chakra-ui/core";

import useColors from "hooks/useColors";

const Footer = () => {
  const { tertiaryTextColor, bgColor } = useColors();

  return (
    <Box px={[5, 8]} bg={bgColor}>
      <Flex
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth="800px"
        as="footer"
        mx="auto"
        mt={[0, 4]}
        mb={[2, 8]}
        color={tertiaryTextColor}
      >
        <Stack isInline spacing={2}>
          <Link href="https://twitter.com/noahfle" title="Twitter" isExternal>
            <IconButton aria-label="Twitter" icon="twitter" size="lg" variant="link" color={tertiaryTextColor} />
          </Link>
          <Link href="https://github.com/fnoah" title="GitHub" isExternal>
            <IconButton aria-label="GitHub" icon="github" size="lg" variant="link" color={tertiaryTextColor} />
          </Link>
          <Link href="mailto:nfleischm@gmail.com" title="Email" isExternal>
            <IconButton aria-label="Email" icon="mail" size="lg" variant="link" color={tertiaryTextColor} />
          </Link>
        </Stack>
        <Text>{new Date().getFullYear()} Noah Fleischmann</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
