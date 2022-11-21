import { Box, Text } from '@chakra-ui/react';

type Props = {
  transcription: string;
};

const Transcription: React.FC<Props> = ({ transcription }) => {
  // split transcription into paragraphs so it's easier to put break rules
  const paragraphs = transcription.split('<br>');

  return (
    <>
      <Text fontSize="2xl" fontWeight="medium" mb={6}>
        Transcripción
      </Text>

      <Box
        maxHeight="300px"
        maxWidth={{ base: '100%', md: '55%' }}
        mb={6}
        overflow="scroll"
        pb="40px"
        px="50px"
      >
        {/* adds a breakrule after every paragraph */}
        {paragraphs.map((paragraph): React.ReactNode => {
          return (
            <>
              {paragraph}
              <br />
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Transcription;
