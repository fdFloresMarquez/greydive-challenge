import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { motion, useScroll, useSpring } from 'framer-motion';

import { TaskSection, Transcription, VideoPlayer } from '../components';

import { api } from '@/api';
import { Test } from '@/types';
import { capitalizeFirstLetter } from '@/helpers';

const TestScreen: React.FC = () => {
  const { id } = useParams();

  const [status, setStatus] = useState<'pending' | 'resolved' | 'rejected'>('pending');
  const [test, setTest] = useState<Test>();

  // Motion animations
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Simulates fetching data
    api.test
      .getById(Math.abs(Number(id)))
      .then((res) => {
        document.title = capitalizeFirstLetter(res.cliente);
        setTest(res);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [id]);

  // Checks if the id is valid, otherwhise returns to home page
  if (isNaN(Number(id)) || status === 'rejected') {
    return <Navigate to="/" />;
  }

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Only renders when tests are loaded */}
      {test && (
        <>
          <Text fontSize="4xl" fontWeight="Bold">
            {capitalizeFirstLetter(test.cliente)}
          </Text>
          <Text fontSize="3xl" fontWeight="bold" mb={6}>
            Test: Test de usabilidad en el sitio web
          </Text>

          <Text fontSize="2xl" fontWeight="Bold" mb={6}>
            Testeador {id}
          </Text>

          <VideoPlayer client={test.cliente} url={test.linkVideo} />

          <Transcription transcription={test.transcripcion} />

          <TaskSection stage={test.escenario} tasks={test.preguntas} />
        </>
      )}
    </>
  );
};

export default TestScreen;
