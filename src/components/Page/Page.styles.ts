import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
