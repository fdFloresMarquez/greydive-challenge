import { Box, Text } from '@chakra-ui/react';

import TaskItem from './TaskItem';

import { Task } from '@/types';

type Props = {
  stage: string;
  tasks: Task[];
};

const TaskSection: React.FC<Props> = ({ stage, tasks }) => {
  return (
    <Box maxWidth={{ base: '100%', md: '55%' }} pt={5}>
      <Text fontSize="2xl" fontWeight="medium" mb={6}>
        Tareas
      </Text>
      <Text fontSize="1xl" fontWeight="medium" mb={6}>
        Escenario: {stage}
      </Text>

      {tasks.map((task: Task, index: number) => (
        <TaskItem key={index} task={task} taskNumber={index + 1} />
      ))}
    </Box>
  );
};

export default TaskSection;
