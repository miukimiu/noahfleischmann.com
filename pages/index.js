import React from "react";
import { Heading, Flex, Stack, SimpleGrid, Box } from "@chakra-ui/core";

import Layout from "components/Layout";
import BlogPostPreview from "components/BlogPostPreview";
import ProjectCard from "components/ProjectCard";
import useColors from "hooks/useColors";

import { frontMatter as helloWorld } from "./blog/hello-world.mdx";

const Index = () => {
  const { secondaryTextColor } = useColors();

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
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hi, I’m Noah{" "}
            <span role="img" aria-label="Waving hand">
              👋
            </span>
          </Heading>
          <Heading color={secondaryTextColor} as="h4" size="sm">
            I'm a full-stack web developer and student based in Switzerland 🇨🇭 This website is still very much WIP...
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
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Recent Posts
          </Heading>
          <BlogPostPreview {...helloWorld} />
        </Flex>
        <Box width="100%">
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <SimpleGrid minChildWidth="250px" spacing="30px" alignContent="center">
            <ProjectCard
              title="Audiocasts"
              description="🎧 Platform to host RSS podcast feeds for your audiobooks"
              link="https://github.com/fnoah/audiocasts"
              background="linear-gradient(108deg, #4158D0 0%, #C850C0 65%)"
            />
            <ProjectCard
              title="React Relaxed"
              description="🐢 React Hooks for debouncing and throttling inputs"
              link="https://github.com/fnoah/react-relaxed"
              background="linear-gradient(200deg, #fdcc10 0%, #ed17ad 100%)"
            />
          </SimpleGrid>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Index;
