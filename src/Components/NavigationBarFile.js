import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import myPdf from "../assets/Shivamani-Bartaula-cv_1.pdf";
import { Button } from 'react-bootstrap';

export const NavigationBarFile = ({ isDarkMode, handleThemeChange }) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} className="justify-content-between">
                <Container >
                    <Navbar.Brand href="#home" className="navbar-brand-red">
                        Shivamani
                    </Navbar.Brand>
                    <Nav className="me-auto align-items-center">
                        <Nav.Link href='#a'>Home</Nav.Link>
                        <Nav.Link href="#b">Portfolio</Nav.Link>
                        <Nav.Link href="#c">Tech stack</Nav.Link>
                        <Nav.Link href="#d">Blog</Nav.Link>
                        <Nav.Link href="#e">Get in touch</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href={myPdf} onClick={() => window.open(myPdf)} target="_blank" >
                            <Button variant="danger" className='p-2'>
                                Download Resume <i className="fa-solid fa-circle-down"></i>
                            </Button>
                        </Nav.Link>

                        <Nav.Link onClick={handleThemeChange} >
                            {isDarkMode
                                ? (<i className="fa-solid fa-toggle-on fa-xl"></i>)
                                : (<i className="fa-solid fa-toggle-off fa-xl"></i>)
                            }
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};
