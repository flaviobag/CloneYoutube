import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/youtube.svg';
import { ReactComponent as User } from '../../assets/user.svg';

export const HeaderContainer = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 56px;
  width: 100%;
`;

export const Icon = styled(Logo)`
  width: 90px;
  height: 20px;
  cursor: pointer;
`;

export const Photo = styled(User)`
  width: 90px;
  height: 40px;
  margin-left: 1800px;
  margin-top: 8px;
`;

export const DivLink = styled.div`
  height: 20px;
  width: 90px;
  position: absolute;
  top: calc(50% - 10px);
  margin-left: 20px;
`;
