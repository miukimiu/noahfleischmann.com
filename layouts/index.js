import { Heading, Text, Flex, Stack } from "@chakra-ui/core";

import Layout from "components/Layout";
import BlogSeo from "components/BlogSeo";
import { getHumanizedDate } from "utils/date";
import { WEBSITE_URL } from "utils/configuration";
import useColors from "hooks/useColors";

const BlogLayout = (frontMatter) => {
  const slug = frontMatter.__resourcePath.replace("blog/", "").replace(".mdx", "");

  return ({ children }) => {
    const { secondaryTextColor } = useColors();

    return (
      <Layout>
        <BlogSeo url={`${WEBSITE_URL}/blog/${slug}`} {...frontMatter} />
        <Stack as="article" justifyContent="center" alignItems="flex-start" m="0 auto" maxWidth="800px" width="100%">
          <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" width="100%">
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={["initial", "center"]}
              direction={["column", "row"]}
              mt={2}
              w="100%"
              mb={4}
              color={secondaryTextColor}
            >
              <Flex align="center">
                <Text fontSize="md">Published on {getHumanizedDate(frontMatter.publishedAt)}</Text>
              </Flex>
              <Text fontSize="md" mt={[2, 0]}>
                {frontMatter.readingTime.text}
              </Text>
            </Flex>
          </Flex>
          {children}
        </Stack>
      </Layout>
    );
  };
};

export default BlogLayout;
