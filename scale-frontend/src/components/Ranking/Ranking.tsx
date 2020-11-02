import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { IMatch } from '../../types/types';
import { msToTime } from '../../utils/mille_to_time';

import { Container, Table, ButtonBox } from './styles';

const Ranking: React.FC = () => {
  const [data, setData] = useState<IMatch[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    api.list(page).then((res) => {
      setTotal(res.count);
      setData(res.results);
    });
  }, [page]);

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
                  <tr key={rank.id}>
                    <td>{i + 1 + 5 * (page - 1)}</td>
                    <td title={rank.name}>{rank.name}</td>
                    <td>{msToTime(rank.time)}</td>
                    <td>{rank.attempts}</td>
                    <td>{rank.number}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <ButtonBox>
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
              title='Página anterior'
              className='button'
            >
              Anterior
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={Math.ceil(total / 5) === page || total === 0}
              title='Próxima página'
              className='button'
            >
              Próxima
            </button>
          </ButtonBox>
        </>
      )}
    </Container>
  );
};

export default Ranking;
