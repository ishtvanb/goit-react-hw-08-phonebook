import Wrapper from 'components/Wrapper/Wrapper';
import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';

const LoginPage = () => {
  const error = useSelector(selectError);
  return (
    <main>
      <section>
        <Wrapper>
          <LoginForm />
          {error && (
            <p
              style={{
                color: 'red',
                marginTop: '5px',
                textAlign: 'center',
              }}
            >
              Oops, something went wrong... Please, try again
            </p>
          )}
        </Wrapper>
      </section>
    </main>
  );
};

export default LoginPage;