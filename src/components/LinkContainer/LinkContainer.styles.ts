import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  border-bottom: 1px solid;
  color: ${({ theme }) => theme.colors.light};
  width: 224px;
`;

export const SectionLink = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 24px;
  align-items: center;
  text-decoration: none;
  gap: 28px;
  :hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
  :focus {
    background-color: grey;
  }
`;
export const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.gray};
  padding: 20px 24px;
`;
export const Image = styled.img`
  object-fit: contain;
  width: 20px;
  height: 20px;
`;
