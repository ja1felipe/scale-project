import React from 'react';
import Ranking from '../../components/Ranking/Ranking';
import StartForm from '../../components/StartForm/StartForm';

import { Container, Separator } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <StartForm />
      <Separator />
      <Ranking />
    </Container>
  );
};

export default Home;
