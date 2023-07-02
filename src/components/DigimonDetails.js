import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const DigimonDetails = ({ digimon }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">{digimon.name}</Text>
      <Text>{digimon.level}</Text>
      <Text>{digimon.attribute}</Text>
      <Text>{digimon.description}</Text>
    </Box>
  );
};

export default DigimonDetails;
