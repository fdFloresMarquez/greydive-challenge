import { AspectRatio } from '@chakra-ui/react';

type Props = {
  url: string;
  client: string;
};

const VideoPlayer: React.FC<Props> = ({ client, url }) => {
  return (
    <AspectRatio maxW="100%" mb={6} ratio={16 / 9}>
      <iframe allowFullScreen src={url} title={client} />
    </AspectRatio>
  );
};

export default VideoPlayer;
