import Wrapper from 'components/Wrapper/Wrapper';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';

const RegisterPage = () => {
  const error = useSelector(selectError);
  return (
    <main>
      <section>
        <Wrapper>
          <RegisterForm />
          {error && (
            <p style={{ color: 'red', marginTop: '5px', textAlign: 'center' }}>
              Oops, something went wrong... Please, try again
            </p>
          )}
        </Wrapper>
      </section>
    </main>
  );
};

export default RegisterPage;