import { Box, Callout, Code, Heading, Kbd, Link, Text, Divider, useColorMode, Image } from "@chakra-ui/core";
import NextLink from "next/link";

const TableHead = (props) => {
  const { colorMode } = useColorMode();
  const bg = {
    light: "gray.50",
    dark: "whiteAlpha.100",
  };

  return <Box as="th" bg={bg[colorMode]} fontWeight="semibold" p={2} fontSize="sm" {...props} />;
};

const TableData = (props) => (
  <Box as="td" p={2} borderTopWidth="1px" borderColor="inherit" fontSize="sm" whiteSpace="normal" {...props} />
);

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const Quote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Callout
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();

  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const components = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <Heading as="h2" fontWeight="bold" size="lg" my={4} {...props} />,
  h3: (props) => <Heading as="h3" size="md" my={4} fontWeight="bold" {...props} />,
  inlineCode: (props) => <Code variantColor="yellow" fontSize="0.84em" {...props} />,
  img: (props) => <Image rounded="lg" {...props} />,
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  table: (props) => <Box as="table" textAlign="left" mt="32px" width="full" {...props} />,
  th: TableHead,
  td: TableData,
  a: CustomLink,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
};

export { CustomLink };
export default components;
