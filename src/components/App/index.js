import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';

import Login from '../../pages/Login';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Login />
      </Container>
    </>
  );
}
