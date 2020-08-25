import React from "react";
import { Link, Box, Text, Stack } from "@chakra-ui/core";
import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";

import useColors from "hooks/useColors";

const Footer = () => {
  const { bgColor } = useColors();

  return (
    <Box as="footer" bg={bgColor} color="gray.500">
      <Stack spacing={4} mb={6} mt={8} align="center">
        <Box>
          <Stack isInline spacing={6}>
            <Link href="https://twitter.com/noahfle" title="Twitter" isExternal>
              <FiTwitter size="18px" /> Twitter
            </Link>
            <Link href="https://github.com/fnoah" title="GitHub" isExternal>
              <FiGithub size="18px" /> GitHub
            </Link>
            <Link href="mailto:nfleischm@gmail.com" title="Email" isExternal>
              <FiMail size="18px" /> Email
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
