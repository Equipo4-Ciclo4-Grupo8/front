
import './SupBarra.css'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import React, { useState,useEffect } from 'react';

export default function SupBarra() {
    const[show,setShow]= useState(true)
    const[opcionRegistro,setOpcionRegistro]= useState(false)
    const[menu,setMenu]= useState(false)
    useEffect(() => {
       if(sessionStorage.getItem('token')){
           setMenu(true);
           setShow(false)
           setOpcionRegistro(true)
       }
        
    }, []);
    const salir=()=>{
        sessionStorage.clear()
        window.location('/LoginUsuario')
    }
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark" expand={show}>
                    <Container fluid>

                        <Navbar.Brand href="#">
                        
                    <img
          alt=""
          src="./Icono.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
                        Iservi</Navbar.Brand>                       

                        <Nav>
                        
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Servicios</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Noticias</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Equipo</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link  hidden={show} href="/LoginUsuario" onClick={()=>salir()} >cerrar sesion</Nav.Link>
                        </Nav>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#deets">Registros</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/ViewLogin" hidden={opcionRegistro}>Login</Nav.Link>
                        </Nav>


                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header  closeButton >
                                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Inicio</Nav.Link>
                                    <Nav.Link href="#action2">Servicios</Nav.Link>
                                    <Nav.Link href="#action2">Noticias</Nav.Link>
                                    <Nav.Link href="#action2">Equipo</Nav.Link>
                                    <Nav.Link href="#action2">Nosotros</Nav.Link>
                                    <NavDropdown title="Registros" id="offcanvasNavbarDropdown">
                                        <NavDropdown.Item href="/RegistrarProveedor">Usuarios registrados</NavDropdown.Item> 
                                        <NavDropdown.Item href="/verproveedores">Proveedores registrados</NavDropdown.Item>
                                        <NavDropdown.Item href="/vercategorias">Categorias registradas</NavDropdown.Item>
                                        <br />
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}
