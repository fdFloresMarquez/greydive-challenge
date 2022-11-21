import React from 'react';
import { Center, Container, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Flex backgroundColor="primary.900" direction="column" flex={1}>
      <Center paddingY={6}>
        <Container maxWidth="6xl">
          <Link to="/">
            <Text fontSize="4xl" fontWeight="bold" mb={100}>
              simulacr. Challenge
            </Text>
          </Link>

          {children}
        </Container>
      </Center>
    </Flex>
  );
};
