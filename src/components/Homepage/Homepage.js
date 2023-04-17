import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Simon Minter</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              // window.open("/");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              // window.open("/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              // window.open("/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>

          <Col md={7}>
           <div>
           <h2 style={{marginLeft:'0%'}}>Check Out Meu Labs! </h2>
           </div>
            <button onClick={() => {
              window.open("https://youtu.be/9VJZJJUxFr8");
            }}
              className='socailmediabtn'><AiFillYoutube className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/company/meu-labs/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home