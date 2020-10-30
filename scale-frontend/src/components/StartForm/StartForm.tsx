import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const StartForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const history = useHistory();

  return (
    <Container>
      <h1 className='title'>Jogo da Adivinhação</h1>
      <p className='content'>
        Pense em um número primo de 1 a 8000, e eu irei adivinha-lo, vamos ver o
        quantas tentativas irei precisar para desvenda-lo!
      </p>
      <form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          history.push({ pathname: '/game', state: { name: name } });
        }}
      >
        <input
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type='text'
          placeholder='Qual seu nome?'
        />
        <button className='button' type='submit'>
          Começar!
        </button>
      </form>
    </Container>
  );
};

export default StartForm;
