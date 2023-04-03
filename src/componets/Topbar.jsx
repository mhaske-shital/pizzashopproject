import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import {MdLocalOffer} from "react-icons/md"
export default function Topbar() {
  return (
    <>
    <Navbar bg="dark" varient="dark" expand="lg" >
    <Container fluid>
    <h6 className='text-light'> <MdLocalOffer className='text-warning '/> Free home Delivery on order above 500RS</h6>
    <Nav className='ms-auto'>
    <LinkContainer to="/" activeClassName=''>
    <Nav.Link className='text-light'>HOME</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/about" activeClassName>
    <Nav.Link className='text-light'>ABOUT</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/contact" activeClassName>
    <Nav.Link className='text-light'>CONTACT US</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/policy" activeClassName>
    <Nav.Link className='text-light'>TERM AND POLICY</Nav.Link>
    </LinkContainer>
    </Nav>
    </Container>
    </Navbar>
    </>
  )
}
