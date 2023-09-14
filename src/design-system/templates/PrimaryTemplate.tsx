import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type PrimaryTemplateProps = {
  children: JSX.Element | JSX.Element[];
};

const PrimaryTemplate = ({ children }: PrimaryTemplateProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <NavBar>
        <NavLink onClick={() => navigate('/')}>Home</NavLink>
        <NavLink onClick={() => navigate('/users/create')}>Create User</NavLink>
      </NavBar>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default PrimaryTemplate

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Content = styled.section`
  padding-inline: 2rem;
`;

const NavBar = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const NavLink = styled.button`
  padding: .5rem;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.2rem;

  & :hover {
    color: #e0e0e0;
  }
`
