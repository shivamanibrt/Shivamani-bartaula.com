import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export const FooterFile = ({ isDarkMode }) => {
    const linkedin = 'https://www.linkedin.com/in/shivamanibrt/';
    const twitter = 'https://twitter.com/Aayush_Bartaula';
    const hashnode = 'https://aayushbartaula.hashnode.dev/';
    const github = 'https://github.com/shivamanibrt';

    const bgStyle = isDarkMode ? { backgroundColor: '#454545' } : { backgroundColor: '#332D2D' };
    return (
        <>
            <div className='p-5' style={bgStyle}>
                <Container className='justify-content-center '>
                    <Row className='justify-content-center'>
                        <Col>
                            <a href={linkedin} target='_blank' rel='noreferrer'>
                                <i className='fa-brands fa-linkedin fa-xl ' alt='hashnode'></i>
                            </a>
                        </Col>
                        <Col>
                            <a href={hashnode} target='_blank' rel='noreferrer'>
                                <i className='fa-brands fa-hashnode fa-xl' alt='hashnode'></i>
                            </a>
                        </Col>
                        <Col>
                            <a href={twitter} target='_blank' rel='noreferrer'>
                                <i className='fa-brands fa-twitter fa-xl' alt='twitter'></i>
                            </a>
                        </Col>
                        <Col>
                            <a href={github} target='_blank' rel='noreferrer'>
                                <i className='fa-brands fa-github fa-xl' alt='github'></i>
                            </a>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col className='text-center'>
                        <div className='text-light p-4'>
                            © 2023 Shivamani Bartaula
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
