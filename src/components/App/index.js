import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';

import Login from '../../pages/Login';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Login />
      </Container>
    </>
  );
}

export default App;
