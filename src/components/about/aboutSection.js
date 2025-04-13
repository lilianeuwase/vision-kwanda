// components/AboutSection.jsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutSection = () => {
  return (
    <Box id="about" className="py-20 px-4 bg-gray-100">
      <Box className="max-w-4xl mx-auto text-center">
        <Heading as="h2" className="text-3xl md:text-4xl font-bold mb-4">
          About Us
        </Heading>
        <Text className="text-lg md:text-xl text-gray-700">
          At Artpill Studio, we fuse technology with art to create captivating digital experiences. Our goal is to innovate and inspire by transforming creative visions into reality.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutSection;
