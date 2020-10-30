import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;

  & h1 {
    color: ${(props) => props.theme.colors.primary};
  }

  & p {
    font-size: 20px;
  }

  & form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input {
      padding: 20px;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      width: 275px;
      font-size: 20px;
    }
    input::placeholder {
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }

    button {
      background-color: ${(props) => props.theme.colors.primary};
      width: 275px;
      padding: 20px;
      margin-top: 20px;
      border: none;
      color: white;
      font-size: 24px;
      text-transform: uppercase;
    }

    button:hover {
      cursor: pointer;
      color: white;
      background-color: #6acd86;
    }
  }
`;
