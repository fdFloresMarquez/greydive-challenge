import {
  Button,
  Card as ChakraCard,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

import { Test } from '@/types';
import { capitalizeFirstLetter, secondsToDate } from '@/helpers';

type Props = {
  id: number;
  test: Test;
  handleClick: (id: number) => void;
};

const TestCard: React.FC<Props> = ({ id, test, handleClick }) => {
  return (
    <ChakraCard backgroundColor="white">
      <CardHeader>
        <Heading size="md">Test de {capitalizeFirstLetter(test.cliente)}</Heading>
      </CardHeader>
      <CardBody>
        <Text>Enviado: {secondsToDate(test.horarioEnvio.seconds)}</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => handleClick(id)}>View here</Button>
      </CardFooter>
    </ChakraCard>
  );
};

export default TestCard;
