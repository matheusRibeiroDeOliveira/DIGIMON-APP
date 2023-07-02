import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const DigimonListItem = ({ digimon }) => {
  return (
    <Box>
      <Text>{digimon.name}</Text>
      <Text>{digimon.level}</Text>
      <Text>{digimon.attribute}</Text>
    </Box>
  );
};

export default DigimonListItem;
