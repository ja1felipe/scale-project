import React from 'react';
import { msToTime } from '../../utils/mille_to_time';

import { Container, Table, ButtonBox } from './styles';

interface IRank {
  name: string;
  time: number;
  attempts: number;
  number: number;
}

const Ranking: React.FC = () => {
  const columns = [
    {
      name: '#',
      selector: 'id'
    },
    {
      name: 'Nome',
      selector: 'name'
    },
    {
      name: 'Tempo',
      selector: 'time'
    },
    {
      name: 'Chutes',
      selector: 'attempts'
    },
    {
      name: 'Resposta',
      selector: 'number'
    }
  ];

  const data: IRank[] = [
    {
      name: 'Felipe',
      time: 100000,
      attempts: 12,
      number: 113
    },
    {
      name: 'Carlos',
      time: 100000,
      attempts: 12,
      number: 113
    },
    {
      name: 'Teodoro',
      time: 100000,
      attempts: 12,
      number: 113
    },
    {
      name: 'Bia',
      time: 10000000,
      attempts: 12,
      number: 113
    },
    {
      name: 'Pedro',
      time: 100000,
      attempts: 12,
      number: 113
    }
  ];

  return (
    <Container>
      <h1 className='title'>Os melhores desafiantes, até agora...</h1>
      {data && (
        <>
          <Table>
            <thead>
              <tr>
                {columns.map((elem) => {
                  return <th key={elem.selector}>{elem.name}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((rank, i) => {
                return (
                  <tr key={rank.name}>
                    <td>{i + 1}</td>
                    <td>{rank.name}</td>
                    <td>{msToTime(rank.time)}</td>
                    <td>{rank.attempts}</td>
                    <td>{rank.number}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <ButtonBox>
            <button title='Página anterior' className='button'>
              Anterior
            </button>
            <button title='Próxima página' className='button'>
              Próxima
            </button>
          </ButtonBox>
        </>
      )}
    </Container>
  );
};

export default Ranking;
