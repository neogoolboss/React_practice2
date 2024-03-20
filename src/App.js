import './App.css';
import { Button, Container, Nav, Navbar, Col, Row } from 'react-bootstrap';
import 상품1 from './img/상품1.jpg';
import 상품2 from './img/상품2.jpg';
import 상품3 from './img/상품3.jpg';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FigureShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src = {상품1} width='90%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src = {상품2} width ='90%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>
            <img src={상품3} width='90%'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
