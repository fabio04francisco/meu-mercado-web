import { ThemeProvider } from 'styled-components';
import { Container } from './styles';

import GlobalStyles from '../../assets/styles/global';
import themeDefault from '../../assets/styles/themes/default';
import Login from '../../pages/Splash';

export default function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Container>
        <Login />
      </Container>
    </ThemeProvider>
  );
}
