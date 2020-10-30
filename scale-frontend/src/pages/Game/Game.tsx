import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import theme from '../../styles/theme';
import {
  generateFirstArray,
  removeProductNumberFromArray,
  removeSumNumberFromArray,
  removeRestNumberFromArray
} from '../../utils/prime_array';
import { Container, ButtonBox, InputBox, NoExist } from './styles';
import { Icon } from '@iconify/react';
import sendFilled from '@iconify/icons-carbon/send-filled';

interface stateType {
  name: string;
}

const Game: React.FC = () => {
  const [primes, setPrimes] = useState<number[]>(generateFirstArray(8000));

  const [guess, setGuess] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const [hint1, setHint1] = useState<string>('');
  const [hint2, setHint2] = useState<string>('');
  const [hint3, setHint3] = useState<string>('');
  const [sendHint1, setSendHint1] = useState<boolean>(false);
  const [sendHint2, setSendHint2] = useState<boolean>(false);
  const [sendHint3, setSendHint3] = useState<boolean>(false);

  const location = useLocation<stateType>();
  const history = useHistory();
  const startTime = Date.now();

  let interval = setInterval(function () {
    let elapsedTime = Date.now() - startTime;
    setTimer(elapsedTime);
  }, 100);

  useEffect(() => {
    if (!location.state.name) history.goBack();
    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(primes);
    const newGuess = primes[Math.floor(Math.random() * primes.length)];
    setGuess(newGuess);
    setAttempts((prev) => (prev += 1));
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
      const newArr = removeRestNumberFromArray(Number(hint2), [...primes]);
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

  function handleIsBigger() {
    if (primes.length > 1 && primes.indexOf(guess) !== primes.length + 1) {
      const newArr = primes;
      newArr.splice(0, newArr.indexOf(guess) + 1);
      setPrimes([...newArr]);
    }
  }

  function handleIsSmaller() {
    if (primes.length > 1 && primes.indexOf(guess) !== 0) {
      const newArr = primes;
      newArr.splice(newArr.indexOf(guess), newArr.length);
      setPrimes([...newArr]);
    }
  }

  function handleHit() {
    clearInterval(interval);
    history.push({
      pathname: '/end',
      state: {
        name: location.state.name,
        number: guess,
        attempts: attempts,
        timer: timer
      }
    });
    console.log(attempts, timer, guess);
  }

  return (
    <Container>
      <h1 className='title'>Vamos lá {location.state.name}!</h1>
      {primes.length ? (
        <span>
          Seu número é<br /> {guess}
        </span>
      ) : (
        <span>Seu número não existe</span>
      )}
      {primes.length ? (
        <>
          {' '}
          <ButtonBox>
            <button
              style={{ background: theme.colors.secondary }}
              className='button'
              onClick={handleIsSmaller}
            >
              Menor
            </button>
            <button
              onClick={handleHit}
              style={{ background: theme.colors.primary }}
              className='button'
            >
              Acertou
            </button>
            <button
              style={{ background: theme.colors.contrast }}
              className='button'
              onClick={handleIsBigger}
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
                  className={`input ${
                    isNaN(Number(hint1)) ? 'is-invalid' : ''
                  }`}
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
                      isNaN(Number(hint1)) || sendHint1
                        ? 'not-allowed'
                        : 'pointer',
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
                  className={`input ${
                    isNaN(Number(hint2)) ? 'is-invalid' : ''
                  }`}
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
                      isNaN(Number(hint2)) || sendHint2
                        ? 'not-allowed'
                        : 'pointer',
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
                  className={`input ${
                    isNaN(Number(hint3)) ? 'is-invalid' : ''
                  }`}
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
                      isNaN(Number(hint3)) || sendHint3
                        ? 'not-allowed'
                        : 'pointer',
                    pointerEvents: isNaN(Number(hint3)) ? 'none' : 'all'
                  }}
                  onClick={handleSendHint3}
                  className='icon is-small is-right'
                >
                  <Icon icon={sendFilled} />
                </span>
              </p>
            </div>
          </InputBox>{' '}
        </>
      ) : (
        <NoExist>
          <h3>
            Que tal fazer outra tentativa? Lembre-se que o número tem que ser
            primo.
          </h3>
          <button
            className='button'
            onClick={() => {
              window.location.reload();
            }}
          >
            Jogar novamente
          </button>
        </NoExist>
      )}
    </Container>
  );
};

export default Game;
