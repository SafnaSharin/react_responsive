import React from 'react'
import styles from './nav.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Container from 'react-bootstrap/Container';

const navbar = () => {
  return (
    <div>

         <Navbar collapseOnSelect expand="lg" variant="light"className={styles.navbar}  >
           <Container className={styles.container}>
             <Navbar.Brand href="#home" className={styles.head}>Elemental Lifestyle</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav " class="justify-content-end ">
               <Nav className="me-auto ali ms-5 ">
                 <Nav.Link href="/">Welcome</Nav.Link>
                 <Nav.Link href="/shop">Shop</Nav.Link>
                 <Nav.Link href="/about">About</Nav.Link>
                 <Nav.Link href="/faq">FAQ</Nav.Link>
                 <Nav.Link href="/contact" >Contact</Nav.Link>
                </Nav>
             </Navbar.Collapse>
             <Button variant="success" >Shop Now</Button>
             <h1 class={styles.icon}> <AiOutlineShoppingCart /></h1>
           </Container>
          </Navbar>
    </div>
  )
}

export default navbar
