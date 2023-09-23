import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Section } from 'components/Section/Section';
import { AuthNav } from 'components/AuthNavigation/AuthNavigation.styled';
import {
  AuthLinkHome,
  HomeContainer,
  HomeTextContainer,
} from './HomeDescription.styled';

export const HomeDescription = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <HomeContainer>
      <HomeTextContainer>
        <Section title={'Welcome to Phonebook'}>
          {!isLoggedIn && (
            <>
              <p>Join Us Today!</p>
              <AuthNav>
                <AuthLinkHome to="/register">Register</AuthLinkHome>
                <AuthLinkHome to="/login">Log In</AuthLinkHome>
              </AuthNav>
            </>
          )}
        </Section>
      </HomeTextContainer>
    </HomeContainer>
  );
};
