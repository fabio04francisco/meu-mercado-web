/* eslint-disable react/prop-types */
import { Container } from './styles';

export default function GroupForm({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}
