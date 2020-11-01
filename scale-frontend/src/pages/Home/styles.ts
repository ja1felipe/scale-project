import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Separator = styled.div`
  width: 2px;
  background-color: ${(props) => props.theme.colors.primary};
  height: 400px;
  margin: 10px;

  @media (max-width: 969px) {
    width: 80%;
    height: 2px;
    margin: 40px;
  }
`;
