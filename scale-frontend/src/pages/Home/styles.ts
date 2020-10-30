import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Separator = styled.div`
  width: 2px;
  background-color: ${(props) => props.theme.colors.primary};
  height: 400px;
  margin: 10px;
`;
