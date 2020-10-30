import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & p {
    font-size: 20px;
    color: ${(props) => props.theme.colors.primary};
  }

  & p span {
    color: black;
  }

  & button {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    text-transform: uppercase;
    margin-top: 25px;
    padding: 30px;
    border-radius: 0;
  }
`;
