import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & h1 {
    color: ${(props) => props.theme.colors.primary};
  }

  & h2 {
    margin-top: 20px !important;
    margin-bottom: 0 !important;
  }

  & span {
    text-align: center;
    font-size: 30px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 350px;
  margin-top: 15px;
  button {
    color: white;
  }
  button:hover {
    color: black;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 15px;
  width: 700px;
  & .icon {
    display: block;
    pointer-events: all !important;
    width: 1.5em !important;
    cursor: pointer;
  }
  & .field {
    margin: 0 !important;
    width: 200px;
  }
  & .field .control .is-invalid {
    border: solid 1px red;
  }
`;
