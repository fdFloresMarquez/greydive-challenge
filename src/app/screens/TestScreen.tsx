import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AspectRatio, Box, Divider, Stack, Text } from '@chakra-ui/react';

import { api } from '@/api';
import { Test } from '@/types';

const TestScreen: React.FC = () => {
  const { id } = useParams();

  const [status, setStatus] = useState<'pending' | 'resolved' | 'rejected'>('pending');

  useEffect(() => {
    api.tests.list().then((res) => {
      setStatus('resolved');
    });
  }, []);

  //TODO: Change logic for navigate
  if (isNaN(Number(id)) || Number(id) > 2 || Number(id) < 0) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Text fontSize="4xl" fontWeight="medium">
        Nombre del cliente
      </Text>
      <Text fontSize="3xl" fontWeight="medium" mb={6}>
        Test: Test de usabilidad en el sitio web
      </Text>

      <Text fontSize="2xl" fontWeight="medium" mb={6}>
        Testeador 1
      </Text>

      <AspectRatio maxW="100%" mb={6} ratio={16 / 9}>
        <iframe
          allowFullScreen
          src="https://dbw7vamj238cm.cloudfront.net/Viamo_challenge.mp4"
          title="Viamo"
        />
      </AspectRatio>

      <Text fontSize="2xl" fontWeight="medium" mb={6}>
        Transcripción
      </Text>

      <Box maxHeight="300px" maxWidth="500px" mb={6} overflow="scroll" pb="40px" px="50px">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia aliquam consequatur,
        soluta laudantium tempore reiciendis nam commodi obcaecati voluptatum natus a, voluptates
        magni perferendis quae officia placeat deleniti doloribus fugiat. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Perspiciatis dolorem ad veritatis fugiat velit
        dignissimos expedita vel perferendis impedit, a dolor quos eum. Animi illum doloremque
        praesentium vero veniam ea? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        voluptas a dolorum debitis necessitatibus repellendus at porro vero, assumenda provident!
        Exercitationem libero quasi ad. Voluptatem dolore repellendus adipisci ad corporis? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nobis repellat quod ipsa, ea laudantium
        deleniti praesentium! Quia modi sint, maiores possimus, aut dolorum deleniti eos nisi alias,
        aperiam numquam sit.
      </Box>

      <Box maxWidth="50%">
        <Text fontSize="2xl" fontWeight="medium" mb={6}>
          Tareas
        </Text>
        <Text fontSize="1xl" fontWeight="medium" mb={6}>
          Escenario: Necesitás comprar zapatillas, entonces decidís visitar el sitio web de Viamo.
        </Text>

        <Divider borderColor="white" borderTop="1px" />
        <Stack direction="column" mt={5} mx={5}>
          <Text fontSize="1xl" fontWeight="bold" mb={-2}>
            Tarea 1:
          </Text>
          <Text fontSize="1xl" fontWeight="bold">
            Buscá Viamo en Google y entrá al sitio web.
          </Text>

          <Text color="secondary.500" fontSize="1xl" fontWeight="medium" pt={1}>
            Duración de la tarea: 0:0:17
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default TestScreen;
