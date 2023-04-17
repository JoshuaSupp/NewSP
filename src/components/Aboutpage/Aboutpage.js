import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground' >
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>
                        Hello, my name is Simon Minter and I am a 12-year-old amateur learner of front-end development and engineering. I have a passion for coding and creating websites and applications. Currently,
                         I am enrolled in Meu Labs, 
                        a program that offers project-based learning for mostly programming and engineering.
                         I am taking their AN (Analytics) class, where I am honing my skills in front-end development and learning the fundamentals of engineering. 
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>Streamlit 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>Python</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage