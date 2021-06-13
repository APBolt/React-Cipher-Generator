import { Container, Row, Col } from 'react-bootstrap';
import CipherComponent from './components/cipher';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <CipherComponent />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
