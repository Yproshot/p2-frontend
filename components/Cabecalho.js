import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink, } from 'react-bootstrap'

function Cabecalho() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="../">
            <img
              src="https://media.discordapp.net/attachments/478015318049161219/1123987292411928616/logo.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            ProntMed
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../pacientes">Pacientes</Nav.Link>
            <Nav.Link href="../medicos">Medicos</Nav.Link>
            <Nav.Link href="../exames">Exames</Nav.Link>
            <Nav.Link href="../consultas">Consultas</Nav.Link>
            <Nav.Link href="../medicamentos">Medicamentos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Cabecalho;