import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import movieCardImg from '../assets/Movie card.png';
import wodongaImg from '../assets/wordpress.png';
import expenseTrackerImg from '../assets/Expense tracker.png'
import prankCalculatorImg from '../assets/PrankCalculator.png'
import todoListImg from '../assets/Todo-list.png'
import notTodoListImg from '../assets/notodoList.png'
import pigGameImg from '../assets/pigGame.png';
import randomNumberImg from '../assets/randomNumberGenerator.png'



export const RecentWork = ({ isDarkMode }) => {
    // const github = 'https://shivamanibrt.github.io/to-do-list-application/';
    const movieCard = 'https://movie-list-nine-vert.vercel.app/';
    const expenseTracker = 'https://expense-tracker-using-reduc.vercel.app/';
    const wodonga = 'https://wodongalandcare.org.au/'
    const prankCalculator = 'https://react-prank-calculator-mu.vercel.app/';
    const todoList = 'https://shivamanibrt.github.io/to-do-list-application/';
    const notTodoList = 'https://not-todo-list-react-vy9d.vercel.app/';
    const pigGame = 'https://pig-game-js-lake.vercel.app/';
    const randomNumberGenerator = 'https://random-number-generator-js-seven.vercel.app/';

    const bgStyle = isDarkMode ? { backgroundColor: '#212529' } : {};
    const titleStyle = isDarkMode ? { color: 'white' } : { color: '#332D2D' };

    return (
        <div className='p-2' style={bgStyle}>

            <div className='d-flex justify-content-center text-light p-4'>
                <Row ><h2 style={titleStyle}>Recent Work</h2></Row>
            </div>
            <Row className='d-flex gap-3 flex-wrap justify-content-around'>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <a className="text-decoration-none" href={movieCard} target="_blank" rel="noreferrer" >
                        <Card>
                            <Card.Img variant="top" src={movieCardImg} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center' >Movie Collection</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <a className="text-decoration-none" href={randomNumberGenerator} target="_blank" rel="noreferrer">
                        <Card >
                            <Card.Img variant="top" src={randomNumberImg} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center'>Number Guesser</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <a className="text-decoration-none" href={wodonga} target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src={wodongaImg} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center'>WULN Website</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <a className="text-decoration-none" href={expenseTracker} target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src={expenseTrackerImg} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center'>Expense Tracker</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <a className="text-decoration-none" href={prankCalculator} target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src={prankCalculatorImg} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center'>Prank Calculator</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <a className="text-decoration-none" href={todoList} target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src={todoListImg} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center'>Toto-list</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <a className="text-decoration-none" href={notTodoList} target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src={notTodoListImg} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center'>Not-todo List</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} sm={5} md={4} lg={3}>
                    <a className="text-decoration-none" href={'pigGame'} target="_blank" rel="noreferrer">
                        <Card>
                            <Card.Img variant="top" src={pigGameImg} style={{ height: '200px' }} />
                            <Card.Body>
                                <Card.Title className='d-flex justify-content-center'>Pig Game</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>

            </Row>
        </div >
    )
}
