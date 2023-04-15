import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import linkedinImg from '../icon/likedin.png';
import twitterImg from '../icon/twitter.png';
import hashnodeImg from '../icon/hashnode.png';
import githubImg from '../icon/icons8-github-480.png';

export const GetInTouch = () => {
    const linkedin = 'https://www.linkedin.com/in/shivamanibrt/';
    const twitter = 'https://twitter.com/Aayush_Bartaula';
    const hashnode = 'https://aayushbartaula.hashnode.dev/';
    const github = 'https://github.com/shivamanibrt';
    const email = "shivamanibrt03350@gmail.com";
    const mailto = `mailto:${email}`;

    return (
        <>
            <div className='bg-dark p-4'>
                <div className='d-flex justify-content-center text-light p-4'>
                    <Row ><h2 > Get in touch</h2></Row>
                </div>
                <Container>
                    <Row className='d-flex flex-wrap'>
                        <Col>
                            <a href={linkedin} target="_blank" rel="noreferrer">
                                <img src={linkedinImg} class="get_in_touch_social" alt="LinkedIn" />
                            </a>
                        </Col>
                        <Col>
                            <a href={hashnode} target="_blank" rel="noreferrer" >
                                <img src={hashnodeImg} class="get_in_touch_social" alt="hashnode" />
                            </a>
                        </Col>
                        <Col>
                            <a href={twitter} target="_blank" rel="noreferrer">
                                <img src={twitterImg} class="get_in_touch_social" alt="twitter" />
                            </a>
                        </Col>
                        <Col>
                            <a href={github} target="_blank" rel="noreferrer">
                                <img src={githubImg} class="get_in_touch_social" alt="github" />
                            </a>
                        </Col>
                    </Row>


                    <Row>
                        <div className='text-light text-center p-4'>
                            <Row><h1 class="or">OR</h1></Row>
                        </div>
                    </Row>


                    <Row>
                        <Container className='emailContainer text-center rounded-5 text-light d-flex justify-content-center'>
                            <h3 className="email p-3 bg-danger rounded-5 p-4 ">
                                <a href={mailto} className="text-light text-decoration-none me-2 p-1">
                                    {email} <i className="fa-solid fa-envelope"></i>
                                </a>
                            </h3>
                        </Container>
                    </Row>

                </Container >
            </div >
        </>
    )
}
