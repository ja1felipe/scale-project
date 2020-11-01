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

  @media (max-width: 690px) {
    flex-direction: column;

    & .field {
      margin-bottom: 15px !important;
    }
  }

  & .icon {
    display: block;
    pointer-events: all !important;
    width: 1.5em !important;
    cursor: pointer;
  }

  & .field {
    margin: 0;
    width: 200px;
    position: relative;
  }

  & .field[title]:hover:after {
    content: attr(title);
    padding: 5px;
    position: absolute;
    left: 0;
    top: 100%;
    margin: 5px;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    background-color: ${(props) => props.theme.colors.secondary + 'ac'};
    z-index: 1;
  }

  & .field .control .is-invalid {
    border: solid 1px red;
  }
`;

export const NoExist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  & h3 {
    color: ${(props) => props.theme.colors.contrast};
  }

  & button {
    margin-top: 15px;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
