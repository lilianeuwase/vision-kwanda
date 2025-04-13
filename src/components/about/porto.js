// components/PortfolioSection.jsx
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const projects = [
  {
    id: 1,
    image: '/path/to/project1.jpg',
    title: 'Project One'
  },
  {
    id: 2,
    image: '/path/to/project2.jpg',
    title: 'Project Two'
  },
  {
    id: 3,
    image: '/path/to/project3.jpg',
    title: 'Project Three'
  },
  // Add additional projects as needed
];

const PortfolioSection = () => {
  return (
    <Box id="portfolio" className="py-20 px-4 bg-white">
      <Box className="max-w-6xl mx-auto">
        <Heading as="h2" className="text-center text-3xl md:text-4xl font-bold mb-12">
          Portfolio
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="relative group">
              <img
                src={project.image}  // Replace with the actual image path
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default PortfolioSection;
