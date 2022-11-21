import { Divider, Stack, Text } from '@chakra-ui/react';

import NewLineText from './NewLineText';

import { TaskTypes, Task } from '@/types';

type Props = {
  task: Task;
  taskNumber: number;
};

const TaskItem: React.FC<Props> = ({ task, taskNumber }) => {
  return (
    <>
      <Divider borderColor="white" borderTop="1px" mt={6} />
      <Stack direction="column" mt={5} mx={5}>
        <Text fontSize="1xl" fontWeight="bold" mb={-2}>
          Tarea {taskNumber}:
        </Text>

        <NewLineText text={task.texto} />

        {/* Only shows response when is an opinionScale5 */}
        {task.tipoTarea === TaskTypes.opinionScale5 && (
          <Text fontSize="1xl" fontWeight="bold">
            Respuesta: {task.respuesta}
          </Text>
        )}

        <Text color="secondary.500" fontSize="1xl" fontWeight="medium" pt={1}>
          Duración de la tarea: {task.tiempo}
        </Text>
      </Stack>
    </>
  );
};

export default TaskItem;
