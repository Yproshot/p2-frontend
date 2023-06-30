import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function index() {
  return (
    <Pagina titulo='Pagina inicial'>

      <Row>

        <Col>
          <Card>
            <Card.Header className='justify-center'>
              <p><strong>
                Medicos
              </strong></p>
            </Card.Header>
            <Card.Body>
              <p>
                Para acessar os dados dos medicos clique <Link href={'./medicos'}>aqui!</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card>
            <Card.Header>
              <p>
                <strong>Pacientes</strong>
              </p>
            </Card.Header>
            <Card.Body>
              <p>
                Para acessar os dados dos pacientes clique <Link href={'./pacientes'}>aqui!</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>

        <Col>
          <Card>
            <Card.Header>
              <p>
                <strong>Medicamentos</strong>
              </p>
            </Card.Header>
            <Card.Body>
              <p>
                Para acessar os dados dos Medicamentos clique <Link href={'./medicamentos'}>aqui!</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card bg=''>
            <Card.Header>
              <p>
                <strong>Exames</strong>
              </p>
            </Card.Header>
            <Card.Body>
              <p>
                Para acessar os dados dos Exames clique <Link href={'./exames'}>aqui!</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <br/>

      <Row>

        <Col>
          <Card bg=''>
            <Card.Header>
            <p>
                <strong>Consultas</strong>
              </p>

            </Card.Header>
            <Card.Body>
            <p>
                Para acessar os dados dos Consultas clique <Link href={'./consultas'}>aqui!</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Pagina>
  )
}

export default index