import React from "react";
import NextLink from "next/link";
import { Heading, Text, Stack, Box, Link, useColorMode } from "@chakra-ui/core";

import { getHumanizedDate } from "utils/date";
import useColors from "hooks/useColors";

const BlogPostPreview = (frontMatter) => {
  const { title, summary, publishedAt, readingTime } = frontMatter;
  const { secondaryTextColor } = useColors();

  const slug = frontMatter.__resourcePath.replace("blog/", "").replace(".mdx", "");

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box mb={8} display="block" width="100%">
          <Stack spacing={2}>
            <Heading size="lg" as="h3" fontWeight="medium">
              {title}
            </Heading>
            <Text color="gray.500">
              {getHumanizedDate(publishedAt)} - {readingTime.text}
            </Text>
            <Text color={secondaryTextColor}>{summary}</Text>
          </Stack>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPostPreview;
