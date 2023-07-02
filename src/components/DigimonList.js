import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const DigimonList = ({ digimons }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">Digimon List</Text>
      {digimons.map((digimon) => (
        <Box key={digimon.name}>
          <Text>{digimon.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default DigimonList;
