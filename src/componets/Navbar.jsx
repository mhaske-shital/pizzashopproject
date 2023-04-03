import React from 'react'
import Container from 'react-bootstrap/Container';
import {Nav, Image} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import{useDispatch,useSelector} from "react-redux";
export default function Nabar() {
  const dispatch=useDispatch()
  const cartState=useSelector((state)=>state.cartReducer)
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand >
         <h1><Image src='./logo192.png'  style={{width:"100px",height:"50px"}}/>PIZZA </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
            <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link >Cart{cartState.cartItems.length}</Nav.Link>
            </LinkContainer>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
