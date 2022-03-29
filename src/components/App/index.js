import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './styles';

import GlobalStyles from '../../assets/styles/global';
import themeDefault from '../../assets/styles/themes/default';

import Routes from '../../routes';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={themeDefault}>
        <GlobalStyles />
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </Router>
  );
}
