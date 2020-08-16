import { NextSeo } from "next-seo";
import { Heading, Flex, Stack, Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/core";

import Layout from "components/Layout";
import BlogPostPreview from "components/BlogPostPreview";
import { WEBSITE_URL } from "utils/configuration";

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from "./blog/**/*.mdx";

const url = `${WEBSITE_URL}/blog`;
const title = "Blog – Noah Fleischmann";
const description = "My blog posts.";

const Blog = () => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
    <Layout>
      <Stack
        as="main"
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        width="100%"
        maxWidth="700px"
      >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" width="100%">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Blog
          </Heading>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          width="100%"
          mt={8}
        >
          {!blogPosts.length && "No posts found."}
          {blogPosts.map((frontMatter) => (
            <BlogPostPreview key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
      </Stack>
    </Layout>
  </>
);

export default Blog;
