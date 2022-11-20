import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Heading,
  Text,
} from '@chakra-ui/react';

import { api } from '@/api';
import { Test } from '@/types';

const Home: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.tests.list().then((res) => {
      setTests(res);
    });
  }, []);

  const onNavigate = (id: number): void => {
    navigate(`/test/${id + 1}`);
  };

  return (
    <>
      <Text fontSize="4xl" fontWeight="medium" mb={5}>
        Tests:
      </Text>

      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        {tests.map((test: Test, index: number) => {
          return (
            <Card key={index} backgroundColor="white">
              <CardHeader>
                <Heading size="md">Test de {test.cliente.toUpperCase()}</Heading>
              </CardHeader>
              <CardBody>
                <Text>Preguntas: {test.preguntas.length}</Text>
              </CardBody>
              <CardFooter>
                <Button onClick={() => onNavigate(index)}>View here</Button>
              </CardFooter>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Home;
