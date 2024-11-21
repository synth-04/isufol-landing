import React, { useState, useEffect } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import { Box, Typography } from '@mui/material';
import Masonry from './Masonry'; // Importa il componente Masonry

const sections = [
  {
    title: 'Benvenuti in ISUFOL',
    description: 'La nostra missione è costruire il futuro attraverso l’educazione...e il rispetto della privacy.',
    backgroundColor: '#4caf50',
    color: 'white',
  },
  {
    title: 'Una Scuola Moderna',
    description: 'Spazi progettati per l’apprendimento e la creatività. Anche se MANCA PRATICAMENTE TUTTO',
    backgroundColor: '#fbc02d',
    color: '#333',
  },
  {
    title: 'Un Team di Esperti',
    description: 'Insegnanti qualificati pronti a guidarti verso il successo. Soprattutto il prof. Di Pinto che è fortissimo.',
    backgroundColor: '#2196f3',
    color: 'white',
  },
  {
    title: 'Galleria Fotografica',
    description: '', // Nessuna descrizione necessaria
    backgroundColor: '#ffffff', // Colore neutro
    content: <Masonry />, // Usa la Masonry come contenuto
  },
];

const Page = () => {
  const [index, setIndex] = useState(0);
  const transRef = useSpringRef();

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  useEffect(() => {
    transRef.start();
  }, [index, transRef]);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {transitions((style, i) => (
        <animated.div
          style={{
            ...style,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: sections[i].backgroundColor,
            color: sections[i].color,
            position: 'absolute',
          }}
        >
          {sections[i].content || (
            <Box textAlign="center" padding="2rem">
              <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                {sections[i].title}
              </Typography>
              <Typography variant="h5">{sections[i].description}</Typography>
            </Box>
          )}
        </animated.div>
      ))}
    </div>
  );
};

export default Page;
