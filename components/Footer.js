import React from "react";
import { Link, Box, IconButton, Text, Stack, Flex } from "@chakra-ui/core";

import useColors from "hooks/useColors";

const Footer = () => {
  const { bgColor } = useColors();

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      maxWidth="850px"
      as="footer"
      mt={[0, 4]}
      mb={[2, 8]}
      mx="auto"
      color="gray.500"
    >
      <Stack isInline spacing={2}>
        <Link href="https://twitter.com/noahfle" title="Twitter" isExternal>
          <IconButton aria-label="Twitter" icon="twitter" size="lg" variant="link" />
        </Link>
        <Link href="https://github.com/fnoah" title="GitHub" isExternal>
          <IconButton aria-label="GitHub" icon="github" size="lg" variant="link" />
        </Link>
        <Link href="mailto:nfleischm@gmail.com" title="Email" isExternal>
          <IconButton aria-label="Email" icon="mail" size="lg" variant="link" />
        </Link>
      </Stack>
      <Text>{new Date().getFullYear()} Noah Fleischmann</Text>
    </Flex>
  );
};

export default Footer;
