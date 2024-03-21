import './App.css';
import { Button, Container, Nav, Navbar, Col, Row } from 'react-bootstrap';
import {useState} from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Sangse from './pages/SangsePage';
import About from './pages/About';

function App() {

  const [toy, setToy] = useState(data);

  const navigate = useNavigate();
  

  return (
    <div className="App">
     
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FigureShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to='/'>홈</Link>
      <Link to='/detail'>상세페이지</Link>

      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg"></div>
            <div className='container'>
            <div className='row'>
            {
              toy.map((a, i) => {
                return (
                  <Card toy={toy[i]} i={i}/>  
                )
              })
            }

            </div>
            </div>
          </>
        }/>
        <Route path='/detail' element={<Sangse/>}/>
        
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임당</div>}/>
          <Route path='location' element={<About/>}/>
        </Route>

        <Route path='*' element={<div>404ERROR지롱</div>}/>
      </Routes>

      
      </div>
      
      
  );
}

function Card(props) {
  return(
    <div className='col-md-4'>
            <img src={require(`./img/상품${props.i+1}.jpg`)} width='90%'/>
            <h4>{props.toy.title}</h4>
            <p>{props.toy.content}</p>
            <p>{props.toy.price}</p>
          </div>
  );
}

export default App;
