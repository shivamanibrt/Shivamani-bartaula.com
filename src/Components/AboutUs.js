import React from 'react';
import { Button } from 'react-bootstrap';
// import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const AboutUs = () => {
    const [modalShow, setModalShow] = React.useState(false);

    // const [isDarkMode, setIsDarkMode] = useState(true);


    return (
        <>
            <section class="banner_image " id="about_us">
                <div class="about_info">
                    <div class="about_box">
                        <div>
                            <h3>Hello, I'm</h3>
                            <h1>Shivamani Bartaula</h1>
                            <h3>
                                A
                                <span style={{ color: '#2192ff' }}>Web Developer</span>
                                From
                                <span style={{ color: '#ff7f3f' }}>Sydney</span>
                            </h3>
                        </div>
                        <div class="vertical_line">
                            <Button variant="danger" onClick={() => setModalShow(true)}>
                                More about me
                            </Button>
                        </div>
                    </div>
                </div>
            </section >

            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>About Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p class="para">
                        Hi, I am Shivamani, a software engineer with one year of
                        experience in front-end web development and desktop
                        support. I am seeking an entry-level position in the IT
                        industry with full-time working rights in Australia
                        under a 485 Visa.
                    </p>
                    <p class="para">I specialise in the following.</p>
                    <p class="para">
                        HTML | CSS | JavaScript (React.js)| WordPress | Figma.
                    </p>
                    <p class="para">Desktop support | Customer support</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal >
        </>
    );
};
