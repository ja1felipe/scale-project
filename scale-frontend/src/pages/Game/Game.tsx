import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import theme from '../../styles/theme';
import {
  generateFirstArray,
  removeProductNumberFromArray,
  removeSumNumberFromArray,
  removeRestNumberFromArray
} from '../../utils/prime_array';
import { Container, ButtonBox, InputBox } from './styles';
import { Icon } from '@iconify/react';
import sendFilled from '@iconify/icons-carbon/send-filled';

interface stateType {
  name: any;
  from: { pathname: string };
}

const Game: React.FC = () => {
  const [primes, setPrimes] = useState<number[]>(generateFirstArray(8000));
  const [hint1, setHint1] = useState<string>('');
  const [hint2, setHint2] = useState<string>('');
  const [hint3, setHint3] = useState<string>('');
  const [sendHint1, setSendHint1] = useState<boolean>(false);
  const [sendHint2, setSendHint2] = useState<boolean>(false);
  const [sendHint3, setSendHint3] = useState<boolean>(false);

  const location = useLocation<stateType>();
  const history = useHistory();

  useEffect(() => {
    if (!location.state.name) history.goBack();
  }, []);

  useEffect(() => {
    console.log(primes);
  }, [primes]);

  function handleSendHint1() {
    if (!isNaN(Number(hint1)) && !sendHint1 && hint1 !== '') {
      const newArr = removeSumNumberFromArray(Number(hint1), [...primes]);
      setPrimes(newArr);
      setSendHint1(true);
    }
  }

  function handleSendHint2() {
    if (!isNaN(Number(hint2)) && !sendHint2 && hint2 !== '') {
      console.log(hint2);
      const newArr = removeRestNumberFromArray(Number(hint2), [...primes]);
      console.log(newArr);
      setPrimes(newArr);
      setSendHint2(true);
    }
  }

  function handleSendHint3() {
    if (!isNaN(Number(hint3)) && !sendHint3 && hint3 !== '') {
      const newArr = removeProductNumberFromArray(Number(hint3), [...primes]);
      setPrimes(newArr);
      setSendHint3(true);
    }
  }

  return (
    <Container>
      <h1 className='title'>Vamos lá {location.state.name}!</h1>
      <span>
        Seu número é<br /> 1000
      </span>
      <ButtonBox>
        <button
          style={{ background: theme.colors.secondary }}
          className='button'
        >
          Menor
        </button>
        <button style={{ background: theme.colors.primary }} className='button'>
          Acertou
        </button>
        <button
          style={{ background: theme.colors.contrast }}
          className='button'
        >
          Maior
        </button>
      </ButtonBox>
      <h2 className='subtitle'>Que tal dar alguma dica?</h2>
      <InputBox>
        <div className='field'>
          <p className='control has-icons-right'>
            <input
              disabled={sendHint1}
              className={`input ${isNaN(Number(hint1)) ? 'is-invalid' : ''}`}
              type='text'
              value={hint1}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHint1(e.target.value)
              }
              placeholder='A soma dos digitos que compoe o número vocês está pesando. (exemplo: 113 -> soma dos digitos = 5)'
            />
            <span
              style={{
                cursor:
                  isNaN(Number(hint1)) || sendHint1 ? 'not-allowed' : 'pointer',
                pointerEvents: isNaN(Number(hint1)) ? 'none' : 'all'
              }}
              onClick={handleSendHint1}
              className='icon is-small is-right'
            >
              <Icon icon={sendFilled} />
            </span>
          </p>
        </div>
        <div className='field'>
          <p className='control has-icons-right'>
            <input
              disabled={sendHint2}
              className={`input ${isNaN(Number(hint2)) ? 'is-invalid' : ''}`}
              type='text'
              value={hint2}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHint2(e.target.value)
              }
              placeholder='O resto da divisão do seu número por 7. (exemplo: 113 % 7 = 1)'
            />
            <span
              style={{
                cursor:
                  isNaN(Number(hint2)) || sendHint2 ? 'not-allowed' : 'pointer',
                pointerEvents: isNaN(Number(hint2)) ? 'none' : 'all'
              }}
              onClick={handleSendHint2}
              className='icon is-small is-right'
            >
              <Icon icon={sendFilled} />
            </span>
          </p>
        </div>
        <div className='field'>
          <p className='control has-icons-right'>
            <input
              disabled={sendHint3}
              className={`input ${isNaN(Number(hint3)) ? 'is-invalid' : ''}`}
              type='text'
              value={hint3}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setHint3(e.target.value)
              }
              placeholder='O produto dos digitos que compoe o número vocês está pesando. (exemplo: 113 -> 1*1*3 = 6)'
            />
            <span
              style={{
                cursor:
                  isNaN(Number(hint3)) || sendHint3 ? 'not-allowed' : 'pointer',
                pointerEvents: isNaN(Number(hint3)) ? 'none' : 'all'
              }}
              onClick={handleSendHint3}
              className='icon is-small is-right'
            >
              <Icon icon={sendFilled} />
            </span>
          </p>
        </div>
      </InputBox>
    </Container>
  );
};

export default Game;