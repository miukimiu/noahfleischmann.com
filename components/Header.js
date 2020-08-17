import NextLink from "next/link";
import { useRouter } from "next/router";
import { useColorMode, Button, Flex, Box, IconButton, Text } from "@chakra-ui/core";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useRouter();

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="1200px"
      width="100%"
      as="nav"
      h="50px"
      py={8}
      px={[5, 8]}
      mt={[0, 4]}
      mb={[2, 8]}
      mx="auto"
    >
      <NextLink href="/" passHref>
        <Text as="a" fontSize="2xl" display={["none", "block"]}>
          Noah Fleischmann
        </Text>
      </NextLink>
      <NextLink href="/" passHref>
        <Text as="a" fontSize="2xl" display={["block", "none"]}>
          N.F.
        </Text>
      </NextLink>
      <Box>
        <NextLink href="/" passHref>
          <Button as="a" variant={pathname === "/" ? "solid" : "ghost"} p={[2, 2, 4]} mx={[1, 1, 2]}>
            Home
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button as="a" variant={pathname.startsWith("/blog") ? "solid" : "ghost"} p={[2, 2, 4]} mx={[1, 1, 2]}>
            Blog
          </Button>
        </NextLink>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "dark" ? "sun" : "moon"}
          onClick={toggleColorMode}
          variant="ghost"
          size="lg"
          ml={[1, 1, 2]}
        />
      </Box>
    </Flex>
  );
};

export default Header;
