import React, { useEffect, useState } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DigimonDetails from '../components/DigimonDetails';

const DigimonDetailsPage = () => {
  const { id } = useParams();
  const [digimon, setDigimon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/${id}`);
        setDigimon(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <DigimonDetails digimon={digimon} />
      )}
    </Box>
  );
};

export default DigimonDetailsPage;
