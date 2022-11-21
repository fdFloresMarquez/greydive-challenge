import { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';

import { TestGrid } from '../components';

import { api } from '@/api';
import { Test } from '@/types';

const Home: React.FC = () => {
  const [status, setStatus] = useState<'pending' | 'resolved' | 'rejected'>('pending');
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    // Simulates fetching data
    api.tests
      .list()
      .then((res) => {
        setStatus('resolved');
        setTests(res);
      })
      .catch(() => setStatus('rejected'));
  }, []);

  if (status === 'pending') {
    return <Text>Cargando...</Text>;
  }

  return (
    <>
      <Text fontSize="4xl" fontWeight="medium" mb={5}>
        Tests:
      </Text>

      {status === 'resolved' && <TestGrid tests={tests} />}
    </>
  );
};

export default Home;
