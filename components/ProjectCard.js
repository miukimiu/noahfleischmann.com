import React from "react";
import { Box, Link, Heading, Text, Stack, useColorMode } from "@chakra-ui/core";

const ProjectCard = ({ title, description, link, background }) => {
  return (
    <Box align="center" borderRadius="lg" p={6} background={background} color="gray.50">
      <Link mb={4} href={link} isExternal _hover={{ textDecoration: "none", boxShadow: "xl" }}>
        <Stack>
          <Heading as="h4" size="md" fontWeight="bold" mb={4} letterSpacing="tighter">
            {title}
          </Heading>
          <Text lineHeight="1.3">{description}</Text>
        </Stack>
      </Link>
    </Box>
  );
};

export default ProjectCard;
