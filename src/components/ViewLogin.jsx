import React from 'react'
import { Container, Row, Col, Card, } from 'react-bootstrap'
export default function ViewLogin() {
    return (
        <div>
            <Container fluid>
            <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col style={{ margin: 'auto' }}>
      <Card>
        <Card.Img variant="top" src="./profile.png" style={{ width: '14rem', display: 'block', margin: 'auto' }} />
        <Card.Body>
          <Card.Title className='text-center'>Cliente/Admin</Card.Title>
          <Card.Text>
            Acceso a Perfil Cliente Registrado.
          </Card.Text>
        </Card.Body>
        <Card.Body>
    <Card.Link href="/LoginUsuario">Login Cliente</Card.Link>
  </Card.Body>
      </Card>
      <Card style={{marginTop: '20px'}}>
        <Card.Img variant="top" src="./work-time.png" style={{ width: '14rem', display: 'block', margin: 'auto' }} />
        <Card.Body>
          <Card.Title className='text-center'>Proveedor Servicios</Card.Title>
          <Card.Text>
            Acceso Perfil Proveedor de Servicios Registrado
          </Card.Text>
        </Card.Body>
        <Card.Body>
    <Card.Link href="/Login">Login Proveedor de Servicios</Card.Link>
  </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
        </Container>
        </div>
    )
}
