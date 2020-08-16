import NextLink from "next/link";
import { useColorMode, Heading, Box, Flex, Stack, Button } from "@chakra-ui/core";

import Layout from "components/Layout";

const Error = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center" maxWidth="700px">
          <Box w="200px" mt="4rem">
            {colorMode === "light" ? (
              <img src="/owl_light.svg" alt="Undraw owl illustration" />
            ) : (
              <img src="/owl_dark.svg" alt="Undraw owl illustration" />
            )}
          </Box>
          <Heading letterSpacing="tight" mt="4rem" as="h2" size="xl">
            Oops, page not found...
          </Heading>
          <NextLink href="/" passHref>
            <Button as="a" p={[1, 4]} w="250px" fontWeight="bold" m="1.5rem auto 0">
              Take me back home
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Layout>
  );
};

export default Error;
