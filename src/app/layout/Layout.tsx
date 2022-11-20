import React from 'react';
import { Center, Container, Flex, Text } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Flex backgroundColor="primary.900" direction="column" flex={1}>
      <Center paddingY={6}>
        <Container maxWidth="6xl">
          <Text fontSize="4xl" fontWeight="bold" mb={100}>
            SimulaCr. Challenge
          </Text>
          {children}
        </Container>
      </Center>
    </Flex>
  );
};
