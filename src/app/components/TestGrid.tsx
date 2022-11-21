import { useNavigate } from 'react-router-dom';
import { SimpleGrid } from '@chakra-ui/react';

import TestCard from './TestCard';

import { Test } from '@/types';

type Props = {
  tests: Test[];
};

const TestGrid: React.FC<Props> = ({ tests }) => {
  const navigate = useNavigate();

  const onNavigate = (id: number): void => {
    navigate(`/test/${id + 1}`);
  };

  return (
    <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {tests.map((test: Test, index: number) => {
        return <TestCard key={index} handleClick={onNavigate} id={index} test={test} />;
      })}
    </SimpleGrid>
  );
};

export default TestGrid;
