import React from 'react';
import { Container, SimpleGrid, Title, Image, Text, List } from '@mantine/core';
import { aboutContent } from '@/utils/aboutContent';
import { useMediaQuery } from '@mantine/hooks';

const imageContent = (
  <Image mx="auto" className="object-cover w-96 md:w-[900px] md:h-[350px]" radius="lg" src="/container2.jpg" alt="Random image" />
);

const mockdata = () => {
  return (
    <div className="text-gray-600" id="about">
      <Title className="m-3 text-black font-bold" order={1}>
        {aboutContent.title}
      </Title>
      <List className="text-gray-600" size={'xl'} spacing="xl">
        {aboutContent.paragraphs.map((paragraph, index) => (
          <List.Item key={index} className="m-3">
            <Text>{paragraph}</Text>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

const NewProduct = () => {
  const matches = useMediaQuery('(max-width: 1200px)');

  return (
    <Container my="xl" mx={34} fluid={true}>
      <SimpleGrid spacing={0} cols={matches ? 1 : 2}>
        <div className="p-5">{mockdata()}</div>
        <div>{imageContent}</div>
      </SimpleGrid>
    </Container>
  );
};

export default NewProduct;
