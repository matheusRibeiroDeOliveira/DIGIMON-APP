import React, { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import DigimonList from '../components/DigimonList';

const DigimonListPage = () => {
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://digimon-api.vercel.app/api/digimon');
        setDigimons(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <DigimonList digimons={digimons} />
      )}
    </Box>
  );
};

export default DigimonListPage;
