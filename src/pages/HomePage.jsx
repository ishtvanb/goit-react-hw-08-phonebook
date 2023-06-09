import { PrimaryTitle } from 'components/Wrapper/Wrapper.styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import Wrapper from 'components/Wrapper/Wrapper';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <main>
      <section>
        <Wrapper>
          {!isLoggedIn ? (
            <>
              <PrimaryTitle>Phonebook web app</PrimaryTitle>
              <p
                style={{
                  color: 'limegreen',
                  textAlign: 'center',
                  padding: 0,
                  margin: 0, 
                  marginBottom: '10px',
                }}
              >
                Use this app and manage your contacts
              </p>
            
             <p
                style={{
                  textAlign: 'center',
                  padding: 0,
                  margin: 0,
                }}
              >
                Create your account by pressing {' '}
                <Button
                  component={Link}
                  to="/register"
                  variant="text"
                  color="primary"
                  size="small"
                >
                  Register
                </Button>{' '}
                If you already have an account, press{' '}
                <Button
                  component={Link}
                  to="/login"
                  variant="text"
                  color="primary"
                  size="small"
                > 
                Log in
                </Button>
              </p>
            </>
          ) : (
            <div
              style={{
                maxWidth: '400px',
                margin: '0 auto',
                padding: '40px 0 40px 0',
              }}
            >
              <p style={{ textAlign: 'center', padding: 0, margin: 0 }}>
                You have already logged In
              </p>
            </div>
          )}
        </Wrapper>
      </section>
    </main>
  );
};

export default HomePage;