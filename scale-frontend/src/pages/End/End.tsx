import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import moment from 'moment';

import { Container } from './styles';

interface stateType {
  name: string;
  timer: number;
  attempts: number;
  number: number;
  from: { pathname: string };
}

const End: React.FC = () => {
  const location = useLocation<stateType>();
  const history = useHistory();
  return (
    <Container>
      <h1 className='title'>{location.state.name} seu resultado final foi</h1>
      <p>
        Tempo:{' '}
        <span>{moment.utc(location.state.timer).format('HH:mm:ss')}</span>
      </p>
      <p>
        Tentativas: <span>{location.state.attempts}</span>
      </p>
      <p>
        Número certo: <span>{location.state.number}</span>
      </p>
      <button
        className='button'
        onClick={() => {
          history.push({
            pathname: '/',
            state: {}
          });
        }}
      >
        Jogar novamente
      </button>
    </Container>
  );
};

export default End;
