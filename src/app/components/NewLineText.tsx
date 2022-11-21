import { Text } from '@chakra-ui/react';

type Props = {
  text: string;
};

/* adds a new line of text for every /n */
const NewLineText: React.FC<Props> = ({ text }) => {
  const newText = text.split('\\n');

  return (
    <Text fontSize="1xl" fontWeight="bold">
      {newText.map(
        (str: string): React.ReactNode => (
          <>
            {str} <br />{' '}
          </>
        ),
      )}
    </Text>
  );
};

export default NewLineText;
