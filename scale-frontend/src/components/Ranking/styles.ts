import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 380px;
  flex-direction: column;
  margin-left: 10px;

  @media (max-width: 969px) {
    min-height: auto;
  }

  & h1 {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Table = styled.table`
  & tr {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary + 'a3'};

    td,
    th {
      padding: 10px;
    }

    td {
      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const ButtonBox = styled.div`
  align-self: flex-end;
  margin-top: 10px;

  button {
    margin-left: 5px;
    color: white;
    background-color: ${(props) => props.theme.colors.secondary};
    height: 35px;
    border-radius: 0;
  }
  button:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.secondary + 'e0'};
  }

  button:disabled {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
