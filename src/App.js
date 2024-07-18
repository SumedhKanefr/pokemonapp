import React from 'react';
import './App.css';
import { Navbar, Nav, Container, Button, Carousel, Card, Row, Col } from 'react-bootstrap';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Pokemon Search App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Button variant="outline-light" href="#login">Login</Button>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>

      <Container className="main-content">
        <HomePage />
        <h2 className="mt-5">Featured Pokemon</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Bulbasaur</h3>
              <p>The Seed Pokemon.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Charmander</h3>
              <p>The Lizard Pokemon.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Squirtle</h3>
              <p>The Tiny Turtle Pokemon.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h2 className="mt-5">Pokemon Gallery</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" />
              <Card.Body>
                <Card.Title>Pikachu</Card.Title>
                <Card.Text>
                  Pikachu is an Electric-type Pokemon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" />
              <Card.Body>
                <Card.Title>Jigglypuff</Card.Title>
                <Card.Text>
                  Jigglypuff is a Normal/Fairy-type Pokemon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png" />
              <Card.Body>
                <Card.Title>Snorlax</Card.Title>
                <Card.Text>
                  Snorlax is a Normal-type Pokemon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="footer">
        <Container>
          <span>© 2024 Pokemon Search App. All rights reserved.</span>
        </Container>
      </footer>
    </div>
  );
}

export default App;
